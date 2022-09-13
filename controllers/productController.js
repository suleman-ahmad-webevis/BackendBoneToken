const Product = require("../models/product");
const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../utils/catchAsync");
const cloudinary = require("../utils/cloudinary");
const ProductAdmin = require("../models/productAdmin");

//AddSingleProduct
// const productPost = catchAsync(async (req, res) => {
//   const uploaded_img = await cloudinary.uploader.upload(req.file.path);
//   const product = new Product({
//     productImage: uploaded_img.secure_url,
//     cloudinaryId: uploaded_img.public_id,
//     ...req.body,
//   });
//   await product.save();
//   res.status(StatusCodes.CREATED).json(product);
// });

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
    const products = await ProductAdmin.find(query).sort({ _id: -1 })
    res.status(200).json({ status: "success", data: products });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};

//GetProductById
const productById = catchAsync(async (req, res) => {
  const product = await ProductAdmin.findById(req.params.id);
  if (product) {
    res.json(product)
  }
  else {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Product not found" })
  };
});

//UpdateProduct
const productUpdate = catchAsync(async (req, res) => {
  let product = await ProductAdmin.findById(req.params.id)
  if (product) {
    product = await ProductAdmin.findByIdAndUpdate(req.params.id, { ...req.body }, {
      new: true,
    });
    res
      .status(StatusCodes.OK)
      .json({ message: "Product Update Successfully", product });
  } else
    res.status(StatusCodes.NOT_FOUND).res.json({ error: "Product Not Found" });
});

//DeleteProduct
const productDelete = catchAsync(async (req, res) => {
  const product = await ProductAdmin.findById(req.params.id);
  if (product) {
    await product.remove();
    const products = await ProductAdmin.find().sort({ _id: -1 })
    res.json({ message: "Product Deleted Successfully", data: products });
  } else
    res.status(StatusCodes.NOT_FOUND).res.json({ error: "Product Not Found" });
});

//GetProductByCategory
const productCategory = catchAsync(async (req, res) => {
  const product = await ProductAdmin.find({ category: req.body.category });
  res.json(product);
});

module.exports = {
  // productPost,
  productGet,
  productById,
  productUpdate,
  productDelete,
  productCategory
};