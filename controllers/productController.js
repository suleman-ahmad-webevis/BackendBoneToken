const { StatusCodes } = require("http-status-codes");
const cloudinary = require("../utils/cloudinary");
const Product = require("../models/product");
//ErrorHandlers
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//AddProduct
const addProduct = catchAsyncErrors(async (req, res, next) => {
  const { name } = req.body;
  const product = await Product.findOne({ name });
  if (product) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Product already exists" });
  } else {
    const uploaded_img = await cloudinary.uploader.upload(
      req.body.productImage
    );
    const newProduct = new Product({
      ...req.body,
      productImage: uploaded_img.secure_url,
      cloudinaryId: uploaded_img.public_id,
    });
    await newProduct.save();
    return res.status(StatusCodes.CREATED).json({ message: "Products added" });
  }
});

//PostProductsWithCSV
const productPost = catchAsyncErrors(async (req, res, next) => {
  const csvArray = req.body;
  if (csvArray.length > 0) {
    for (const element of csvArray) {
      await Product.create({ ...element });
    }
    res.status(StatusCodes.CREATED).json({ message: "Products posted" });
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "Products not added" });
  }
});

//GetProducts
const productGet = catchAsyncErrors(async (req, res, next) => {
  let query = { $and: [{}] };
  if (
    req.query.search != "undefined" &&
    (req.query.category == "null" || req.query.category == "undefined")
  ) {
    query.$and.push({
      $or: [
        {
          name: {
            $regex: ".*" + req.query.search + ".*",
            $options: "i",
          },
        },
      ],
    });
  }
  if (
    req.query.search != "undefined" &&
    req.query.search != "" &&
    req.query.category != "undefined" &&
    req.query.category != "null"
  ) {
    query.$and.push({
      $and: [
        {
          name: {
            $regex: ".*" + req.query.search + ".*",
            $options: "i",
          },
          category: req.query.category,
        },
      ],
    });
  }
  if (req.query.category != "undefined" && req.query.category != "null") {
    query.$and.push({
      $and: [{ category: req.query.category }],
    });
  }
  if (req.query.featured != "undefined" && req.query.featured != "null") {
    query.$and.push({
      $and: [{ featured: true }],
    });
  }
  if (req.query.rated != "undefined" && req.query.rated != "null") {
    query.$and.push({
      $and: [{ ratingAvg: { $gte: 4 } }],
    });
  }
  if (
    req.query.gender != "undefined" &&
    req.query.coatColor != "undefined" &&
    req.query.age != "undefined" &&
    req.query.breed != "undefined" &&
    req.query.dogGroupFCI != "undefined" &&
    req.query.season != "undefined"
  ) {
    query.$and.push({
      $and: [
        {
          gender: req.query.gender,
          coatColor: req.query.coatColor,
          age: req.query.age,
          breed: req.query.breed,
          dogGroupFCI: req.query.dogGroupFCI,
          season: req.query.season,
        },
      ],
    });
  }
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * pageSize;
  const total = await Product.find(query).count(); //New total because we have to find total for products of specific category , smart search etc
  // const total = await Products.countDocuments(); //Old way of finding the total
  const pages = Math.ceil(total / pageSize);

  if (page > pages) {
    return res.status(StatusCodes.OK).json({
      message: "No product found",
    });
  }
  const products = await Product.find(query, { reviews: 0 })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(pageSize);

  if (products) {
    return res.status(StatusCodes.OK).json({
      count: total,
      page,
      pages,
      data: products,
    });
  }
});

//GetProductById
const productById = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id, { reviews: 0 });
  if (product) {
    res.json(product);
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ message: "Product not found" });
  }
});

//UpdateProduct
const productUpdate = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (product) {
    if (product.productImage !== req.body.productImage) {
      // await cloudinary.uploader.destroy(product.cloudinaryId);
      const updated_img = await cloudinary.uploader.upload(
        req.body.productImage
      );
      await Product.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
          productImage: updated_img.secure_url,
          cloudinaryId: updated_img.public_id,
        },
        { new: true }
      );
    } else {
      await Product.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );
    }
    const products = await Product.find({}, { reviews: 0 }).sort({ _id: -1 });
    res
      .status(StatusCodes.OK)
      .json({ message: "Product updated", data: products });
  } else {
    res
      .status(StatusCodes.NOT_FOUND)
      .res.json({ message: "Product not found" });
  }
});

