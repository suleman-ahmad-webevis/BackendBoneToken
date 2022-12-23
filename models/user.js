const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please Enter First Name"],
      maxLength: [10, "First Name cannot exceed 10 characters"],
      minLength: [4, "First Name should have more than 4 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Please Enter Last Name"],
      maxLength: [10, "Last Name cannot exceed 10 characters"],
      minLength: [4, "Last Name should have more than 4 characters"],
    },
    email: {
      type: String,
      required: [true, "Please Enter Email"],
      unique: [true, "Email already exist"],
      validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    phone: {
      type: String,
      required: [true, "Please Enter Phone Number"],
      unique: [true, "PhoneNo already Registered"],
      maxLength: [15, "Name cannot exceed 15 characters"],
    },
    password: {
      type: String,
      required: [true, "Please Enter Password"],
      minLength: [8, "Password cannot be less than 8 characters"],
      maxLength: [14, "Password cannot exceed 14 characters"],
    },
    street: {
      type: String,
      required: [true, "Please Enter Street"],
      maxLength: [40, "Street cannot exceed 40 characters"],
    },
    streetNumber: {
      type: String,
      required: [true, "Please Enter Street Number"],
      maxLength: [40, "Street Number cannot exceed 40 characters"],
    },
    addition: {
      type: String,
      required: [true, "Please Enter Additional Street Number"],
      maxLength: [30, "Additional cannot exceed 30 characters"],
    },
    city: {
      type: String,
      required: [true, "Please Enter City"],
      maxLength: [40, "City name cannot exceed 40 characters"],
    },
    state: {
      type: String,
      required: [true, "Please Enter State"],
      maxLength: [20, "Name cannot exceed 20 characters"],
    },
    country: {
      type: String,
      required: [true, "Please Enter Country"],
      maxLength: [20, "Name cannot exceed 20 characters"],
    },
    postCode: {
      type: String,
      required: [true, "Please Enter PostCode"],
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
    { expiresIn: "30d" }
  );
  return token;
};
module.exports = mongoose.model("User", userSchema);
