// const AppError = require("./appError");

// const handleCastErrorDB = (err) => {
//   const message = `Invalid ${err.path}: ${err.value}.`;
//   return new AppError(message, 400);
// };

// const handleDuplicateFieldsDB = (err) => {
//   console.log(err);
//   const value = err.message.match(/(["'])(\\?.)*?\1/)[0];

//   const message = `Duplicate field value: ${value}. Please use another value!`;
//   return new AppError(message, 400);
// };

// const handleValidationErrorDB = (err) => {
//   const errors = Object.values(err.errors).map((el) => el.message);
//   const message = `Invalid input data. ${errors.join(". ")}`;
//   return new AppError(message, 400);
// };

// const handleJWTError = (err) =>
//   new AppError("Invalid token ! please login again", 401);

// const handleJWTExpiredError = () =>
//   new AppError("Your token has expired! Please log in again.", 401);

// const sendErrorDev = (err, req, res) => {
//   // A) API
//   if (req.originalUrl.startsWith("/api")) {
//     return res.status(err.statusCode).json({
//       status: err.status,
//       error: err,
//       message: err.message,
//       stack: err.stack,
//     });
//   }

//   // B) RENDERED WEBSITE
//   console.error("ERROR 💥", err);
//   return res.status(err.statusCode).render("error", {
//     title: "Something went wrong!",
//     msg: err.message,
//   });
// };

// const sendErrorProd = (err, req, res) => {
//   // A) API
//   if (req.originalUrl.startsWith("/api")) {
//     // A) Operational, trusted error: send message to client
//     if (err.isOperational) {
//       return res.status(err.statusCode).json({
//         status: err.status,
//         message: err.message,
//       });
//     }
//     // B) Programming or other unknown error: don't leak error details
//     // 1) Log error
//     console.error("ERROR 💥", err);
//     // 2) Send generic message
//     return res.status(500).json({
//       status: "error",
//       message: "Something went very wrong!",
//     });
//   }

//   // B) RENDERED WEBSITE
//   // A) Operational, trusted error: send message to client
//   if (err.isOperational) {
//     return res.status(err.statusCode).render("error", {
//       title: "Something went wrong!",
//       msg: err.message,
//     });
//   }
//   // B) Programming or other unknown error: don't leak error details
//   // 1) Log error
//   console.error("ERROR 💥", err);
//   // 2) Send generic message
//   return res.status(err.statusCode).render("error", {
//     title: "Something went wrong!",
//     msg: "Please try again later.",
//   });
// };

// module.exports = (err, req, res, next) => {
//   err.statusCode = err.statusCode || 500;
//   err.status = err.status || "error";

//   //   if (process.env.NODE_ENV === 'development') {
//   // sendErrorDev(err, req, res);
//   //   } else if (process.env.NODE_ENV === 'production') {
//   //     let error = { ...err };
//   //     error.message = err.message;

//   if (err.name === "CastError") err = handleCastErrorDB(err);
//   if (err.code === 11000) err = handleDuplicateFieldsDB(err);
//   if (err.name === "ValidationError") err = handleValidationErrorDB(err);
//   if (err.name === "JsonWebTokenError") err = handleJWTError(err);
//   if (err.name === "TokenExpiredError") err = handleJWTExpiredError(err);

//   sendErrorProd(err, req, res);
//   //
// };
