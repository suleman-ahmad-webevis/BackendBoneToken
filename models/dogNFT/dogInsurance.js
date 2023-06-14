const mongoose = require("mongoose");

const dogInsuranceSchema = new mongoose.Schema(
  {
    insuranceCertificateNo: {
      type: String,
      required: false,
    },
    insuranceContactNo: {
      type: String,
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
  { timestamps: true }
);

module.exports = mongoose.model("DogInsurance", dogInsuranceSchema);
