const User = require('../models/User')
const jwt = require('jsonwebtoken')
require("dotenv").config();

const handleErrors = (err) => {
    let error = { email: "", password: "", phone: ""}

    if (err.message === 'incorrect email.') {
        error.email = 'This email is not registered.'
    }

    if (err.message === 'incorrect password.') {
        error.password = 'This password is incorrect.'
    }

    if (err.code === 11000) {
        if (error.email) {
            error.email = 'Email already exists';
        }
        if (error.phone) {
            error.phone = 'Phone number already exists.';
        }
        return error;
    }

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            error[properties.path] = properties.message;
        })
    }

    return error;
}

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_KEY, {
        expiresIn: maxAge
    })
}

module.exports.login_Get = (req, res) => {
    res.json('Hello from the login page.')
}

module.exports.register_Get = (req, res) => {
    res.json('Hello from the register page.')
}

module.exports.register_Post = async (req, res) => {
    const { firstName, lastName, email, phone, password, confirmPassword, street, streetNumber, city, state, postCode, country } = req.body;
    try {
        const user = await User.create({ firstName, lastName, email, phone, password, confirmPassword, street, streetNumber, city, state, postCode, country })
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, expiresIn: maxAge * 1000 })
        res.status(201).json({user: user._id})
    }
    catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({errors})
    }
}

module.exports.login_Post = async (req, res) => {
    const {email, password} = await req.body;
    try{
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.cookie('jwt', token, {httpOnly: true, expiresIn: maxAge * 1000})
        res.status(201).json({user: user._id})
    }
    catch(err) {
        const errors = handleErrors(err)
        res.status(400).json({errors})
    }
}

module.exports.logout_Get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 })
    res.json('Successfully logged out!')
}