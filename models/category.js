const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  subCategories: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "SubCategory",
      required: false,
      // type: [mongoose.Schema.Types.ObjectId],
      // ref: "SubCategory",
      // required: false,
    },
  ],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
