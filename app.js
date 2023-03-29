const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/database");
const errorMiddleware = require("./middleware/error");

//Routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const adminRoutes = require("./routes/adminRoutes");
const blogRoutes = require("./routes/blogRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const subCategoryRoutes = require("./routes/subCategoryRoutes");
const dogNftRoutes = require("./routes/dogNftRoutes");
const supplierRoutes = require("./routes/supplierRoutes");
const { StatusCodes } = require("http-status-codes");

//Middleware
app.use(cors());
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: true, limit: "500mb" }));

connectDB();

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running at port", process.env.PORT);
});

app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/order", orderRoutes);
app.use("/payment", paymentRoutes);
app.use("/admin", adminRoutes);
app.use("/blog", blogRoutes);
app.use("/category", categoryRoutes);
app.use("/subCategory", subCategoryRoutes);
// app.use("/dogNft", dogNftRoutes);
app.use("/supplier", supplierRoutes);

app.route("*", () => {
  res.status(StatusCodes.NOT_FOUND).json({
    message: "No such route found",
  });
});

// Middleware for Errors
app.use(errorMiddleware);
