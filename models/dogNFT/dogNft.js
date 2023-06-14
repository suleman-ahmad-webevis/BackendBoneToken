const mongoose = require("mongoose");

const dogNftSchema = new mongoose.Schema(
  {
    dog: {
      type: mongoose.Schema.ObjectId,
      ref: "DogReg",
      required: false,
    },
    owner: {
      type: mongoose.Schema.ObjectId,
      ref: "DogOwner",
      required: false,
    },
    veterinary: {
      type: mongoose.Schema.ObjectId,
      ref: "DogVeterinary",
      required: false,
    },
    insurance: {
      type: mongoose.Schema.ObjectId,
      ref: "DogInsurance",
      required: false,
    },
    dogShow: {
      type: mongoose.Schema.ObjectId,
      ref: "DogShow",
      required: false,
    },
    // nftCreator: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DogNft", dogNftSchema);
