const mongoose = require("mongoose");
const User = require("./user");

const productSchema = new mongoose.Schema(
  {
    articleNumber: {
      type: Number,
      required: [true, "Please enter the article number of product."],
      trim: true,
      maxLength: [30, "Article Number cannot exceed 30 characters"],
    },
    description: {
      type: String,
      required: [true, "Please enter description of product."],
      maxLength: [400, "Description cannot exceed 400 characters"],
      index: true,
    },
    EAN: {
      type: Number,
      required: [true, "Please enter the European Article Number"],
    },
    category: {
      type: String,
      required: [true, "Please add a Category for product"],
      enum: [
        "vetBed",
        "crateCushions",
        "cratesAndCages",
        "carBox",
        "beds",
        "puppyPens",
        "houses",
        "snacks",
        "toys",
        "groomingTables",
        "vehicleRamps",
        "runningMachines",
        "feedingBowls",
        "strollers",
        "baths",
        "dogShowTrolley",
        "dogShowTent",
        "whelpingBoxes",
        "agility",
      ],
    },
    purchasePrice: {
      type: Number,
      required: [true, "Please Enter Product Purchase Price"],
      maxLength: [8, "Purchase Price cannot exceed 8 Characters"],
    },
    RRP: {
      type: Number,
      required: [true, "Please enter Required Retail Price"],
      maxLength: [8, "Required Retail Price cannot exceed 8 Characters"],
    },
    productImage: {
      type: String,
    },
    //ProductsBar
    featured: {
      type: Boolean,
      index: true,
    },
    //SmartSearch
    gender: {
      type: String,
      // required: [true, "Please add Gender for Product"],
      enum: ["Male", "Female"],
    },
    coatColor: {
      type: String,
      // required: [true, "Please add color for Product"],
      enum: [
        "Black",
        "Black brindle",
        "Black daple",
        "Black and tan",
        "Black and silver",
        "Black sable",
        "White",
        "Yellow",
        "Red",
        "Cream ",
        "Mahogany ",
        " Fawn ",
        "Fawn black mask",
        "Aguty ",
        "Chocolate",
        "Blue",
        "Grey",
        "Silver",
      ],
    },
    age: {
      type: String,
      // required: [true, "Please add age for Product"],
      enum: ["Puppy", "Junior", "Adult", "Senior"],
    },
    breed: {
      type: String,
      // required: [true, "Please add breed for Product"],
      enum: ["Affenpinscher", "Afghan Hound", "Aidi"],
    },
    dogGroupFCI: {
      type: String,
      // required: [true, "Please add DogGroup FCI for Product"],
      enum: [
        "Group I",
        "Group II",
        "Group III",
        "Group IV",
        "Group V",
        "Group VI",
        "Group VII",
        "Group VIII",
        "Group IX",
        "Group X",
      ],
    },
    season: {
      type: String,
      // required: true,
      enum: ["Summer", "Winter", "Spring", "Autumn"],
    },
    //Rating
    rating: {
      type: Number,
      default: 0,
      maxLength: 5,
      index: true,
    },
    numberOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        userId: {
          type: mongoose.Schema.ObjectId,
          ref: User,
        },
        rating: {
          type: Number,
          maxLength: 5,
        },
      },
    ],
  },
  { timestamps: true }
);

productSchema.index({ createdAt: 1 });
productSchema.index({ updatedAt: 1 });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
