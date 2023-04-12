const jwt = require("jsonwebtoken");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
require("dotenv").config();

const requireAuth = catchAsyncErrors(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.substring(7, authHeader.length);

  if (token) {
    const isVerified = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (isVerified) {
      req.userId = isVerified._id;
      req.name = isVerified.name;
      req.email = isVerified.email;
      req.userPic = isVerified.userPic;
      next();
    } else {
      return res.json({
        success: 404,
        message: "Your token has expired, please log in again!",
      });
    }
  } else {
    return res.json({
      success: 404,
      message: "You don't have access to this page, please log in!",
    });
  }
});

module.exports = { requireAuth };
