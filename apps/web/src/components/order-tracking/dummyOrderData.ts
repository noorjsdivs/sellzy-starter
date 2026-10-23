/**
 * Dummy order data for preview/demo purposes
 * This data structure matches the real order data from the API
 */
export const dummyOrderData = {
  _id: "DEMO123456789",
  userId: "demo-user-id",
  items: [
    {
      _id: "item-1",
      name: "VitaLife Omega-3 Softgels - Heart Support",
      price: 79.99,
      quantity: 1,
      image:
        "https://ik.imagekit.io/bf62vomqy/sellzy/products/vitalife-omega-3-softgels-heart-support-max-strength/product_vitalife_omega-3_softgels_heart_support_max_strength_1_vY_PF802u.jpg",
    },
    {
      _id: "item-2",
      name: "VitaLife Omega-3 Softgels - Max Strength",
      price: 299.99,
      quantity: 1,
      image:
        "https://ik.imagekit.io/bf62vomqy/sellzy/products/vitalife-omega-3-softgels-heart-support-max-strength/product_vitalife_omega-3_softgels_heart_support_max_strength_2_2rl0mU2Wc.jpg",
    },
    {
      _id: "item-3",
      name: "Premium Health Supplement",
      price: 19.99,
      quantity: 2,
      image:
        "https://res.cloudinary.com/dxkhdqifr/image/upload/v1772391982/sellzy/products/bc8m4wupakthqdaht9ol.jpg",
    },
  ],
  subtotal: 419.96,
  tax: 33.6,
  shipping: 15.0,
  total: 468.56,
  status: "delivering",
  paymentStatus: "paid",
  paymentMethod: "stripe",
  shippingAddress: {
    firstName: "John",
    lastName: "Doe",
    address: "123 Main Street",
    city: "San Francisco",
    state: "California",
    zipCode: "94102",
    country: "United States",
    phoneNumber: "+1 (555) 123-4567",
  },
  createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
  updatedAt: new Date().toISOString(),
  status_updates: {
    pending: {
      at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      by: "system",
    },
    address_confirmed: {
      at: new Date(
        Date.now() - 3 * 24 * 60 * 60 * 1000 + 15 * 60 * 1000,
      ).toISOString(),
      by: "system",
    },
    order_confirmed: {
      at: new Date(
        Date.now() - 3 * 24 * 60 * 60 * 1000 + 30 * 60 * 1000,
      ).toISOString(),
      by: "vendor",
    },
    confirmed: {
      at: new Date(
        Date.now() - 3 * 24 * 60 * 60 * 1000 + 30 * 60 * 1000,
      ).toISOString(),
      by: "vendor",
    },
    packed: {
      at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      by: "vendor",
    },
    delivering: {
      at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      by: "courier",
    },
  },
};

export type OrderData = typeof dummyOrderData;
