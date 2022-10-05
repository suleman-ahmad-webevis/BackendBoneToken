const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../utils/catchAsync");
const Products = require("../models/product");
const cloudinary = require("../utils/cloudinary");
const Product = require("../models/product");
const { response } = require("express");

//PostProducts
const productPost = catchAsync(async (req, res) => {
  const csvArray = req.body;
  if (csvArray.length > 0) {
    let product;
    csvArray.forEach(async (element) => {
      product = await Products.create({ ...element });
    });
    const products = await Products.find().sort({ _id: -1 });
    res.status(StatusCodes.CREATED).json({ status: "success", data: products });
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ error: "Products not added" });
  }
});

//GetProduct
const productGet = async (req, res) => {
  let query = { $and: [{}] };
  if (req.query.searchText) {
    query.$and.push({
      $or: [
        {
          name: {
            $regex: ".*" + req.query.searchText + ".*",
            $options: "i",
          },
        },
      ],
    });
  }
  if (req.query.searchCategory) {
    query.$and.push({
      $and: [{ category: { $regex: ".*" + req.query.searchCategory + ".*" } }],
    });
  }
  if (req.query.searchGender) {
    query.$and.push({
      $and: [{ gender: { $regex: ".*" + req.query.searchGender + ".*" } }],
    });
  }
  if (req.query.searchCondition) {
    query.$and.push({
      $and: [
        { condition: { $regex: ".*" + req.query.searchCondition + ".*" } },
      ],
    });
  }
  if (req.query.searchHeight) {
    query.$and.push({
      $and: [{ height: { $regex: ".*" + req.query.searchHeight + ".*" } }],
    });
  }
  if (req.query.searchWeight) {
    query.$and.push({
      $and: [{ weight: { $regex: ".*" + req.query.searchWeight + ".*" } }],
    });
  }
  if (req.query.searchColor) {
    query.$and.push({
      $and: [{ color: { $regex: ".*" + req.query.searchColor + ".*" } }],
    });
  }
  if (req.query.searchSmartCategory) {
    query.$and.push({
      $and: [
        { category: { $regex: ".*" + req.query.searchSmartCategory + ".*" } },
      ],
    });
  }
  if (req.query.searchSeason) {
    query.$and.push({
      $and: [{ season: { $regex: ".*" + req.query.searchSeason + ".*" } }],
    });
  }

  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * pageSize;
    const total = await Products.countDocuments();
    const pages = Math.ceil(total / pageSize);

    if (page > pages) {
      return res.status(404).json({
        status: "fail",
        message: "No page found",
      });
    }
    const products = await Products.find(query)

      .sort({ _id: -1 })
      .skip(skip)
      .limit(pageSize);
    res.status(200).json({
      status: "success",
      count: products.length,
      page,
      pages,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};

//GetProductsPortal
const productGetPortal = catchAsync(async (req, res) => {
  let query = { $and: [{}] };
  let searchedProduct = false;
  let isSuccess = true;
  if (req.query.searchText) {
    searchedProduct = true;
    isSuccess = false;
    query.$and.push({
      $or: [
        {
          name: {
            $regex: ".*" + req.query.searchText + ".*",
            $options: "i",
          },
        },
      ],
    });
  }
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.limit) || 20;
  const skip = (page - 1) * pageSize;
  const total = await Products.countDocuments();
  const pages = Math.ceil(total / pageSize);
  if (page > pages) {
    return res.status(404).json({
      status: "fail",
      message: "No Products found",
    });
  }
  const products = await Products.find(query)

    .sort({ _id: -1 })
    .skip(skip)
    .limit(pageSize);
  if (products) {
    res.status(StatusCodes.OK).json({
      message: "Products",
      count: total,
      page,
      pages,
      data: products,
      searchedProduct,
      isSuccess,
    });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Product not found" });
  }
});

//GetProductById
const productById = catchAsync(async (req, res) => {
  const product = await Products.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Product not found" });
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
      .json({ message: "Product Update Successfully", data: products });
  } else {
    res.status(StatusCodes.NOT_FOUND).res.json({ error: "Product Not Found" });
  }
});

//DeleteProduct
const productDelete = catchAsync(async (req, res) => {
  const product = await Products.findById(req.params.id);
  if (product) {
    // await cloudinary.uploader.destroy(product.cloudinaryId);
    await product.remove();
    const products = await Products.find().sort({ _id: -1 });
    res.json({ message: "Product Deleted Successfully", data: products });
  } else
    res.status(StatusCodes.NOT_FOUND).res.json({ error: "Product Not Found" });
});

//GetProductByCategory
const productCategory = catchAsync(async (req, res) => {
  const product = await Products.find({ category: req.body.category });
  res.json(product);
});

//Post/Put Product Reviews
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
    success: true,
  });
});

//GetProductReviews
const getProductReviews = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(StatusCodes.NOT_FOUND).json("Product not found");
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

// Delete Review
const deleteProductReview = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);

  if (!product) {
    res.status(StatusCodes.NOT_FOUND).json("Product not found");
  }

  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  console.log(reviews);

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

  res.status(200).json({
    success: true,
  });
});

module.exports = {
  // productPost,
  productGet,
  productById,
  productPost,
  productUpdate,
  productDelete,
  productCategory,
  productGetPortal,
  postProductReview,
  getProductReviews,
  deleteProductReview,
};
