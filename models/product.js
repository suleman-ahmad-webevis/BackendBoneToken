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
      type: [String],
      // required: true,
    },
    weight: {
      type: [String],
      // required: true,
    },
    colour: {
      type: [String],
      // required: true,
    },
    size: {
      type: [String],
      // required: true,
    },
    retailPrice: {
      type: [String],
      required: true,
      // required: [true, "Please enter Required Retail Price"],
      // maxLength: [8, "Required Retail Price cannot exceed 8 Characters"],
    },
    memberPrice: {
      type: Number,
    },
    videoLink: {
      type: String,
    },
    blogLink: {
      type: String,
    },
    //Images
    productImages: [
      {
        publicId: {
          type: String,
          required: true,
        },
        secureUrl: {
          type: String,
          required: true,
        },
      },
    ],
    //category
    category: {
      type: String,
      required: [true, "Please add a Category for product"],
      // enum: categoryEnum,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    //TagProduct
    tagged: {
      type: Boolean,
      default: false,
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
    ratingAvg: {
      type: Number,
      default: 0,
      maxLength: 5,
    },
    // rating: {
    //   type: Number,
    //   default: 0,
    //   maxLength: 5,
    // },
    noOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        // userId: {
        //       type: mongoose.Schema.ObjectId,
        //       ref: User,
        //     },
        rating: {
          type: Number,
          default: 0,
        },
      },
    ],
    productCreatedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
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
    purchasePrice: {
      type: Number,
      // required: [true, "Please Enter Product Purchase Price"],
      // maxLength: [8, "Purchase Price cannot exceed 8 Characters"],
    },
  },
  { timestamps: true }
);

// productSchema.index({ createdAt: 1 });
// productSchema.index({ updatedAt: 1 });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
