const mongoose = require("mongoose");

const ProductAdminSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String,
    
  },
  price: {
    type: Number
  },
  productImage: {
    type: String,
  },
  cloudinaryId: {
    type: String,
  },
  rating: {
    type: Number,
    maxLength: 5
  },
  category: {
    type: String
  },
  //SmartSearch
  gender: {
    type: String
    // enum: ["Male", "Female"],
  },
  condition: {
    type: String
    // enum: ["Used", "New"],
  },
  height: {
    type: String
  },
  weight: {
    type: String
  },
  color: {
    type: String
    // enum: ["Blue", "Red", "Black"],
  },
  season: {
    type: String
    // enum: ["Summer", "Winter", "Spring", "Autumn"],
  },
  amount: {
    type: Number,
    // required:true,
  },
});

const ProductAdmin = mongoose.model("ProductAdmin", ProductAdminSchema);

module.exports = ProductAdmin;
