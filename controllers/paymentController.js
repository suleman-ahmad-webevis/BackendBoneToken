const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const Order = require("../models/order");

//MakeIntent
const makeIntent = catchAsyncErrors(async (req, res, next) => {
  const { userId, cartItems, cartAmountIs, shippingInfo } = req.body;
  const lineItems = req.body.cartItems.map((item) => {
    const unitPriceCents = Math.round(item.minRetailPrice * 100);
    return {
      price_data: {
        currency: "eur",
        product_data: {
          name: item?.name,
          images: [item.productImages[0]?.secureUrl],
          description: item.description ? item?.description : "No description",
          metadata: {
            id: item?._id,
          },
        },
        unit_amount: unitPriceCents,
      },
      quantity: item?.quantity,
      // shipping_address: {
      //   line1: shippingInfo?.address,
      //   line2: "None",
      //   city: "None",
      //   state: "None",
      //   postal_code: "None",
      //   country: "None",
      // },
      // billing_address: {
      //   line1: shippingInfo?.address,
      //   line2: "None",
      //   city: "None",
      //   state: "None",
      //   postal_code: "None",
      //   country: "None",
      // },
    };
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    // success_url: `${process.env.STRIPE_DEPLOYED_URL}/order-history`,
    // cancel_url: `${process.env.STRIPE_DEPLOYED_URL}/checkout`,
    success_url: `https://kennel.ai/order-history`,
    cancel_url: `https://kennel.ai/.com/checkout`,
  });

  const newOrder = async () => {
    await Order.create({
      orderItems: cartItems,
      totalAmount: cartAmountIs,
      user: userId,
      orderMadeAt: Date.now(),
      shippingInfo,
    });
  };
  newOrder();
  res.send({ url: session.url });
});

module.exports = { makeIntent };
