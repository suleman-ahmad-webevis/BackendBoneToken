const Blog = require("../models/blog");
const { StatusCodes } = require("http-status-codes");
//ErrorHandlers
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const addBlog = catchAsyncErrors(async (req, res, next) => {
  const { data, blogDesc } = req.body;
  const alreadyExist = await Blog.findOne({
    titleOfBlog: data.titleOfBlog,
  });
  if (alreadyExist) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Blog already exist" });
  } else {
    let newBlog = new Blog({
      ...req.body.data,
      blogDesc,
    });
    await newBlog.save();
    return res.status(StatusCodes.CREATED).json({ message: "Blog added" });
  }
});

const getAllBlogs = catchAsyncErrors(async (req, res, next) => {
  const allBlogs = await Blog.find({});
  if (allBlogs.length) {
    return res.status(StatusCodes.OK).json({ message: "All blogs", allBlogs });
  } else {
    return next(new ErrorHandler(StatusCodes.NOT_FOUND, "No blog found"));
  }
});

module.exports = {
  addBlog,
  getAllBlogs,
};
