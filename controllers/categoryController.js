const { StatusCodes } = require("http-status-codes");
const Category = require("../models/category");
//ErrorHandlers
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//AddNewCategory
const addCategory = catchAsyncErrors(async (req, res, next) => {
  const { title } = req.body;
  const alreadyExist = await Category.findOne({ title });
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

//GetAllCategoriesPaginated
const getAllCategories = catchAsyncErrors(async (req, res, next) => {
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
    .sort({ title: 1 })
    .skip(skip)
    .limit(pageSize);
  if (categories) {
    return res.status(StatusCodes.OK).json({
      count: total,
      page,
      pages,
      data: categories,
    });
  }
});

//GetAllCategory
const getAllCategory = catchAsyncErrors(async (req, res, next) => {
  const categories = await Category.find({}).sort({ title: 1 });
  if (categories) {
    return res.status(StatusCodes.OK).json({
      data: categories,
    });
  } else {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "No Category Found" });
  }
});

module.exports = {
  addCategory,
  getAllCategories,
  getAllCategory,
};
