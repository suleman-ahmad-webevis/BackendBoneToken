const mongoose = require('mongoose')

const DogSchema = new mongoose.Schema({
    dogImage: {
        data: Buffer,
        contentType: String
    },
    ownerName: {
        type: String,
        required: [true, 'Please enter the name of the dog owner.'],
        lowercase: true,
    },
    dogBreeder: {
        type: String,
        lowercase: true,    
        required: [true, 'Please enter an email.']
    },
    kennelName: {
        type: String,
        lowercase: true,
        required: [true, "Please enter Breeder's kennel name."],
    },
    microchipNumber: {
        type: String,
        unique: true,
        required: [true, 'Please enter Microchip number.']
    },
    dogName: {
        type: String,
        required: [true, "Please enter dog's name."],
        lowercase: true
    },
    breed: {
        type: String,
        required: [true, "Please enter the dog's breed."],
        lowercase: true
    },
    dogGender: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    showName: {
        type: String,
        required: [true, 'Please enter show name.'],
        lowercase: true
    },
    showCountry: {
        type: String,
        required: [true, 'Please enter show country.'],
        lowercase: true,
    },
    showPlace: {
        type: String,
        required: [true, 'Please enter show place.'],
        lowercase: true,
    },
    showJudge: {
        type: String,
        lowercase: true,
        required: [true, "Please enter show judge's name."]
    },
    showClass: {
        type: String,
        lowercase: true,
        required: [true, 'Please enter class in the show.']
    },
    showDate: {
        type: String,
        lowercase: true,
        required: true
    },
    insurancePolicy: {
        type: String,
        lowercase: true,
        required: [true, 'Please enter policy of your insurance.']
    },
    insuranceContact: {
        type: Number,
        required: [true, 'Please enter contact number of insurance agency.']
    },
    insuranceStart: {
        type: String,
        required: true
    },
    insuranceExpire: { 
        type: String,
        required: true
    },
    vaccination: {
        type: String,
        required: true,
        lowercase: true
    },
    vaccinationSerial: {
        type: String,
        required: [true, 'Please enter the vaccination serial number.'],
        lowercase: true,
        unique: true
    },
    vaccinationExpiry: {
        type: String,
        required: true
    }
})

const Dog = mongoose.model('dog', DogSchema)

module.exports = Dog;