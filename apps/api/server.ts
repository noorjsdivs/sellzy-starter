import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
  res.json({ message: "Sellzy API is running..." });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
