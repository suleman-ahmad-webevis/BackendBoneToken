const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" });
const cors = require("cors");
const connectDB = require("./config/database");
const errorMiddleware = require("./middleware/error");

//Routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const adminRoutes = require("./routes/adminRoutes");
const blogRoutes = require("./routes/blogRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const subCategoryRoutes = require("./routes/subCategoryRoutes");
const nftRoutes = require("./routes/nftRoutes");
const supplierRoutes = require("./routes/supplierRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const { StatusCodes } = require("http-status-codes");
//Middleware
app.use(cors());
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: true, limit: "500mb" }));

//Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log("Error", err.message);
  console.log("Error stack", err.stack);
  console.log("Shutting down server due to uncaught exceptions");
  process.exit(1);
});

connectDB();

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server running at port ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});

//Handle unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log("The error", err);
  console.log("Shutting down server");
  server.close(() => {
    process.exit(1);
  });
});

app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/order", orderRoutes);
app.use("/admin", adminRoutes);
app.use("/blog", blogRoutes);
app.use("/category", categoryRoutes);
app.use("/subCategory", subCategoryRoutes);
app.use("/dogNft", nftRoutes);
app.use("/supplier", supplierRoutes);
app.use("/payment", paymentRoutes);

app.use("*", () => {
  res.status(StatusCodes.NOT_FOUND).json({
    message: "No such route found",
  });
});

// Middleware for Operational Errors
app.use(errorMiddleware);
