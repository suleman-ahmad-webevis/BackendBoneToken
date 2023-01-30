const { StatusCodes } = require("http-status-codes");
const Category = require("../models/category");
//ErrorHandlers
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//AddNewCategory
const addCategory = catchAsyncErrors(async (req, res, next) => {
  const { name } = req.body;
  const alreadyExist = await Category.findOne({ name });
  if (alreadyExist) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Category already exist" });
  } else {
    const newCategory = new Category({
      ...req.body,
    });
    await newCategory.save();
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "Category created" });
  }
});

//AddNewCategory
const getAllCategory = catchAsyncErrors(async (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * pageSize;
  const total = await Category.find({}).count();
  const pages = Math.ceil(total / pageSize);
  if (page > pages) {
    return res.status(StatusCodes.OK).json({
      message: "No category found",
    });
  }
  const categories = await Category.find({})
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(pageSize);
  console.log("The categories", categories);
  if (categories) {
    return res.status(StatusCodes.OK).json({
      count: total,
      page,
      pages,
      data: categories,
    });
  }
});

module.exports = {
  addCategory,
  getAllCategory,
};
