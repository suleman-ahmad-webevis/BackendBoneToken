const { Router } = require("express");
const router = Router();
const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51LnHAjFMsaagdwc4TYOSed343sHktvF0Tgd0eoo5qkkL2kC8LWPzjluHD3pALDE2aIFA3NVA7xjqlNXJFwhxN6bN00pwTYPpjF"
);

router.post("/createCheckoutSession", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/checkoutSuccess",
    cancel_url: "http://localhost:3000/checkout",
  });
  res.send({ url: session.url });
});

module.exports = router;
