const mongoose = require("mongoose");

const dogSchema = new mongoose.Schema(
  {
    dogName: {
      type: String,
      trim: true,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    dogPic: {
      type: String,
      required: false,
    },
    dogPicCloudinaryId: {
      type: String,
      required: false,
    },
    dogVideo: {
      type: String,
      required: false,
    },
     dogVideoCloudinaryId: {
      type: String,
      required: false,
    },
    dob: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    countryOfBirth: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    weight: {
      type: String,
      required: false,
    },
    height: {
      type: String,
      required: false,
    },
    length: {
      type: String,
      required: false,
    },
    dogMotherName: {
      type: String,
      required: false,
    },
    dogMotherNFTNo: {
      type: String,
      required: false,
    },
    dogMotherPic: {
      type: String,
      required: false,
    },
    dogMotherPicCloudinaryId: {
      type: String,
      required: false,
    },
    dogFatherName: {
      type: String,
      required: false,
    },
    dogFatherNFTNo: {
      type: String,
      required: false,
    },
    dogFatherPic: {
      type: String,
      required: false,
    },
    dogFatherPicCloudinaryId: {
      type: String,
      required: false,
    },
    coatType: {
      type: String,
      required: false,
    },
    price: {
      type: String,
      required: false,
    },
    currency: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const DogReg = mongoose.model("DogReg", dogSchema);

module.exports = DogReg;
