const mongoose = require("mongoose");

const dogOwnerSchema = new mongoose.Schema(
  {
    ownerName: {
      type: String,
      required: true,
    },
    ownerPic: {
      type: String,
      required: false,
    },
    ownerPicCloudinaryId: {
      type: String,
      required: false,
    },
    ownerVideoLink: {
      type: String,
      required: false,
    },
    areYouBreeder: {
      type: String,
      required: false,
    },
    breederKennelName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    fbPage: {
      type: String,
      required: false,
    },
    instaPage: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DogOwner", dogOwnerSchema);
