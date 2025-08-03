// /api/nft.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { user, bookingId } = req.body;

  // TODO: interact with Hedera Token Service or other NFT SDK/contract
  // Simulate NFT mint success
  return res.status(200).json({
    message: "NFT reward sent!",
    nftId: Math.random().toString(36).substring(2)
  });
}
