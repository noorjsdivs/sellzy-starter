// Mock data shown to "preview" role users so they can explore the vendor
// portal layout without hitting the real backend. Numbers and names are
// intentionally generic so they read as a demo rather than realistic data.

export type PreviewProduct = {
  _id: string;
  name: string;
  price: number;
  stock: number;
  image?: string;
  approvalStatus: "pending" | "approved" | "rejected";
  category: { _id: string; name: string };
  brand: { _id: string; name: string };
  createdAt: string;
};

export type PreviewOrderItem = {
  name: string;
  price: number;
  quantity: number;
  image?: string;
  commissionRate?: number;
};

export type PreviewOrder = {
  _id: string;
  createdAt: string;
  status:
    | "pending"
    | "processing"
    | "confirmed"
    | "packed"
    | "delivering"
    | "delivered"
    | "completed"
    | "cancelled";
  paymentStatus: "pending" | "paid" | "refunded";
  paymentMethod: "card" | "cod" | "wallet";
  customer: { name: string; email: string };
  shippingAddress: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    street: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  vendorItems: PreviewOrderItem[];
  vendorSubtotal: number;
  platformCut: number;
  vendorPayout: number;
};

const ONE_DAY = 24 * 60 * 60 * 1000;
const now = Date.now();
const daysAgo = (n: number) => new Date(now - n * ONE_DAY).toISOString();

export const previewProducts: PreviewProduct[] = [
  {
    _id: "preview-prod-001",
    name: "Classic Cotton T-Shirt",
    price: 24.99,
    stock: 142,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&q=70",
    approvalStatus: "approved",
    category: { _id: "cat-1", name: "Apparel" },
    brand: { _id: "brand-1", name: "Sellzy Basics" },
    createdAt: daysAgo(2),
  },
  {
    _id: "preview-prod-002",
    name: "Wireless Bluetooth Earbuds",
    price: 79.0,
    stock: 36,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=200&q=70",
    approvalStatus: "approved",
    category: { _id: "cat-2", name: "Electronics" },
    brand: { _id: "brand-2", name: "AudioPro" },
    createdAt: daysAgo(5),
  },
  {
    _id: "preview-prod-003",
    name: "Leather Crossbody Bag",
    price: 119.5,
    stock: 12,
    image:
      "https://images.unsplash.com/photo-1591561954555-607968c989ab?w=200&q=70",
    approvalStatus: "pending",
    category: { _id: "cat-3", name: "Accessories" },
    brand: { _id: "brand-3", name: "Atelier 7" },
    createdAt: daysAgo(1),
  },
  {
    _id: "preview-prod-004",
    name: "Stainless Steel Water Bottle",
    price: 18.0,
    stock: 0,
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=200&q=70",
    approvalStatus: "approved",
    category: { _id: "cat-4", name: "Home & Living" },
    brand: { _id: "brand-4", name: "Hydra" },
    createdAt: daysAgo(11),
  },
  {
    _id: "preview-prod-005",
    name: "Yoga Mat 6mm Eco",
    price: 32.0,
    stock: 58,
    image:
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=200&q=70",
    approvalStatus: "rejected",
    category: { _id: "cat-5", name: "Sports" },
    brand: { _id: "brand-5", name: "FlexLab" },
    createdAt: daysAgo(20),
  },
  {
    _id: "preview-prod-006",
    name: "Ceramic Pour-Over Coffee Set",
    price: 64.0,
    stock: 24,
    image:
      "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=200&q=70",
    approvalStatus: "pending",
    category: { _id: "cat-4", name: "Home & Living" },
    brand: { _id: "brand-6", name: "Morning Ritual" },
    createdAt: daysAgo(3),
  },
];

