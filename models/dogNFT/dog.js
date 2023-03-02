const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema(
  {
    dogName: {
      type: String,
      trim: true,
    },
    breed: {
      type: String,
    },
    dogPic: {
      type: String,
      // required: true,
    },
    dogVideo: {
      type: String,
      // required: true,
    },
    dob: {
      type: String,
      // required: true,
    },
    gender: {
      type: String,
      // required: true,
    },
    countryOfBirth: {
      type: String,
      // required: true,
    },
    location: {
      type: String,
      // required: true,
    },
    dogMotherName: {
      type: String,
    },
    dogMotherPic: {
      type: String,
    },
    dogMotherNFTNo: {
      type: String,
    },
    dogFatherName: {
      type: String,
    },
    dogFatherNFTNo: {
      type: String,
    },
    dogFatherPic: {
      type: String,
    },
    weight: {
      type: String,
    },
    height: {
      type: String,
    },
    length: {
      type: String,
    },
    coatType: {
      type: String,
    },
    price: {
      type: String,
    },
    currency: {
      type: String,
    },
  },
  { timestamps: true }
);

const DogReg = mongoose.model("DogReg", dogSchema);

module.exports = DogReg;
