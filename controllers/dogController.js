const Dog = require("../models/dog");
const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../utils/catchAsync");
const cloudinary = require("../utils/cloudinary");

//AddDog
const dogPost = catchAsync(async (req, res) => {
  const uploaded_img = await cloudinary.uploader.upload(req.body.dogImage);
  const dog = new Dog({
    ...req.body,
    dogImage: uploaded_img.secure_url,
    cloudinaryId: uploaded_img.public_id,
  });
  await dog.save();
  res.status(StatusCodes.CREATED).json(dog);
});

//GetDog
const dogGet = catchAsync(async (res) => {
  const dog = await Dog.find();
  if (dog) {
    res.json(dog)
  }
  else res.status(StatusCodes.NOT_FOUND).json({ error: "Dog not found" });
});

//GetDogById
const dogById = catchAsync(async (req, res) => {
  const dog = await Dog.findById(req.params.id);
  if (dog) res.json(dog);
  else res.status(StatusCodes.NOT_FOUND).json({ error: "Dog not found" });
});

//UpdateDog
const dogUpdate = catchAsync(async (req, res) => {
  const dog = await Dog.findById(req.params.id);
  if (dog) {
    if (dog.dogImage !== req.body.dogImage) {
      console.log("In if");
      await cloudinary.uploader.destroy(dog.cloudinaryId);
      const updated_img = await cloudinary.uploader.upload(req.body.dogImage);
      await Dog.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
          dogImage: updated_img.secure_url || dog.dogImage,
          cloudinaryId: updated_img.public_id || dog.cloudinaryId,
        },
        { new: true }
      );
    } else {
      await Dog.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );
    }
    res.status(StatusCodes.ACCEPTED).json(dog);
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ error: "Dog not found" });
  }
});

//DeleteDog
const dogDelete = catchAsync(async (req, res) => {
  const dog = await Dog.findById(req.params.id);
  if (dog) {
    await cloudinary.uploader.destroy(dog.cloudinaryId);
    await dog.remove();
    res.json(dog);
  } else res.status(StatusCodes.NOT_FOUND).json({ error: "Dog not found" });
});

module.exports = {
  dogPost,
  dogById,
  dogGet,
  dogUpdate,
  dogDelete,
};
