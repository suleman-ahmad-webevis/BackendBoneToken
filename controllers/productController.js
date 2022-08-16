const Product = require("../models/Products");
const cloudinary = require('../utils/cloudinary')
const path = require('path')

const handleErrors = (err) => {
    const error = {};

    if (err.message.includes("product validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            error[properties.path] = properties.message;
        });
    }
    return error;
};

module.exports.product_Post = async (req, res, next) => {
    try {
        const uploaded_img = await cloudinary.uploader.upload(req.file.path)
        const product = new Product({
            productImage: uploaded_img.secure_url,
            cloudinaryId: uploaded_img.public_id,
            ...req.body
        })
        await product.save();
        res.json(product)
    }
    catch (err) {
        const error = handleErrors(err);
        res.send(error);
        next();
    }
}


module.exports.product_Get = async (req, res) => {
    let { searchText } = req.query;
    console.log("The searchText", searchText);
    let query = {
        //$and performs a logical AND operation on an array of one or more expressions (<expression1>, <expression2>, and so on) and selects the documents that satisfy all the expressions.
        $and: [{}],
    };
    if (searchText) {
        query.$and.push({
            $or: [
                //The RegExp object is used for matching text with a pattern.
                { category: { $regex: ".*" + searchText + ".*", $options: "i" } },
                { name: { $regex: ".*" + searchText + ".*", $options: "i" } },
            ],
        });
    }
    try {
        const data = await Product.find(query);
        res.json(data);
    } catch (err) {
        const error = handleErrors(err);
        res.send(error);
    }
};

module.exports.product_Update = async (req, res) => {
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
            season: req.body.season || product.season
        }
        product = await Product.findByIdAndUpdate(req.params.id, data, { new: true });
        res.json(product)
    }
    catch (err) {
        const error = handleErrors(err)
        res.send(error)
    }
}

module.exports.product_Delete = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        await cloudinary.uploader.destroy(product.cloudinaryId);
        await product.remove()
        res.json(product)
    }
    catch (err) {
        const error = handleErrors(err)
        res.send(error)
    }
}

module.exports.product_Category = async (req, res) => {
    try {
        const product = await Product.find({ category: req.body.category });
        res.send(product)
    }
    catch (err) {
        const error = handleErrors(err)
        res.send(error)
    }
}