const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderItems: [],
    totalAmount: {
      type: Number,
      required: true,
      default: 0,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    orderMadeAt: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "canceled"],
      default: "pending",
    },
    shippingInfo: {},
    // paymentType: {
    //   id: {
    //     type: String,
    //     required: true,
    //   },
    //   status: {
    //     type: String,
    //     required: true,
    //   },
    // },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
