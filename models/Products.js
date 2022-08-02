const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the name of product.'],
        lowercase: true
    },
    description: {
        type: String,
        required: [true, 'Please enter description of product.']
    },
    productImage: {
        data: Buffer,
        contentType: String
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