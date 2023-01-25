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
      blogCreator: req.userId,
    });
    await newBlog.save();
    return res.status(StatusCodes.CREATED).json({ message: "Blog posted" });
  }
});

const getAllBlogs = catchAsyncErrors(async (req, res, next) => {
  let query = { $and: [{}] };
  if (
    req.query.search != "undefined" &&
    (req.query.category == "null" || req.query.category == "undefined")
  ) {
    console.log("First");
    query.$and.push({
      $or: [
        {
          name: {
            $regex: ".*" + req.query.search + ".*",
            $option: "i",
          },
        },
      ],
    });
  }
  if (
    req.query.search != "undefined" &&
    req.query.category != "" &&
    req.query.category != "undefined" &&
    req.query.category != "null"
  ) {
    console.log("Second");
    query.$and.push({
      $and: [
        {
          name: {
            $regex: ".*" + req.query.search + ".*",
            $options: "i",
          },
          category: req.query.category,
        },
      ],
    });
  }
  if (req.query.category != "undefined" && req.query.category != "null") {
    console.log("Third");
    query.$and.push({
      $and: [{ category: req.query.category }],
    });
  }
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * pageSize;
  const total = await Blog.find(query).count();
  //New total because we have to find total for blogs for specific category, search
  //const total = await Blogs.countDocuments(); //Old way of finding the total
  const pages = Math.ceil(total / pageSize);
  if (page > pages) {
    return res.status(StatusCodes.OK).json({
      message: "No blog found",
    });
  }
  const blogs = await Blog.find(query)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(pageSize);
  if (blogs) {
    return res.status(StatusCodes.OK).json({
      count: total,
      page,
      pages,
      data: blogs,
    });
  }
});

const getBlogById = catchAsyncErrors(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id);
  if (blog) {
    res.json(blog);
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ message: "Blog not found" });
  }
});

module.exports = {
  addBlog,
  getAllBlogs,
  getBlogById,
};
