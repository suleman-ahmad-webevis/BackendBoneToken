const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  subCategoryDesc: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  subCategoryImg: {
    type: String,
    required: true,
  },
});

const SubCategory = mongoose.model("SubCategory", subCategorySchema);

module.exports = SubCategory;
