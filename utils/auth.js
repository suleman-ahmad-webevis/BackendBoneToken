const jwt = require("jsonwebtoken");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
require("dotenv").config();

const requireAuth = catchAsyncErrors(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.substring(7, authHeader.length);

  if (token) {
    const isVerified = jwt.verify(token, process.env.JWT_KEY);
    if (isVerified) {
      req.userId = isVerified._id;
      req.name = isVerified.name;
      req.email = isVerified.email;
      req.userPic = isVerified.userPic;
      next();
    } else {
      return res.json({
        success: 404,
        message: "Token is not valid, Please enter a valid token",
      });
    }
  } else {
    return res.json({
      success: 404,
      message: "Token is not provided, Please provide token",
    });
  }
});

module.exports = { requireAuth };
