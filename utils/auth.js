const jwt = require("jsonwebtoken");
const catchAsync = require("../utils/catchAsync");
require("dotenv").config();

const requireAuth = catchAsync(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.substring(7, authHeader.length);

  if (token) {
    const isVerified = jwt.verify(token, process.env.JWT_KEY);
    if (isVerified) {
      req.userId = isVerified._id;
      req.name = isVerified.name;
      req.email = isVerified.email;
      req.userPic = isVerified.userPic;
      const newToken = User.generateAuthToken();
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
