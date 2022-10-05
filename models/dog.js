const mongoose = require("mongoose");
const User = require("./user");

const dogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  dogImage: {
    type: String,
  },
  cloudinaryId: {
    type: String,
  },
  ownerName: {
    type: String,
    required: [true, "Please enter the name of the dog owner."],
    lowercase: true,
  },
  dogBreeder: {
    type: String,
    required: true,
  },
  kennelName: {
    type: String,
    lowercase: true,
    required: [true, "Please enter Breeder's kennel name."],
  },
  microchipNumber: {
    type: String,
    unique: true,
    required: [true, "Please enter Microchip number."],
  },
  dogName: {
    type: String,
    required: [true, "Please enter dog's name."],
    lowercase: true,
  },
  breed: {
    type: String,
    required: [true, "Please enter the dog's breed."],
    lowercase: true,
  },
  dogGender: {
    type: String,
    required: true,
  },
  dob: {
    dobDay: {
      type: Number,
      required: true,
    },
    dobMonth: {
      type: Number,
      required: true,
    },
    dobYear: {
      type: Number,
      required: true,
    },
  },
  showName: {
    type: String,
    required: [true, "Please enter show name."],
    lowercase: true,
  },
  showCountry: {
    type: String,
    required: [true, "Please enter show country."],
    lowercase: true,
  },
  showPlace: {
    type: String,
    required: [true, "Please enter show place."],
    lowercase: true,
  },
  showJudge: {
    type: String,
    lowercase: true,
    required: [true, "Please enter show judge's name."],
  },
  showClass: {
    type: String,
    lowercase: true,
    required: [true, "Please enter class in the show."],
  },
  showDate: {
    showDay: {
      type: Number,
      required: true,
    },
    showMonth: {
      type: Number,
      required: true,
    },
    showYear: {
      type: Number,
      required: true,
    },
  },
  insurancePolicy: {
    type: String,
    lowercase: true,
    required: [true, "Please enter policy of your insurance."],
  },
  insuranceContact: {
    type: Number,
    required: [true, "Please enter contact number of insurance agency."],
  },
  insuranceStart: {
    insurasDay: {
      type: Number,
      required: true,
    },
    insurasMonth: {
      type: Number,
      required: true,
    },
    insurasYear: {
      type: Number,
      required: true,
    },
  },
  insuranceExpire: {
    insuraxDay: {
      type: Number,
      required: true,
    },
    insuraxMonth: {
      type: Number,
      required: true,
    },
    insuraxYear: {
      type: Number,
      required: true,
    },
  },
  vaccination: {
    type: String,
    required: true,
  },
  vaccinationSerial: {
    type: String,
    required: [true, "Please enter the vaccination serial number."],
    lowercase: true,
    unique: true,
  },
  vaccinationExpire: {
    vaxpireDay: {
      type: Number,
      required: true,
    },
    vaxpireMonth: {
      type: Number,
      required: true,
    },
    vaxpireYear: {
      type: Number,
      required: true,
    },
  },
});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
