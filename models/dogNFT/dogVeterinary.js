const mongoose = require("mongoose");

const dogVeterinarySchema = new mongoose.Schema(
  {
    vaccines: [
      {
        vacType: {
          type: String,
          required: false,
        },
        vacSerialNo: {
          type: String,
          required: false,
        },
        vacExpiryDate: {
          type: Date,
          required: false,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("DogVeterinary", dogVeterinarySchema);
