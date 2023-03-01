const mongoose = require("mongoose");

const insuranceSchema = new mongoose.Schema(
  {
    insuranceCertificateNo: {
      type: String,
      required: false,
    },
    emergencyContactNo: {
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

module.exports = mongoose.model("Insurance", insuranceSchema);
