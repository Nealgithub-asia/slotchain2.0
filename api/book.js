// /api/book.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Normally you'd validate and save to DB here
  const { user, slot, paymentMethod } = req.body;

  // TODO: replace this with real logic
  // For now, return success and a fake booking ID
  return res.status(200).json({
    message: "Booking successful!",
    bookingId: Math.random().toString(36).substring(2)
  });
}
