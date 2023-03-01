const mongoose = require("mongoose");

const dogNftSchema = new mongoose.Schema(
  {
    dog: {
      type: mongoose.Schema.ObjectId,
      ref: "Dog",
      required: false,
    },
    owner: {
      type: mongoose.Schema.ObjectId,
      ref: "Owner",
      required: false,
    },
    veterinary: {
      type: mongoose.Schema.ObjectId,
      ref: "Veterinary",
      required: false,
    },
    insurance: {
      type: mongoose.Schema.ObjectId,
      ref: "Insurance",
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

module.exports = mongoose.model("DogNFT", dogNftSchema);
