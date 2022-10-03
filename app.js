const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const globalErrorHandler = require("./utils/errorHandler");
const connectDB = require("./config/database");

//Routes
const userRoutes = require("./routes/userRoutes");
const dogRoutes = require("./routes/dogRoutes");
const productRoutes = require("./routes/productRoutes");
const adminRoutes = require("./routes/adminRoutes");
const orderRoutes = require("./routes/orderRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

//Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

connectDB();

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running at port", process.env.PORT);
});

app.use(globalErrorHandler);
app.use(
  userRoutes,
  dogRoutes,
  productRoutes,
  adminRoutes,
  orderRoutes,
  paymentRoutes
);
