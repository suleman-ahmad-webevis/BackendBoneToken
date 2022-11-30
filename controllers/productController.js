const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../utils/catchAsync");
const Products = require("../models/product");
const cloudinary = require("../utils/cloudinary");
const Product = require("../models/product");

//AddProduct
const addProduct = catchAsync(async (req, res) => {
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
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "New product added" });
  }
});

//PostProductsWithCSV
const productPost = catchAsync(async (req, res) => {
  const csvArray = req.body;
  if (csvArray.length > 0) {
    for (const element of csvArray) {
      await Products.create({ ...element });
    }
    const products = await Products.find().sort({ _id: -1 });
    res
      .status(StatusCodes.CREATED)
      .json({ message: "Products added", data: products });
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "Products not added" });
  }
});

//GetProduct
const productGet = catchAsync(async (req, res) => {
  let query = { $and: [{}] };
  if (req.query.search !== undefined) {
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
  if (
    req.query.category != "undefined" &&
    req.query.category != "null" &&
    req.query.category != undefined &&
    req.query.search === undefined
  ) {
    query.$and.push({
      $and: [{ category: req.query.category }],
    });
  }
  if (
    req.query.gender != "undefined" &&
    req.query.coatColor != "undefined" &&
    req.query.age != "undefined" &&
    req.query.breed != "undefined" &&
    req.query.dogGroupFCI != "undefined" &&
    req.query.season != "undefined" &&
    req.query.gender != undefined &&
    req.query.coatColor != undefined &&
    req.query.age != undefined &&
    req.query.breed != undefined &&
    req.query.dogGroupFCI != undefined &&
    req.query.season != undefined
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
  const total = await Products.find(query).count(); //New total because we have to find total for products of specific category , smart search etc
  // const total = await Products.countDocuments(); //Old way of finding the total
  const pages = Math.ceil(total / pageSize);
  if (page > pages) {
    return res.status(StatusCodes.OK).json({
      message: "No product found",
    });
  }
  const products = await Products.find(query)
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
const productById = catchAsync(async (req, res) => {
  const product = await Products.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ message: "Product not found" });
  }
});

//UpdateProduct
const productUpdate = catchAsync(async (req, res) => {
  let product = await Products.findById(req.params.id);
  if (product) {
    if (product.productImage !== req.body.productImage) {
      // await cloudinary.uploader.destroy(product.cloudinaryId);
      const updated_img = await cloudinary.uploader.upload(
        req.body.productImage
      );
      await Products.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
          productImage: updated_img.secure_url,
          cloudinaryId: updated_img.public_id,
        },
        { new: true }
      );
    } else {
      await Products.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );
    }
    const products = await Products.find().sort({ _id: -1 });
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
const productDelete = catchAsync(async (req, res) => {
  const product = await Products.findById(req.params.id);
  if (product) {
    // await cloudinary.uploader.destroy(product.cloudinaryId);
    await product.remove();
    const products = await Products.find().sort({ _id: -1 });
    res
      .status(StatusCodes.OK)
      .json({ message: "Product deleted", data: products });
  } else
    res.status(StatusCodes.NOT_FOUND).json({ message: "Product not found" });
});

//ProductsBar
//Features Products
const featuredProducts = catchAsync(async (req, res) => {
  const products = await Products.find({ featured: true });
  if (products.length) {
    res.status(StatusCodes.OK).json({
      message: "Products found",
      data: products,
    });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ message: "Products not found" });
  }
});

//Popular Products
const popularProducts = catchAsync(async (req, res) => {
  let products = await Products.find({ rating: { $gte: 4 } });
  if (products) {
    res.status(StatusCodes.OK).json({
      message: "Products found",
      data: products,
    });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ message: "Products not found" });
  }
});

//Post/Put Product Review
const postProductReview = catchAsync(async (req, res) => {
  const { rating, productId } = req.body;

  const review = {
    userId: req.userId,
    userName: req.name,
    rating: Number(rating),
  };

  const product = await Product.findById(productId);
  const isReviewed = product.reviews.find(
    (rev) => rev.userId.toString() === req.userId.toString()
  );
  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.userId.toString() === req.userId.toString()) {
        rev.rating = rating;
      }
    });
  } else {
    product.reviews.push(review);
  }
  let avg = 0;
  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });
  product.rating = avg / product.reviews.length;
  product.numberOfReviews = product.reviews.length;
  await product.save({ validateBeforeSave: false });
  res.status(StatusCodes.CREATED).json({
    message: "Review Created",
  });
});

//GetProductReviews
const getProductReviews = catchAsync(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(StatusCodes.NOT_FOUND).json({ message: "Product not found" });
  }
  res.status(StatusCodes.OK).json({
    message: "Product reviews",
    reviews: product.reviews,
  });
});

// Delete Review
const deleteProductReview = catchAsync(async (req, res) => {
  const product = await Product.findById(req.query.productId);
  if (!product) {
    res.status(StatusCodes.NOT_FOUND).json({ message: "Product not found" });
  }

  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  let rating = 0;

  if (reviews.length === 0) {
    rating = 0;
  } else {
    rating = avg / reviews.length;
  }

  const numberOfReviews = reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      rating,
      numberOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(StatusCodes.OK).json({
    message: "Review deleted",
  });
});

//Post Product Tags
const productTagsPost = catchAsync(async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "No product with corresponding id was found" });
  } else {
    const tagged = await Products.findByIdAndUpdate(
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

//Admin Portal Products
// const productGetPortal = catchAsync(async (req, res) => {
//   let query = { $and: [{}] };
//   let searchedProduct = false;
//   let isSuccess = true;
//   if (req.query.searchText) {
//     searchedProduct = true;
//     isSuccess = false;
//     query.$and.push({
//       $or: [
//         {
//           name: {
//             $regex: ".*" + req.query.searchText + ".*",
//             $options: "i",
//           },
//         },
//       ],
//     });
//   }
//   const page = parseInt(req.query.page) || 1;
//   const pageSize = parseInt(req.query.limit) || 10;
//   const skip = (page - 1) * pageSize;
//   const total = await Products.countDocuments();
//   const pages = Math.ceil(total / pageSize);
//   if (page > pages) {
//     return res.status(StatusCodes.NOT_FOUND).json({
//       message: "No product found",
//     });
//   }
//   const products = await Products.find(query)
//     .sort({ createdAt: -1 })
//     .skip(skip)
//     .limit(pageSize);
//   if (products) {
//     res.status(StatusCodes.OK).json({
//       count: total,
//       page,
//       pages,
//       data: products,
//       searchedProduct,
//       isSuccess,
//     });
//   } else {
//     res.status(StatusCodes.NOT_FOUND).json({ message: "Product not found" });
//   }
// });

module.exports = {
  // productPost,
  productGet,
  productById,
  productPost,
  productUpdate,
  productDelete,
  postProductReview,
  getProductReviews,
  deleteProductReview,
  popularProducts,
  featuredProducts,
  productTagsPost,
  addProduct,
};
