const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const adminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter Your first Name"],
    maxLength: [10, "First name cannot exceed 10 characters"],
    minLength: [4, "Last name should have more than 4 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter Your last Name."],
    maxLength: [10, "Last name cannot exceed 10 characters"],
    minLength: [4, "Last name should have more than 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter an Email"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a Password"],
    minLength: [8, "Password should be greater than 8 characters"],
    maxLength: [14, "Password should not be greater than 14 characters"],
  },
  role: {
    type: String,
    required: [true, "Please add a role"],
    enum: ["Admin", "Super Admin"],
  },
  adminImage: {
    type: String,
    required: [true, "Please add Profile Image."],
  },
  cloudinaryId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
adminSchema.pre("save", async function (next) {
  const salt = await bycrypt.genSalt(10);
  this.password = await bycrypt.hash(this.password, salt);
  next();
});
adminSchema.methods.checkPassword = async function (password) {
  const isMatch = await bycrypt.compare(password, this.password);
  return isMatch;
};
adminSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, name: this.firstName + this.lastName },
    process.env.JWT_KEY,
    { expiresIn: "30d" }
  );
  return token;
};

module.exports = mongoose.model("Admin", adminSchema);
