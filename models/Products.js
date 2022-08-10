const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the name of product.']
    },
    description: {
        type: String,
        required: [true, 'Please enter description of product.']
    },
    price: {
        type: Number,
        required: [true, 'Please enter a price for the product.']
    },
    productImage: {
        type: String,
    },
    cloudinaryId: {
        type: String,
    },
    rating: {
        type: Number,
        required: true,
        maxLength: 5
    },
    gender: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    season: {
        type: String,
        required: true
    },
    usedorNew: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: [true, "Show correct product category"],
    }
})

const Product = mongoose.model('product', ProductSchema)

module.exports = Product;