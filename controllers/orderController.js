const Order = require("../models/order");
const { StatusCodes } = require("http-status-codes");
//ErrorHandlers
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//CreateOrder
const newOrder = catchAsyncErrors(async (req, res, next) => {
  const { totalPrice, shippingInfo, orderItems, paymentInfo } = req.body;
  const order = await Order.create({
    totalPrice,
    shippingInfo,
    orderItems,
    paymentInfo,
    paidAt: Date.now(),
    // user: "6333fe6e80088e0d01ea97f1",
  });
  if (order) {
    res.status(StatusCodes.CREATED).json({
      message: "Order Placed",
      data: order,
    });
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "Order not placed" });
  }
});

//GetSingleOrder
const getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req?.params?.id).populate(
    "user",
    "name email"
  );
  if (!order) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "Order not found" });
  }
  res.status(StatusCodes.OK).json({
    data: order,
  });
});

//LoggedInUserOrder
const myOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find({ user: req?.userId });
  if (orders) {
    res.status(StatusCodes.OK).json({
      data: orders,
    });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ message: "Order not found" });
  }
});

//DeleteOrder
const deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.find({ "orderItems._id": req?.params?.id });
  if (!order) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "Product not found" });
  } else {
    await order.remove();
    res.status(StatusCodes.OK).json({
      success: true,
    });
  }
});

const getAllOrders = catchAsyncErrors(async (req, res, next) => {
  const allOrders = await Order.find({}).populate("user", "name email");
  if (allOrders) {
    res.status(StatusCodes.OK).json({
      success: true,
      data: allOrders,
    });
  } else {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "Orders not found" });
  }
});

module.exports = {
  newOrder,
  getSingleOrder,
  myOrders,
  deleteOrder,
  getAllOrders,
};
