const mongoose = require("mongoose");

const veterinarySchema = new mongoose.Schema(
  {
    vaccinationTypes: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Veterinary", veterinarySchema);
