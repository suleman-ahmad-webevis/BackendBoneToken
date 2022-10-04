const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  // itemsPrice: {
  //   type: Number,
  //   default: 0,
  // },
  // taxPrice: {
  //   type: Number,
  //   default: 0,
  // },
  // shippingPrice: {
  //   type: Number,
  //   default: 0,
  // },

  shippingInfo: {
    address: {
      type: String,
      required: true,
      maxLength: [30, "Address cannot exceed 30 characters"],
    },
    city: {
      type: String,
      required: true,
      maxLength: [20, "City name cannot exceed 30 characters"],
    },
    state: {
      type: String,
      required: true,
      maxLength: [20, "State name cannot exceed 30 characters"],
    },
    country: {
      type: String,
      required: true,
      maxLength: [20, "Country name cannot exceed 30 characters"],
    },
    pinCode: {
      type: Number,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
      maxLength: [15, "Phone no. cannot exceed 15 characters"],
    },
  },
  orderItems: [
    {
      name: {
        type: String,
        required: [true, "Name is required to order"],
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      productId: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  paymentInfo: {
    id: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  paidAt: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
