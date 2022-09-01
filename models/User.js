const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please Enter First Name"],
    },
    lastName: {
      type: String,
      required: [true, "Please Enter Last Name"],
    },
    email: {
      type: String,
      required: [true, "Please Enter Email"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Please Enter Phone Number"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please Enter Password"],
    },
    confirmPassword: {
      type: String,
      required: [true, "Please Enter Confirm Password"],
    },
    street: {
      type: String,
      required: [true, "Please Enter Street"],
    },
    streetNumber: {
      type: String,
      required: [true, "Please Enter Street Number"],
    },
    addition: {
      type: String,
      required: [true, "Please Enter Additional Street Number"],
    },
    city: {
      type: String,
      required: [true, "Please Enter City"],
    },
    state: {
      type: String,
      required: [true, "Please Enter State"],
    },
    postCode: {
      type: String,
      required: [true, "Please Enter PostCode"],
    },
    country: {
      type: String,
      required: [true, "Please Enter Country"],
    },
  },
  {
    timestamps: true,
  }
);
UserSchema.pre("save", async function (next) {
  const salt = await bycrypt.genSalt(10);
  this.password = await bycrypt.hash(this.password, salt);
  next();
});
UserSchema.methods.checkPassword = async function (password) {
  const isMatch = await bycrypt.compare(password, this.password);
  return isMatch;
};
UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, name: this.firstName + this.lastName },
    process.env.JWT_KEY,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
  return token;
};
module.exports = mongoose.model("User", UserSchema);
