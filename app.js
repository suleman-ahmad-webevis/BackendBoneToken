const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRoutes = require("./routers/userRoutes");
const dogRoutes = require("./routers/dogRoutes");
const productRoutes = require("./routers/productRoutes");
const cartRoutes = require("./routers/cartRoutes");
const { checkUser } = require("./utils/auth");
const globalErrorHandler = require("./controllers/errorHandler");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.static("public"));

app.use(express.json());

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
app.use(userRoutes, dogRoutes, productRoutes, cartRoutes);
