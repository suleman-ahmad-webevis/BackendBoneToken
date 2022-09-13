const catchAsync = require("../utils/catchAsync");
const ProductAdmin = require('../models/productAdmin');
const { StatusCodes } = require("http-status-codes");

const productsPostAdmin = catchAsync(async (req, res) => {
    let product;
    const csvArray = req.body;
    if (csvArray) {
        csvArray.forEach(async (element) => {
            product = await new ProductAdmin({ ...element });
            await product.save();
        });
        const products = await ProductAdmin.find().sort({ _id: -1 })
        res.status(StatusCodes.CREATED).json({ status: "success", data: products });
    } else {
        res.status(StatusCodes.BAD_REQUEST).json({ error: "Products not added" })
    }
});

module.exports = {
    productsPostAdmin
};
