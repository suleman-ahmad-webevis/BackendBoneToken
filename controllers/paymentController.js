const { StatusCodes } = require("http-status-codes");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
//ErrorHandlers
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const processPayment = catchAsyncErrors(async (req, res, next) => {
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

const sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(StatusCodes.OK).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});

module.exports = {
  processPayment,
  sendStripeApiKey,
};
