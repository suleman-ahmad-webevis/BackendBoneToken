const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const globalErrorHandler = require("./utils/errorHandler");
const { checkUser } = require("./utils/auth");
const connectDB = require("./config/database");

//Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
connectDB();

//Routes
const userRoutes = require("./routes/userRoutes");
const dogRoutes = require("./routes/dogRoutes");
const productRoutes = require("./routes/productRoutes");
// app.get("*", checkUser);
app.use(globalErrorHandler);
app.use(userRoutes, dogRoutes, productRoutes);
