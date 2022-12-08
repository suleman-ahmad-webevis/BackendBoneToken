const mongoose = require("mongoose");
const User = require("./user");
const {
  categoryEnum,
  genderEnum,
  coatColorEnum,
  ageEnum,
  dogGroupFCIEnum,
  breedEnum,
  seasonEnum,
} = require("./enums");

const productSchema = new mongoose.Schema(
  {
    //NewFields
    name: {
      type: String,
      trim: true,
      index: true,
    },
    description: {
      type: String,
      // required: [true, "Please enter description of product."],
      // maxLength: [400, "Description cannot exceed 400 characters"],
    },
    productCode: {
      type: String,
    },
    weight: {
      type: String,
    },
    size: {
      type: String,
    },
    productImage: {
      type: String,
    },
    colour: {
      type: String,
    },
    retailPrice: {
      type: Number,
      // required: [true, "Please enter Required Retail Price"],
      // maxLength: [8, "Required Retail Price cannot exceed 8 Characters"],
    },
    memberPrice: {
      type: Number,
    },
    //-----------------------CSV-----------------------
    articleNumber: {
      type: Number,
      // required: [true, "Please enter the article number of product."],
      trim: true,
      // maxLength: [30, "Article Number cannot exceed 30 characters"],
    },
    EAN: {
      type: Number,
      // required: [true, "Please enter the European Article Number"],
    },
    category: {
      type: String,
      // required: [true, "Please add a Category for product"],
      // enum: categoryEnum,
    },
    purchasePrice: {
      type: Number,
      // required: [true, "Please Enter Product Purchase Price"],
      // maxLength: [8, "Purchase Price cannot exceed 8 Characters"],
    },
    featured: {
      type: Boolean,
    },
    gender: {
      type: String,
      // required: [true, "Please add Gender for Product"],
      // enum: genderEnum,
    },
    coatColor: {
      type: String,
      // required: [true, "Please add color for Product"],
      // enum: coatColorEnum,
    },
    age: {
      type: String,
      // required: [true, "Please add age for Product"],
      // enum: ageEnum,
    },
    breed: {
      type: String,
      // required: [true, "Please add breed for Product"],
      // enum: breedEnum,
    },
    dogGroupFCI: {
      type: String,
      // required: [true, "Please add DogGroup FCI for Product"],
      // enum: dogGroupFCIEnum,
    },
    season: {
      type: String,
      // required: true,
      // enum: seasonEnum,
    },
    //Rating
    // rating: {
    //   type: Number,
    //   default: 0,
    //   maxLength: 5,
    // },
    // numberOfReviews: {
    //   type: Number,
    //   default: 0,
    // },
    // reviews: [
    //   {
    //     userId: {
    //       type: mongoose.Schema.ObjectId,
    //       ref: User,
    //     },
    //     rating: {
    //       type: Number,
    //       maxLength: 5,
    //     },
    //   },
    // ],
  },
  { timestamps: true }
);

productSchema.index({ createdAt: 1 });
productSchema.index({ updatedAt: 1 });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
