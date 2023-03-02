const mongoose = require("mongoose");

const dogShowSchema = new mongoose.Schema(
  {
    showName: {
      type: String,
      required: false,
    },
    officialShowName: {
      type: String,
      required: false,
    },
    descriptionOfEvent: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    class: {
      type: String,
      required: false,
    },
    judge: {
      type: String,
      required: false,
    },
    result: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("dogShow", dogShowSchema);
