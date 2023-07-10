const mongoose = require("mongoose");

const dogInsuranceSchema = new mongoose.Schema(
  {
    insurances: [
      {
        contactName: {
          type: String,
          required: false,
        },
        certificateNo: {
          type: String,
          required: false,
        },
        phoneOne: {
          type: Number,
          required: false,
        },
        phoneTwo: {
          type: Number,
          required: false,
        },
        startDate: {
          type: String,
          required: false,
        },
        endDate: {
          type: String,
          required: false,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("DogInsurance", dogInsuranceSchema);
