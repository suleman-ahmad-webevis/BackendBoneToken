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
  const categories = await Category.find({});
  if (categories.length) {
    return res.status(StatusCodes.OK).json({ data: categories });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ message: "No category found" });
  }
});

module.exports = {
  addCategory,
  getAllCategory,
};
