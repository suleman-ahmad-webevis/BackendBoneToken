const express = require("express");
const app = express();
const mongoose = require("mongoose");
const env = require("dotenv");
env.config();

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => app.listen(process.env.DB_PORT))
    .then(() => console.log(`Server started on port ${process.env.DB_PORT}`))
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
};
module.exports = connectDB;
