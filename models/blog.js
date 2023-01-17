const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
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
    blogCreator: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    mayLike: {
      type: Boolean,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
