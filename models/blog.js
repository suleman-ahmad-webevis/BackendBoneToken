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
    blogShortDesc: {
      type: String,
      required: true,
    },
    featuredImg: {
      type: String,
    },
    category: {
      type: String,
      index: true,
    },
    blogTags: {
      type: [String],
      required: false,
    },
    blogDesc: {
      type: String,
    },
    blogCreator: {
      type: mongoose.Schema.ObjectId,
      ref: "Admin",
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
