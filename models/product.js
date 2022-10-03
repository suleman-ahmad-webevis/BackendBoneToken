const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name of product."],
    trim: true,
    maxLength: [30, "Name cannot exceed 30 characters"],
  },
  description: {
    type: String,
    required: [true, "Please enter description of product."],
    maxLength: [400, "Description cannot exceed 400 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  productImage: {
    type: String,
  },
  cloudinaryId: {
    type: String,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  category: {
    type: String,
    required: [true, "Add correct product category"],
  },
  //SmartSearch
  gender: {
    type: String,
    required: true,
    // enum: ["Male", "Female"],
  },
  condition: {
    type: String,
    required: true,
    // enum: ["Used", "New"],
  },
  height: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
    // enum: ["Blue", "Red", "Black"],
  },
  season: {
    type: String,
    required: true,
    // enum: ["Summer", "Winter", "Spring", "Autumn"],
  },
  amount: {
    type: Number,
    // required:true,
  },
  tag: {
    type: String,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
