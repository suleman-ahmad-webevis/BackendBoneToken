const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const User = require("../models/user");
const catchAsync = require("../utils/catchAsync");
require("dotenv").config();

const requireAuth = catchAsync(async (req, res, next) => {
  const token = req.headers.jwt;

  if (token) {
    const isVerified = jwt.verify(token, process.env.JWT_KEY);
    console.log(isVerified)
    if (isVerified) {
      req.userId = isVerified._id;
      req.name = isVerified.name;
      req.email = isVerified.email;
      req.userPic = isVerified.userPic;
      next();
    } else {
      return res.json({
        success: 404,
        message: "Your token has expired, please log in again.",
      });
    }
  } else {
    return res.json({
      success: 404,
      message: "Please log in to access this page.",
    });
  }
});

module.exports = { requireAuth };
