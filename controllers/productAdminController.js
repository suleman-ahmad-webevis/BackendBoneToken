const catchAsync = require("../utils/catchAsync");
const ProductAdmin = require('../models/productAdmin')

const productsPostAdmin = catchAsync(async (req, res) => {
    let product;
    const csvArray = req.body;
    csvArray.forEach(async (element) => {
        product = await new ProductAdmin({ ...element });
        await product.save();
    });
    res.status(StatusCodes.CREATED).json('Sucess!');
});

module.exports = {
    productsPostAdmin
};
