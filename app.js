const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const globalErrorHandler = require("./utils/errorHandler");
const { checkUser } = require("./utils/auth");
const connectDB = require("./config/database");

//Routes
const userRoutes = require("./routes/userRoutes");
const dogRoutes = require("./routes/dogRoutes");
const productRoutes = require("./routes/productRoutes");

//Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

connectDB();

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running at port", process.env.PORT);
});

// app.get("*", checkUser);
app.use(globalErrorHandler);
app.use(userRoutes, dogRoutes, productRoutes);

app.use("/", (req, res) => {
  res.send("Hello");
});

module.exports = app;
