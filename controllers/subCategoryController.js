const { StatusCodes } = require("http-status-codes");
const SubCategory = require("../models/subCategory");
//ErrorHandlers
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//AddNewSubCategory
const addSubCategory = catchAsyncErrors(async (req, res, next) => {
  const { title } = req.body;
  const alreadyExist = await SubCategory.findOne({ title });
  if (alreadyExist) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "SubCategory already exist" });
  } else {
    const newSubCategory = new SubCategory({
      ...req.body,
    });
    await newSubCategory.save();
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "SubCategory created" });
  }
});

//GetAllSubCategory
const getAllSubCategory = catchAsyncErrors(async (req, res, next) => {
  const { subCategory } = req.query;
  const subCategories = await SubCategory.find({
    category: subCategory,
  });
  if (subCategories.length) {
    return res.status(StatusCodes.OK).json({
      data: subCategories,
    });
  } else {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "No SubCategory Found" });
  }
});
module.exports = {
  addSubCategory,
  getAllSubCategory,
};
