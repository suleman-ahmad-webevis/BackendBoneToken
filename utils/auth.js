const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

const requireAuth = (req, res, next) => {
  const token = req.cookie.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_KEY, (err, decodedToken) => {
      if (err) {
        res.status(400).json("Your cookie has expired, kindly login again.");
      } else {
        next();
      }
    });
  } else {
    setTimeout(() => {
      res.redirect("/login");
    }, 1000);
  }
};

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_KEY, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = { requireAuth, checkUser };
