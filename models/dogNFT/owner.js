const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(
  {
    ownerName: {
      type: String,
      required: false,
    },
    ownerPhoto: {
      type: String,
      required: false,
    },
    ownerVideo: {
      type: String,
      required: false,
    },
    areYouBreeder: {
      type: String,
      required: false,
    },
    breederName: {
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

module.exports = mongoose.model("Owner", ownerSchema);
