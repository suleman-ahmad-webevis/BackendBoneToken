const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter last name"],
    },
    email: {
      type: String,
      required: [true, "Please enter email"],
      unique: [true, "Email already exist"],
      validate: [validator.isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    },
    confirmPassword: {
      type: String,
      required: [true, "Please enter confirm password"],
    },
    dateOfBirth: {
      type: String,
    },
    gender: {
      type: String,
      required: [true, "Please select the gender"],
    },
    countryOfBirth: {
      type: String,
      required: [true, "Please select the country of birth"],
    },
    streetAddress: {
      type: String,
      required: [true, "Please enter street address"],
      maxLength: [40, "Street cannot exceed 40 characters"],
    },
    streetAddressLineTwo: {
      type: String,
      required: [true, "Please enter street address line two"],
      maxLength: [40, "Street number cannot exceed 40 characters"],
    },
    city: {
      type: String,
      required: [true, "Please add the city"],
    },
    region: {
      type: String,
      required: [true, "Please enter the region"],
    },
    country: {
      type: String,
      required: [true, "Please select the country"],
    },
    postalZipCode: {
      type: String,
      required: [true, "Please add the postal zip code"],
    },
    phone: {
      type: Number,
      required: [true, "Please add the phone of birth"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  this.confirmPassword = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.checkPassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password);
  return isMatch;
};

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, name: this.firstName + this.lastName },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "3d" }
  );
  return token;
};

module.exports = mongoose.model("User", userSchema);
