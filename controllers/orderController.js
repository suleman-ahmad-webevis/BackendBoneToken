const Order = require("../models/order");
const Product = require("../models/product");
const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../utils/catchAsync");

//CreateOrder
const newOrder = catchAsync(async (req, res) => {
  const { totalPrice, shippingInfo, orderItems, paymentInfo } = req.body;
  const order = await Order.create({
    totalPrice,
    shippingInfo,
    orderItems,
    paymentInfo,
    paidAt: Date.now(),
    user: "6333fe6e80088e0d01ea97f1",
  });
  if (order) {
    res.status(StatusCodes.CREATED).json({
      status: "success",
      data: order,
    });
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ error: "Order not added" });
  }
});

//GetSingleOrder
const getSingleOrder = catchAsync(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (!order) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: "Order not found" });
  }
  res.status(StatusCodes.OK).json({
    status: "success",
    data: order,
  });
});

//LoggedInUserOrder
const myOrders = catchAsync(async (req, res) => {
  const orders = await Order.find({ user: req.userId });
  if (orders) {
    res.status(StatusCodes.OK).json({
      status: "success",
      data: orders,
    });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Product not found" });
  }
});

//DeleteOrder
const deleteOrder = catchAsync(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return res.status(StatusCodes.NOT_FOUND).json({ error: "Product not found" });
  } else {
    await order.remove();
    res.status(StatusCodes.OK).json({
      success: true,
    });
  }
});

module.exports = {
  newOrder,
  getSingleOrder,
  myOrders,
  deleteOrder,
};
