const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Stripe = require("stripe");
const stripe = Stripe(
  "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"
);

//MakeIntent
const makeIntent = catchAsyncErrors(async (req, res, next) => {
  const lineItems = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: "eur",
        product_data: {
          name: item.name,
          images: [item.productImages[0].secureUrl],
          description: item.description ? item.description : "No description",
          metadata: {
            id: item._id,
          },
        },
        unit_amount: item.minRetailPrice,
      },
      quantity: item.quantity,
    };
  });
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: `${process.env.STRIPE_LOCAL_URL}/checkoutSuccess`,
    cancel_url: `${process.env.STRIPE_LOCAL_URL}/checkout`,
  });
  res.send({ url: session.url });
});

module.exports = { makeIntent };