export const previewOrders: PreviewOrder[] = [
  {
    _id: "preview-order-1001",
    createdAt: daysAgo(0),
    status: "delivering",
    paymentStatus: "paid",
    paymentMethod: "card",
    customer: { name: "Alex Carter", email: "alex@example.com" },
    shippingAddress: {
      firstName: "Alex",
      lastName: "Carter",
      phoneNumber: "+1-555-0142",
      street: "221B Baker Street",
      city: "Brooklyn",
      state: "NY",
      country: "US",
      postalCode: "11201",
    },
    vendorItems: [
      { name: "Wireless Bluetooth Earbuds", price: 79, quantity: 1 },
      { name: "Classic Cotton T-Shirt", price: 24.99, quantity: 2 },
    ],
    vendorSubtotal: 128.98,
    platformCut: 12.9,
    vendorPayout: 116.08,
  },
  {
    _id: "preview-order-1002",
    createdAt: daysAgo(1),
    status: "delivered",
    paymentStatus: "paid",
    paymentMethod: "card",
    customer: { name: "Priya Sharma", email: "priya@example.com" },
    shippingAddress: {
      firstName: "Priya",
      lastName: "Sharma",
      phoneNumber: "+44-20-7946-0958",
      street: "10 Downing Mews",
      city: "London",
      state: "Greater London",
      country: "UK",
      postalCode: "SW1A 2AA",
    },
    vendorItems: [
      { name: "Leather Crossbody Bag", price: 119.5, quantity: 1 },
    ],
    vendorSubtotal: 119.5,
    platformCut: 11.95,
    vendorPayout: 107.55,
  },
  {
    _id: "preview-order-1003",
    createdAt: daysAgo(2),
    status: "processing",
    paymentStatus: "paid",
    paymentMethod: "wallet",
    customer: { name: "Jonas Beck", email: "jonas@example.com" },
    shippingAddress: {
      firstName: "Jonas",
      lastName: "Beck",
      phoneNumber: "+49-30-555-0188",
      street: "Kantstraße 15",
      city: "Berlin",
      state: "Berlin",
      country: "DE",
      postalCode: "10623",
    },
    vendorItems: [
      { name: "Yoga Mat 6mm Eco", price: 32, quantity: 1 },
      { name: "Stainless Steel Water Bottle", price: 18, quantity: 2 },
    ],
    vendorSubtotal: 68,
    platformCut: 6.8,
    vendorPayout: 61.2,
  },
  {
    _id: "preview-order-1004",
    createdAt: daysAgo(4),
    status: "pending",
    paymentStatus: "pending",
    paymentMethod: "cod",
    customer: { name: "Mei Lin", email: "mei@example.com" },
    shippingAddress: {
      firstName: "Mei",
      lastName: "Lin",
      phoneNumber: "+65-6555-1234",
      street: "5 Orchard Boulevard",
      city: "Singapore",
      state: "Central",
      country: "SG",
      postalCode: "238884",
    },
    vendorItems: [
      { name: "Ceramic Pour-Over Coffee Set", price: 64, quantity: 1 },
    ],
    vendorSubtotal: 64,
    platformCut: 6.4,
    vendorPayout: 57.6,
  },
  {
    _id: "preview-order-1005",
    createdAt: daysAgo(7),
    status: "cancelled",
    paymentStatus: "refunded",
    paymentMethod: "card",
    customer: { name: "Diego Ramirez", email: "diego@example.com" },
    shippingAddress: {
      firstName: "Diego",
      lastName: "Ramirez",
      phoneNumber: "+34-91-555-0177",
      street: "Calle Gran Vía 28",
      city: "Madrid",
      state: "Madrid",
      country: "ES",
      postalCode: "28013",
    },
    vendorItems: [
      { name: "Classic Cotton T-Shirt", price: 24.99, quantity: 3 },
    ],
    vendorSubtotal: 74.97,
    platformCut: 7.5,
    vendorPayout: 67.47,
  },
  {
    _id: "preview-order-1006",
    createdAt: daysAgo(10),
    status: "delivered",
    paymentStatus: "paid",
    paymentMethod: "card",
    customer: { name: "Hannah Olsen", email: "hannah@example.com" },
    shippingAddress: {
      firstName: "Hannah",
      lastName: "Olsen",
      phoneNumber: "+47-22-555-0166",
      street: "Karl Johans gate 22",
      city: "Oslo",
      state: "Oslo",
      country: "NO",
      postalCode: "0159",
    },
    vendorItems: [
      { name: "Wireless Bluetooth Earbuds", price: 79, quantity: 2 },
    ],
    vendorSubtotal: 158,
    platformCut: 15.8,
    vendorPayout: 142.2,
  },
  {
    _id: "preview-order-1007",
    createdAt: daysAgo(14),
    status: "delivered",
    paymentStatus: "paid",
    paymentMethod: "card",
    customer: { name: "Tomás Ribeiro", email: "tomas@example.com" },
    shippingAddress: {
      firstName: "Tomás",
      lastName: "Ribeiro",
      phoneNumber: "+351-21-555-0199",
      street: "Rua Augusta 100",
      city: "Lisbon",
      state: "Lisboa",
      country: "PT",
      postalCode: "1100-053",
    },
    vendorItems: [
      { name: "Ceramic Pour-Over Coffee Set", price: 64, quantity: 1 },
      { name: "Stainless Steel Water Bottle", price: 18, quantity: 1 },
    ],
    vendorSubtotal: 82,
    platformCut: 8.2,
    vendorPayout: 73.8,
  },
  {
    _id: "preview-order-1008",
    createdAt: daysAgo(21),
    status: "delivered",
    paymentStatus: "paid",
    paymentMethod: "card",
    customer: { name: "Aiko Tanaka", email: "aiko@example.com" },
    shippingAddress: {
      firstName: "Aiko",
      lastName: "Tanaka",
      phoneNumber: "+81-3-5555-0123",
      street: "1-1 Chiyoda",
      city: "Tokyo",
      state: "Tokyo",
      country: "JP",
      postalCode: "100-0001",
    },
    vendorItems: [
      { name: "Yoga Mat 6mm Eco", price: 32, quantity: 1 },
    ],
    vendorSubtotal: 32,
    platformCut: 3.2,
    vendorPayout: 28.8,
  },
];
