const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");
const User = require("../models/user");
const catchAsync = require("../utils/catchAsync");
require("dotenv").config();

const requireAuth = catchAsync(async (req, res, next) => {
    const token = req.headers.jwt;
    if (token) {
        jwt.verify(token, process.env.JWT_KEY, (err, decodedToken) => {
            if (err) {
                res.status(400).json("Your token has expired, kindly login again!");
            } else {
                next();
            }
        });
    } else {
        res.status(StatusCodes.BAD_REQUEST).json('You are not logged in. Kindly login again!')
    }
})

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
