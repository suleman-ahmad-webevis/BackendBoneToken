const Dog = require("../models/Dog");
const cloudinary = require('../utils/cloudinary')

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
  try {
    const uploaded_img = await cloudinary.uploader.upload(req.file.path)
    const dog = new Dog({
      ...req.body,
      dogImage: uploaded_img.secure_url,
      cloudinaryId: uploaded_img.public_id
    });
    dog.save()
    res.status(200).send(dog._id)
  }
  catch (err) {
    const error = handleErrors(err);
    res.send(error);
    next();
  }
}

module.exports.dog_Get = async (req, res) => {
  try {
    const data = await Dog.find()
    res.json(data)
  }
  catch (err) {
    const error = handleErrors(err)
    res.send(error)
  }
};

module.exports.dog_Update = async (req, res) => {
  try {
    const dog = await Dog.findById(req.params.id);
    await cloudinary.uploader.destroy(dog.cloudinaryId);
    const updated_img = await cloudinary.uploader.upload(req.file.path);
    await Dog.findByIdAndUpdate(req.params.id, { $set: req.body, dogImage: updated_img.secure_url || dog.dogImage,
      cloudinaryId: updated_img.public_id || dog.cloudinaryId,}, { new: true })
  }
  catch (err) {
    const error = handleErrors(err)
    res.send(error)
  }
}

module.exports.dog_Delete = async (req, res) => {
  try {
      const dog = await Dog.findById(req.params.id);
      await cloudinary.uploader.destroy(dog.cloudinaryId);
      await dog.remove()
      res.json(product)
  }
  catch (err) {
      const error = handleErrors(err)
      res.send(error)
  }
}