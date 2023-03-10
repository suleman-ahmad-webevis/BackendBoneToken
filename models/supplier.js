const mongoose = require("mongoose");

const supplierSchema = mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, "Please enter first name"],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Please enter last name"],
  },
  contactName: {
    type: String,
    trim: true,
    required: [true, "Please enter contact name"],
  },
  email: {
    type: String,
    unique: [true, "Email is required"],
  },
  phoneNo: {
    type: Number,
  },
  supplierPic: {
    secureUrl: {
      type: String,
    },
    publicId: {
      type: String,
    },
  },
  streetOne: {
    type: String,
  },
  streetTwo: {
    type: String,
  },
  city: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  companyName: {
    type: String,
  },
  vatNo: {
    type: Number,
  },
  companyAddress: {
    type: String,
  },
  IBAN: {
    type: String,
  },
  companyNo: {
    type: Number,
  },
  swift: {
    type: String,
  },
});

module.exports = mongoose.model("Supplier", supplierSchema);
