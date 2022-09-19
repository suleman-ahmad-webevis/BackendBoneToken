const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const globalErrorHandler = require("./utils/errorHandler");
const mongoose = require("mongoose");

//Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());


mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(process.env.DB_PORT))
  .then(() =>
    console.log(`Server started running on port ${process.env.DB_PORT}`)
  )
  .catch((err) => console.log(err));

//Routes
const userRoutes = require("./routes/userRoutes");
const dogRoutes = require("./routes/dogRoutes");
const productRoutes = require("./routes/productRoutes");
const adminRoutes = require('./routes/adminRoutes')
// app.get("*", checkUser);
app.use(globalErrorHandler);
app.use(userRoutes, dogRoutes, productRoutes, adminRoutes);
