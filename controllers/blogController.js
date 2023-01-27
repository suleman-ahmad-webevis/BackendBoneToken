const Blog = require("../models/blog");
const { StatusCodes } = require("http-status-codes");
//ErrorHandlers
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const axios = require("axios");

const addBlog = catchAsyncErrors(async (req, res, next) => {
  let postPublished;
  let API_URL_ME = `https://api.medium.com/v1/me`;
  let API_URL_POST = `https://api.medium.com/v1/users`;
  const headers = {
    Authorization: `Bearer 22c7bd4c960fbf57516b6742d298f85706cefbf618fef85564d4c1e9865143331`,
  };

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
    let newBlogSaved = await newBlog.save();
    try {
      const mediumUserInfo = await axios.get(API_URL_ME, { headers: headers });
      const { data } = mediumUserInfo.data;
      const { id } = data;
      if (id) {
        const authorId = id;
        postPublished = await axios.post(
          `${API_URL_POST}/${authorId}/posts`,
          {
            title: newBlog.titleOfBlog,
            contentFormat: "html",
            content: newBlog.blogDesc,
            canonicalUrl: "https://bonetoken.com/blogs",
            tags: ["dogs", "pets", "dog"],
            publishStatus: "public",
          },
          {
            headers: headers,
          }
        );
      }
      if (postPublished.status === 201 && Object.keys(newBlogSaved).length) {
        return res
          .status(StatusCodes.CREATED)
          .json({ message: "Blog posted and shared to medium" });
      }
    } catch (err) {
      return next(
        new ErrorHandler(
          StatusCodes.BAD_REQUEST,
          "Failed to share blog to medium"
        )
      );
    }
  }
});

const getAllBlogs = catchAsyncErrors(async (req, res, next) => {
  let query = { $and: [{}] };
  if (req.query.category != "undefined" && req.query.category != "null") {
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

const updateBlog = catchAsyncErrors(async (req, res, next) => {
  console.log("The update");
});

module.exports = {
  addBlog,
  getAllBlogs,
  getBlogById,
  updateBlog
};
