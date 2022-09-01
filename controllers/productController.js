const Product = require("../models/product");
const cloudinary = require("../utils/cloudinary");
const path = require("path");

const handleErrors = (err) => {
  const error = {};

  if (err.message.includes("product validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }
  return error;
};

const productPost = async (req, res, next) => {
  try {
    const uploaded_img = await cloudinary.uploader.upload(req.file.path);
    const product = new Product({
      productImage: uploaded_img.secure_url,
      cloudinaryId: uploaded_img.public_id,
      ...req.body,
    });
    await product.save();
    res.json(product);
  } catch (err) {
    const error = handleErrors(err);
    res.send(error);
    next();
  }
};

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
    const pageSize = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * pageSize;
    const total = await Product.countDocuments();

    const pages = Math.ceil(total / pageSize);

    if (page > pages) {
      return res.status(404).json({
        status: "fail",
        message: "No page found",
      });
    }

    const result = await Product.find(query).sort({ _id: -1 }).skip(skip).limit(pageSize);

    res.status(200).json({
      status: "success",
      count: result.length,
      page,
      pages,
      data: result,
    });
  }
  catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};

const productUpdate = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    await cloudinary.uploader.destroy(product.cloudinaryId);
    const updated_img = await cloudinary.uploader.upload(req.file.path);
    const data = {
      name: req.body.name || product.name,
      price: req.body.price || product.price,
      productImage: updated_img.secure_url || product.productImage,
      cloudinaryId: updated_img.public_id || product.cloudinaryId,
      description: req.body.description || product.description,
      rating: req.body.rating || product.rating,
      category: req.body.category || product.category,
      usedorNew: req.body.usedorNew || product.usedorNew,
      gender: req.body.gender || product.gender,
      height: req.body.height || product.height,
      weight: req.body.weight || product.weight,
      color: req.body.color || product.color,
      season: req.body.season || product.season,
    };
    product = await Product.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.json(product);
  } catch (err) {
    const error = handleErrors(err);
    res.send(error);
  }
};

const productDelete = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    await cloudinary.uploader.destroy(product.cloudinaryId);
    await product.remove();
    res.json(product);
  } catch (err) {
    const error = handleErrors(err);
    res.send(error);
  }
};

const productCategory = async (req, res) => {
  try {
    const product = await Product.find({ category: req.body.category });
    res.send(product);
  } catch (err) {
    const error = handleErrors(err);
    res.send(error);
  }
};

module.exports = {
  productPost,
  productGet,
  productUpdate,
  productDelete,
  productCategory,
};
