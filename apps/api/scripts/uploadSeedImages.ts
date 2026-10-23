/**
 * Puts the seed's photos in your own ImageKit account and points the seed at them.
 *
 * The seed files in data/seed/ name each photo by a placeholder, "/seed-images/<path>", and the photo itself is in
 * data/seed-images/<path>. This script uploads every one of them to your ImageKit (into /sellzy/<folder>), then
 * replaces each placeholder in the seed files with the photo's new address. Run `pnpm seed` afterwards and your
 * database uses your own photos.
 *
 * The storefront's demo order (apps/web/src/components/order-tracking/dummyOrderData.ts, part 33) uses three of the
 * same photos; if that file is there, its placeholders are filled in too. Copied it in after running this script? Run
 * the script again: it fills them in from what it already uploaded.
 *
 * It reads IMAGEKIT_PRIVATE_KEY from apps/api/.env (part 12 adds it). It's safe to run again: a photo already
 * uploaded is skipped (data/seed-images/.uploaded.json remembers it), and re-uploading the same name overwrites the
 * file instead of adding a copy.
 *
 * Usage, from the repo root:  pnpm --filter @sellzy/api exec tsx scripts/uploadSeedImages.ts
 */
import fs from "node:fs";
import path from "node:path";
import dotenv from "dotenv";

dotenv.config();

const SEED_DIR = path.join(process.cwd(), "data", "seed");
const IMAGE_DIR = path.join(process.cwd(), "data", "seed-images");
const DONE_FILE = path.join(IMAGE_DIR, ".uploaded.json");
const UPLOAD_URL = process.env.IMAGEKIT_UPLOAD_URL || "https://upload.imagekit.io/api/v1/files/upload";
const PLACEHOLDER = /\/seed-images\/[^"'\s<>)\\]+/g;
const AT_ONCE = 6;
/** other files that name seed photos by placeholder */
const OTHER_FILES = [path.join(process.cwd(), "..", "web", "src", "components", "order-tracking", "dummyOrderData.ts")];

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
if (!privateKey) {
  console.error("IMAGEKIT_PRIVATE_KEY is missing from apps/api/.env. Add your ImageKit keys first (part 12).");
  process.exit(1);
}
const auth = "Basic " + Buffer.from(`${privateKey}:`).toString("base64");

/** every placeholder in every string of a seed file */
function placeholders(value: Json, found: Set<string>) {
  if (typeof value === "string") {
    for (const match of value.match(PLACEHOLDER) ?? []) found.add(match);
  } else if (Array.isArray(value)) {
    value.forEach((v) => placeholders(v, found));
  } else if (value && typeof value === "object") {
    Object.values(value).forEach((v) => placeholders(v, found));
  }
}

/** the same value with each placeholder replaced by its uploaded address */
function replaced(value: Json, urls: Record<string, string>): Json {
  if (typeof value === "string") return value.replace(PLACEHOLDER, (match) => urls[match] ?? match);
  if (Array.isArray(value)) return value.map((v) => replaced(v, urls));
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, replaced(v, urls)]));
  }
  return value;
}

/** uploads one photo; ImageKit answers with the file's address */
async function upload(placeholder: string): Promise<string> {
  const relative = placeholder.slice("/seed-images/".length);
  const file = path.join(IMAGE_DIR, relative);
  const form = new FormData();
  form.append("file", new Blob([fs.readFileSync(file)]), path.basename(relative));
  form.append("fileName", path.basename(relative));
  form.append("folder", `/sellzy/${path.dirname(relative)}`);
  form.append("useUniqueFileName", "false");
  form.append("overwriteFile", "true");

  for (let attempt = 1; ; attempt++) {
    const res = await fetch(UPLOAD_URL, { method: "POST", headers: { Authorization: auth }, body: form });
    if (res.ok) return ((await res.json()) as { url: string }).url;
    if (attempt === 3 || res.status === 401 || res.status === 403) {
      throw new Error(`${relative}: ImageKit answered ${res.status} ${await res.text()}`);
    }
    await new Promise((r) => setTimeout(r, 1000 * attempt));
  }
}

async function main() {
  const files = fs.readdirSync(SEED_DIR).filter((f) => f.endsWith(".json"));
  const seeds = files.map((f) => ({ file: path.join(SEED_DIR, f), data: JSON.parse(fs.readFileSync(path.join(SEED_DIR, f), "utf-8")) as Json }));

  const others = OTHER_FILES.filter((f) => fs.existsSync(f)).map((file) => ({ file, text: fs.readFileSync(file, "utf-8") }));

  const found = new Set<string>();
  seeds.forEach((s) => placeholders(s.data, found));
  others.forEach((o) => placeholders(o.text, found));
  if (found.size === 0) {
    console.log("No placeholders left: the seed's photos are already in your ImageKit.");
    return;
  }

  const urls: Record<string, string> = fs.existsSync(DONE_FILE) ? JSON.parse(fs.readFileSync(DONE_FILE, "utf-8")) : {};
  const todo = [...found].filter((p) => !urls[p]);
  console.log(`${found.size} photos named in the seed; ${todo.length} to upload to your ImageKit.`);

  let done = 0;
  const queue = [...todo];
  const worker = async () => {
    for (let next = queue.shift(); next; next = queue.shift()) {
      urls[next] = await upload(next);
      fs.writeFileSync(DONE_FILE, JSON.stringify(urls, null, 2));
      done++;
      if (done % 25 === 0 || done === todo.length) console.log(`  uploaded ${done} of ${todo.length}`);
    }
  };
  await Promise.all(Array.from({ length: AT_ONCE }, worker));

  for (const s of seeds) {
    fs.writeFileSync(s.file, JSON.stringify(replaced(s.data, urls), null, 2));
  }
  for (const o of others) {
    fs.writeFileSync(o.file, replaced(o.text, urls) as string);
  }
  console.log("Done. The seed files now point at your own ImageKit. Run `pnpm seed` to update your database.");
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
