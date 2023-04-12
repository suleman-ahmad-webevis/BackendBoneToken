const { Router } = require("express");
const router = Router();
const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51LnHAjFMsaagdwc4TYOSed343sHktvF0Tgd0eoo5qkkL2kC8LWPzjluHD3pALDE2aIFA3NVA7xjqlNXJFwhxN6bN00pwTYPpjF"
);

router.post("/createCheckoutSession", async (req, res) => {
  const lineItems = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: [item.productImages[0].secureUrl],
          description: item.description,
          metadata: {
            id: item._id,
          },
        },
        unit_amount: item.minRetailPrice * 100,
      },
      quantity: item.quantity,
    };
  });
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "https://bonetoken.com/checkoutSuccess",
    cancel_url: "https://bonetoken.com/checkout",
  });
  res.send({ url: session.url });
});

module.exports = router;
