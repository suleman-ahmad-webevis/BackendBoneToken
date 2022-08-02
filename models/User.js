const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter a first name.'],
        lowercase: true,
    },
    lastName: {
        type: String,
        required: [true, 'Please enter a last name.'],
        lowercase: true,
    },
    email: {
        type: String,
        required: [true, 'Please enter an email.'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email.']
    },
    phone: {
        type: Number,
        required: [true, 'Please enter your phone number.'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter a password.'],
        minlength: [6, 'Password must be of min 6 letters.']
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please confirm your passwowrd.'],
        minlength: [6, 'Password must be of min 6 letters.']
    },
    street: {
        type: String,
        required: [true, 'Please enter your street address.'],
        lowercase: true,
    },
    streetNumber: {
        type: Number,
        required: [true, 'Please enter your street number.']
    },
    city: {
        type: String,
        required: [true, 'Please enter your city.'],
        lowercase: true,
    },
    state: {
        type: String,
        required: [true, 'Please enter your state.'],
        lowercase: true,
    },
    postCode: {
        type: Number,
        required: [true, 'Please enter your postal code.']
    },
    country: {
        type: String,
        required: [true, 'Please enter your country.']
    }
})

UserSchema.pre('save', async function (next) {
    try{
        const salt = await bcrypt.genSalt();
        this.password = bcrypt.hashSync(this.password, salt)
        this.confirmPassword = bcrypt.hashSync(this.confirmPassword, salt)
        next()
    }
    catch(err){
        res.send(err.message)
    }
})

UserSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email })
    if (user){
        const auth = await bcrypt.compare(password, user.password)
        if (auth){
            return user;
        }
        throw Error('incorrect password.')
    }
    throw Error('incorrect email.')
}

const User = mongoose.model('user', UserSchema)

module.exports = User;