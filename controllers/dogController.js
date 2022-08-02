const Dog = require("../models/Dog");
const multer = require("multer");

const Storage = multer.diskStorage({
  destination: "public/uploads",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("dogImage");

const handleErrors = (err) => {
  console.log(err);
  let error = { microchipNumber: "", vaccinationSerial: "" };
  if (err.code === 11000) {
    if (err.message.includes("microchipNumber")) {
      error.microchipNumber = "Microchip number already exists.";
    }
    if (err.message.includes("vaccinationSerial")) {
      error.vaccinationSerial = "Vaccination serial number already exists.";
    }
  }

  if (err.message.includes("dog validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }

  return error;
};

module.exports.dog_Post = async (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err.message);
    } else {
      const dog = new Dog({
        dogImage: {
          data: req.file.filename,
          contentType: "image/jpeg",
        },
        ownerName: req.body.ownerName,
        dogBreeder: req.body.dogBreeder,
        kennelName: req.body.kennelName,
        microchipNumber: req.body.microchipNumber,
        dogName: req.body.dogName,
        breed: req.body.breed,
        dogGender: req.body.dogGender,
        dob: req.body.dob,
        showName: req.body.showName,
        showCountry: req.body.showCountry,
        showPlace: req.body.showPlace,
        showJudge: req.body.showJudge,
        showClass: req.body.showClass,
        showDate: req.body.showDate,
        insurancePolicy: req.body.insurancePolicy,
        insuranceContact: req.body.insuranceContact,
        insuranceStart: req.body.insuranceStart,
        insuranceExpire: req.body.insuranceExpire,
        vaccination: req.body.vaccination,
        vaccinationSerial: req.body.vaccinationSerial,
        vaccinationExpiry: req.body.vaccinationExpiry,
      });
      dog
        .save()
        .then((result) => {
          res.send(dog._id);
          next();
        })
        .catch((err) => {
          const error = handleErrors(err);
          res.send(error);
          next();
        });
    }
  });
};

module.exports.dog_Get = (req, res) => {
  Dog.find({}, (err, data) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send(data);
    }
  });
};

module.exports.dog_Update = async (req, res) => {
  await Dog.findByIdAndUpdate(req.params.id, {$set:req.body}, { new: true })
  .then((data) => {
    console.log(data)
    if (!data) {
      return res.status(404).send();
    }
    res.send(data);
  }).catch((err) => {
    res.status(500).send(err.message);
  })
}
