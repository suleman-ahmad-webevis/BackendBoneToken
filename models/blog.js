const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  authorName: {
    type: String,
    trim: true,
  },
  titleOfBlog: {
    type: String,
    trim: true,
  },
  featuredImg: {
    type: String,
  },
  category: {
    type: String,
    index: true,
  },
  blogDesc: {
    type: String,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
