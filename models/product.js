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
      required: [true, "Please enter name of product."],
    },
    description: {
      type: String,
      // required: [true, "Please enter description of product."],
      // maxLength: [400, "Description cannot exceed 400 characters"],
    },
    videoLink: {
      type: String,
    },
    blogLink: {
      type: String,
    },
    productInventory: [
      {
        productCode: {
          type: String,
        },
        weight: {
          type: String,
          default: "0 kg",
        },
        colour: {
          type: String,
        },
        size: {
          type: String,
        },
        costPrice: {
          type: Number,
          default: 0,
        },
        retailPrice: {
          type: Number,
          default: 0,
        },
        minRetailPrice: {
          type: Number,
          default: 0,
        },
        quantity: {
          type: Number,
          default: 0,
        },
      },
    ],
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
    //subCategory
    subCategory: {
      type: mongoose.Schema.ObjectId,
      ref: "SubCategory",
      required: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    supplierId: {
      type: mongoose.Schema.ObjectId,
      ref: "Supplier",
      required: false,
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
  },
  { timestamps: true }
);

// productSchema.index({ createdAt: 1 });
// productSchema.index({ updatedAt: 1 });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
