const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //Wrong MongoDB Id error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(400, message);
  }

  //Mongoose duplicate key error
  if (err.code === 11000) {
    console.log("The err", err);
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    console.log("The message ", message);
    err = new ErrorHandler(400, message);
  }

  // Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid, Try again`;
    err = new ErrorHandler(400, message);
  }

  // JWT expire error
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is Expired, Try again `;
    err = new ErrorHandler(400, message);
  }

  //Sending error message as response
  res.status(err.statusCode).json({
    message: err.message,
  });
};
