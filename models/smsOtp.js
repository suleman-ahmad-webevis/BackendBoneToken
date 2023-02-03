const mongoose = require("mongoose");

const smsOtpSchema = new mongoose.Schema(
  {
    opt: Number,
  },
  { timestamps: true }
);

const smsOtp = mongoose.model("smsOtp", smsOtpSchema);

module.exports = smsOtp;
