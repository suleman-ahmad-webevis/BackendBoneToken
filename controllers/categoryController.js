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

//UpdateCategory
const updateCategory = catchAsyncErrors(async (req, res, next) => {
  let category = await Category.findById(req.params.categoryId);
  if (category) {
    await Category.findByIdAndUpdate(
      req.params.categoryId,
      {
        ...req.body.editCategory,
      },
      { new: true }
    );
    res.status(StatusCodes.OK).json({ message: "Category updated" });
  } else {
    res
      .status(StatusCodes.NOT_FOUND)
      .res.json({ message: "Category not found" });
  }
});

//DeleteCategory
const deleteCategory = catchAsyncErrors(async (req, res, next) => {
  const category = await Category.findById(req.params.categoryId);
  if (category) {
    await category.remove();
    res.status(StatusCodes.OK).json({ message: "Category deleted" });
  } else
    res.status(StatusCodes.NOT_FOUND).json({ message: "Category not found" });
});


module.exports = {
  addCategory,
  getAllCategories,
  getAllCategory,
  updateCategory,
  deleteCategory,
};
