const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");
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
    },
    countryOfBirth: {
      type: String,
    },
    streetAddress: {
      type: String,
      required: [true, "Please enter street address"],
      maxLength: [40, "Street cannot exceed 40 characters"],
    },
    streetAddressLineTwo: {
      type: String,
      required: [true, "Please enter street number"],
      maxLength: [40, "Street number cannot exceed 40 characters"],
    },
    city: {
      type: String,
    },
    region: {
      type: String,
    },
    country: {
      type: String,
    },
    postalZipCode: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  const salt = await bycrypt.genSalt(10);
  this.password = await bycrypt.hash(this.password, salt);
  next();
});

userSchema.methods.checkPassword = async function (password) {
  const isMatch = await bycrypt.compare(password, this.password);
  return isMatch;
};
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, name: this.firstName + this.lastName },
    process.env.JWT_KEY,
    { expiresIn: "3d" }
  );
  return token;
};

module.exports = mongoose.model("User", userSchema);
