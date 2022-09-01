const Dog = require("../models/Dog");
const cloudinary = require('../utils/cloudinary')

const handleErrors = async (err) => {
  let error = { microchipNumber: "", vaccinationSerial: "" };

  if (err.message.includes("dog validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }

  const dogMicrochip = await Dog.findOne({ microchipNumber: req.body.microchipNumber })
  if (dogMicrochip) { error.microchipNumber = 'Microchip number already exists' } else { error.microchipNumber = '' }

  const dogSerial = await Dog.findOne({ phone: req.body.vaccinationSerial })
  if (dogSerial) { error.vaccinationSerial = 'Vaccination serial number already exists' } else { error.vaccinationSerial = '' }

  return error;
};

const dogPost = async (req, res, next) => {
  try {
    const uploaded_img = await cloudinary.uploader.upload(req.body.dogImage)
    const dog = new Dog({
      ...req.body,
      dogImage: uploaded_img.secure_url,
      cloudinaryId: uploaded_img.public_id
    });
    console.log(dog)
    dog.save()
    res.status(200).send(dog)
  }
  catch (err) {
    console.log(err)
    res.send(err);
    next();
  }
}

const dogById = async (req, res) => {
  try {
    const data = await Dog.findById(req.params.id)
    res.json(data)
  }
  catch (err) {
    res.send(err)
  }
}

const dogGet = async (req, res) => {
  try {
    const data = await Dog.find()
    res.json(data)
  }
  catch (err) {
    const error = handleErrors(err)
    res.send(error)
  }
};

const dogUpdate = async (req, res) => {
  try {
    const dog = await Dog.findById(req.params.id);
    if (dog.dogImage !== req.body.dogImage) {
      await cloudinary.uploader.destroy(dog.cloudinaryId);
      const updated_img = await cloudinary.uploader.upload(req.body.dogImage);
      await Dog.findByIdAndUpdate(req.params.id, {
        ...req.body,
        dogImage: updated_img.secure_url || dog.dogImage,
        cloudinaryId: updated_img.public_id || dog.cloudinaryId,
      }, { new: true })
    }
    else {
      await Dog.findByIdAndUpdate(req.params.id, {
        ...req.body
      }, { new: true })
    }
  }
  catch (err) {
    res.json(err)
  }
}

const dogDelete = async (req, res) => {
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


module.exports = 
{
  dogPost,
  dogById,
  dogGet,
  dogUpdate,
  dogDelete
}