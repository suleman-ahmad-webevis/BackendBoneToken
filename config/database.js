const mongoose = require("mongoose");
const env = require("dotenv");
env.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true, //The useNewUrlParser and useUnifiedTopology will stop unwanted warnings
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
  }
};
module.exports = connectDB;
