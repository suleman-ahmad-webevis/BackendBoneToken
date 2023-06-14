const mongoose = require("mongoose");

const dogVeterinarySchema = new mongoose.Schema(
  {
    vaccinationTypes: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DogVeterinary", dogVeterinarySchema);