//DeleteProduct
const productDelete = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    // await cloudinary.uploader.destroy(product.cloudinaryId);
    await product.remove();
    const products = await Product.find({}, { reviews: 0 }).sort({ _id: -1 });
    res
      .status(StatusCodes.OK)
      .json({ message: "Product deleted", data: products });
  } else
    res.status(StatusCodes.NOT_FOUND).json({ message: "Product not found" });
});

//RateTheProduct
const rateTheProduct = catchAsyncErrors(async (req, res, next) => {
  const { productId, ratingTotal } = req.body;
  const product = await Product.findById(productId);
  if (product) {
    product.reviews.push({ rating: ratingTotal });
    product.save();
    let avg = 0;
    product.reviews.forEach((rev) => {
      avg += rev.rating;
    });
    product.ratingAvg = Math.ceil(avg / product.reviews.length);
    product.noOfReviews = product.reviews.length;
    res.status(StatusCodes.CREATED).json({
      message: "Product rated",
    });
  } else
    res.status(StatusCodes.NOT_FOUND).json({ message: "Product not found" });
});

//TagProduct
const productTagsPost = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(
      new ErrorHandler(
        StatusCodes.NOT_FOUND,
        "No product with corresponding id was found"
      )
    );
  } else {
    await Product.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      { new: true, runValidators: true }
    );
    res
      .status(StatusCodes.CREATED)
      .json({ message: "Product tagged successfully" });
  }
});

//FeatureTheProduct
const productFeaturedPost = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler(StatusCodes.NOT_FOUND, "No product found"));
  } else {
    await Product.findByIdAndUpdate(
      req.params.id,
      {
        featured: req.body.featured,
      },
      { new: true, runValidators: true }
    );
    res.status(StatusCodes.CREATED).json({
      message: req.body.featured ? "Product featured" : "Unfeatured product",
    });
  }
});

//Post/Put Product Review
// const postProductReview = catchAsyncErrors(async (req, res,next) => {
//   const { rating, productId } = req.body;
//   const review = {
//     userId: req.userId,
//     userName: req.name,
//     rating: Number(rating),
//   };
//   const product = await Product.findById(productId);
//   const isReviewed = product.reviews.find(
//     (rev) => rev.userId.toString() === req.userId.toString()
//   );
//   if (isReviewed) {
//     product.reviews.forEach((rev) => {
//       if (rev.userId.toString() === req.userId.toString()) {
//         rev.rating = rating;
//       }
//     });
//   } else {
//     product.reviews.push(review);
//   }
//   let avg = 0;
//   product.reviews.forEach((rev) => {
//     avg += rev.rating;
//   });
//   product.rating = avg / product.reviews.length;
//   product.numberOfReviews = product.reviews.length;
//   await product.save({ validateBeforeSave: false });
//   res.status(StatusCodes.CREATED).json({
//     message: "Review Created",
//   });
// });

//GetProductReviews
// const getProductReviews = catchAsyncErrors(async (req, res,next) => {
//   const product = await Product.findById(req.params.id);
//   if (!product) {
//     res.status(StatusCodes.NOT_FOUND).json({ message: "Product not found" });
//   }
//   res.status(StatusCodes.OK).json({
//     message: "Product reviews",
//     reviews: product.reviews,
//   });
// });

// Delete Review
// const deleteProductReview = catchAsyncErrors(async (req, res,next) => {
//   const product = await Product.findById(req.query.productId);
//   if (!product) {
//     res.status(StatusCodes.NOT_FOUND).json({ message: "Product not found" });
//   }
//   const reviews = product.reviews.filter(
//     (rev) => rev._id.toString() !== req.query.id.toString()
//   );
//   let avg = 0;
//   reviews.forEach((rev) => {
//     avg += rev.rating;
//   });
//   let rating = 0;
//   if (reviews.length === 0) {
//     rating = 0;
//   } else {
//     rating = avg / reviews.length;
//   }
//   const numberOfReviews = reviews.length;
//   await Product.findByIdAndUpdate(
//     req.query.productId,
//     {
//       reviews,
//       rating,
//       numberOfReviews,
//     },
//     {
//       new: true,
//       runValidators: true,
//       useFindAndModify: false,
//     }
//   );
//   res.status(StatusCodes.OK).json({
//     message: "Review deleted",
//   });
// });

module.exports = {
  productGet,
  productById,
  productPost,
  productUpdate,
  productDelete,
  productTagsPost,
  productFeaturedPost,
  addProduct,
  rateTheProduct,
  // postProductReview,
  // getProductReviews,
  // deleteProductReview,
};
