const { StatusCodes } = require("http-status-codes");
const cloudinary = require("../utils/cloudinary");
const Product = require("../models/product");
//ErrorHandlers
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//AddProduct
const addProduct = catchAsyncErrors(async (req, res, next) => {
  // const { name } = req.body.data;
  // const alreadyExist = await Product.findOne({ name });
  // if (alreadyExist) {
  //   return res
  //     .status(StatusCodes.BAD_REQUEST)
  //     .json({ message: "Product already exists" });
  // } else {
  let images = [...req.body.productImages];
  let imagesBuffer = [];
  for (let i = 0; i < images.length; i++) {
    const uploadedImg = await cloudinary.uploader.upload(images[i], {
      folder: "bonetoken",
    });
    imagesBuffer.push({
      publicId: uploadedImg.public_id,
      secureUrl: uploadedImg.secure_url,
    });
  }
  req.body.productImages = imagesBuffer;
  const newProduct = new Product({
    ...req.body,
    productImages: req.body.productImages,
    productCreatedBy: req.userId,
    productInventory: req.body.productInventory,
  });
  // for (let i = 0; i < req.body.colour.length; i++) {
  //   newProduct.colour.push(req.body.colour[i]);
  // }
  await newProduct.save();
  return res.status(StatusCodes.CREATED).json({ message: "Products added" });
  // }
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
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Error occurred while posting products" });
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
  if (req.query.subCategory != "undefined" && req.query.subCategory != "null") {
    query.$and.push({
      $and: [{ subCategory: req.query.subCategory }],
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
      message: "No Product Found",
    });
  }
  const products = await Product.find(query, { reviews: 0 })
    .select("-productCode -weight -colour -size -costPrice -retailPrice")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(pageSize);
  if (products.length) {
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
  const product = await Product.findById(req.params.id, { reviews: 0 }).select(
    "-productCode -weight -colour -size -costPrice -retailPrice"
  );
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
    // for (let i = 0; i < product.productImages.length; i++) {
    //   await cloudinary.uploader.destroy(product.productImages[i].publicId);
    // }
    // let images = [...req.body.productImages];
    // let imagesBuffer = [];
    // for (let i = 0; i < images.length; i++) {
    //   const uploadedImg = await cloudinary.uploader.upload(images[i], {
    //     folder: "bonetoken",
    //   });
    //   imagesBuffer.push({
    //     publicId: uploadedImg.public_id,
    //     secureUrl: uploadedImg.secure_url,
    //   });
    // }
    // req.body.productImages = imagesBuffer;
    await Product.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        // productImages: req.body.productImages,
        // productCreatedBy: req.userId,
        productInventory: req.body.productInventory,
      },
      { new: true }
    );
    res.status(StatusCodes.OK).json({ message: "Product updated" });
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
    for (let i = 0; i < product.productImages.length; i++) {
      await cloudinary.uploader.destroy(product.productImages[i].publicId);
    }
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
    return next(new ErrorHandler(StatusCodes.NOT_FOUND, "No product found"));
  } else {
    await Product.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
      },
      { new: true, runValidators: true }
    );
    res.status(StatusCodes.CREATED).json({ message: "Product tagged " });
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

const updateAllProduct = catchAsyncErrors(async (req, res, next) => {
  let arr = await Product.find({});
  arr = JSON.parse(JSON.stringify(arr));
  for (let i = 0; i < arr.length; i++) {
    let productInventory = [];
    for (let j = 0; j < arr[i]?.productCode?.length; j++) {
      let obj = {};
      obj.productCode = arr[i].productCode[j];
      obj.retailPrice = arr[i].retailPrice[j];
      obj.size = arr[i].size[j];
      obj.colour = arr[i].colour[j] ? arr[i].colour[j] : arr[i].colour[0];
      obj.costPrice = arr[i].costPrice[j]
        ? arr[i].costPrice[j]
        : arr[i]?.costPrice[0]
        ? arr[i]?.costPrice[0]
        : 0;
      obj.weight = arr[i].weight[j]
        ? arr[i].weight[j]
        : arr[i]?.weight[0]
        ? arr[i]?.weight[0]
        : "0 kg";
      productInventory.push(obj);
    }
    arr[i].productInventory = productInventory;
  }
  let bulkOption = arr.map((el) => {
    return {
      updateOne: {
        filter: { _id: el?._id },
        update: { $set: { productInventory: el?.productInventory } },
      },
    };
  });
  await Product.bulkWrite(bulkOption, {});
  console.log(arr);
  res.json({
    arr,
  });
});


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
  updateAllProduct,
  // postProductReview,
  // getProductReviews,
  // deleteProductReview,
};
