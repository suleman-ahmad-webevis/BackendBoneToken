const mongoose = require("mongoose");
const User = require("./user");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the name of product."],
  },
  description: {
    type: String,
    required: [true, "Please enter description of product."],
  },
  price: {
    type: Number,
    required: [true, "Please enter a price for the product."],
  },
  productImage: {
    type: String,
  },
  cloudinaryId: {
    type: String,
  },
  category: {
    type: String,
    required: [true, "Show correct product category"],
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
  rating: {
    type: Number,
    required: true,
    maxLength: 5,
  },
  numberOfReviews: {
    type: Number,
    required: true,
  },
  tag: {
    type: String,
  },
  reviews: [
    {
      userId: {
        type: mongoose.Schema.ObjectId,
        ref: User,
        required: true,
      },
      userName: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
        maxLength: 5,
      },
    },
  ],
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
