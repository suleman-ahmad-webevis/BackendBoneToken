const jwt = require("jsonwebtoken");
const User = require("../models/user");
const catchAsync = require("../utils/catchAsync");
require("dotenv").config();

const requireAuth = catchAsync(async (req, res, next) => {
  const token = req.headers.jwt;

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

// const checkUser = (req, res, next) => {
//   const token = req.cookies.jwt;
//   if (token) {
//     jwt.verify(token, process.env.JWT_KEY, async (err, decodedToken) => {
//       if (err) {
//         res.locals.user = null;
//         next();
//       } else {
//         let user = await User.findById(decodedToken.id);
//         next();
//       }
//     });
//   } else {
//     res.locals.user = null;
//     next();
//   }
// };

module.exports = { requireAuth };
