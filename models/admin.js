const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const adminSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter Your first Name"],
      maxLength: [15, "First name cannot exceed 15 characters"],
      minLength: [3, "Last name should have more than 3 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter Your last Name."],
      maxLength: [15, "Last name cannot exceed 15 characters"],
      minLength: [3, "Last name should have more than 3 characters"],
    },
    email: {
      type: String,
      required: [true, "Please enter an Email"],
      unique: true,
      validate: [validator.isEmail, "Please enter valid email address"],
    },
    password: {
      type: String,
      required: [true, "Please enter a Password"],
      minLength: [8, "Password should be greater than 8 characters"],
      maxLength: [14, "Password should not be greater than 14 characters"],
    },
    role: {
      type: String,
      default: "Admin",
      required: [true, "Please add a role"],
      enum: ["Admin", "Super Admin"],
    },
    adminImage: {
      type: String,
      required: [true, "Please add Profile Image."],
    },
    cloudinaryId: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
// adminSchema.pre("save", async function (next) {
//   const salt = await bycrypt.genSalt(10);
//   this.password = await bycrypt.hash(this.password, salt);
//   next();
// });

//Encrypting password before saving admin:
adminSchema.methods.hashPassword = async function (password) {
  const salt = await bycrypt.genSalt(10);
  const hashedPassword = await bycrypt.hash(this.password, salt);
  return hashedPassword;
};

//Returning JWT Token:
adminSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, name: this.firstName + this.lastName },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "3d" }
  );
  return token;
};

//Checking the password:
adminSchema.methods.checkPassword = async function (enteredPassword) {
  const isMatch = await bycrypt.compare(enteredPassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("Admin", adminSchema);
