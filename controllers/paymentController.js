const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../utils/catchAsync");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const processPayment = catchAsync(async (req, res) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "usd",
    metadata: {
      company: "BoneToken",
    },
  });
  res.status(StatusCodes.CREATED).json({
    message: "Payment Created",
    client_secret: myPayment.client_secret,
  });
});

const sendStripeApiKey = catchAsync(async (req, res) => {
  res.status(StatusCodes.OK).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});

module.exports = {
  processPayment,
  sendStripeApiKey,
};
