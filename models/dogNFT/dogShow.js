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
    descriptionOfEvent: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("dogShow", dogShowSchema);
