const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const dogRoutes = require("./routes/dogRoutes");
const productRoutes = require("./routes/productRoutes");
const globalErrorHandler = require("./utils/errorHandler");
const { checkUser } = require("./utils/auth");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.static("public"));
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

// app.get("*", checkUser);
app.use(globalErrorHandler);
app.use(userRoutes, dogRoutes, productRoutes);
