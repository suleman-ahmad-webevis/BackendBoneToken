const User = require('../models/User')
const jwt = require('jsonwebtoken')
require("dotenv").config();

const handleErrors = async (err, req) => {
    let error = { email: "", password: "", phone: 0 }

    if (err.message === 'incorrect email.') {
        error.email = 'This email is not registered.'
    }

    if (err.message === 'incorrect password.') {
        error.password = 'This password is incorrect.'
    }

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            error[properties.path] = properties.message;
        })
    }

    const userEmail = await User.findOne({ email: req.body.email })
    if (userEmail) { error.email = 'Email already registered' } else { error.email = '' }

    const userPhone = await User.findOne({ phone: req.body.phone })
    if (userPhone) { error.phone = 'Phone number already registered' } else { error.phone = '' }

    return error;
}



const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_KEY, {
        expiresIn: maxAge
    })
}

module.exports.register_Post = async (req, res) => {
    try {
        const user = await User.create({ ...req.body })
        const token = createToken(user._id)
        console.log(token)
        res.cookie('jwt', token, { httpOnly: true, expiresIn: maxAge * 1000 })
        res.status(201).json({ user: user._id })
    }
    catch (err) {
        const errors = await handleErrors(err, req)
        res.status(400).json({ errors });
    }
}

module.exports.login_Post = async (req, res) => {
    const { email, password } = await req.body;
    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.status(201).json({ user: user._id, token })
    }
    catch (err) {
        console.log(err)
        const errors = await handleErrors(err)
        res.status(400).json({ errors })
        next()
    }
}

module.exports.logout_Get = (res) => {
    res.cookie('jwt', '', { maxAge: 1 })
    res.json('Successfully logged out!')
}