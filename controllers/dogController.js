const Dog = require("../models/dog");
const { StatusCodes } = require("http-status-codes");
const cloudinary = require("../utils/cloudinary");
//ErrorHandlers
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//AddDog
const dogPost = catchAsyncErrors(async (req, res, next) => {
  const uploaded_img = await cloudinary.uploader.upload(req.body.dogImage);
  const dog = new Dog({
    ...req.body,
    dogImage: uploaded_img.secure_url,
    cloudinaryId: uploaded_img.public_id,
  });
  await dog.save();
  if (dog) {
    return res
      .status(StatusCodes.CREATED)
      .json({ dog, message: "Dog added successfully." });
  } else
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Dog not created" });
});

//GetDog
const dogGet = catchAsyncErrors(async (req, res, next) => {
  const dog = await Dog.find({ userId: req.userId });
  if (dog) {
    res.json(dog);
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ message: "Dog not found" });
  }
});

//GetDogById
const dogById = catchAsyncErrors(async (req, res, next) => {
  const dog = await Dog.findById(req.params.id);
  if (dog) res.json(dog);
  else res.status(StatusCodes.NOT_FOUND).json({ message: "Dog not found" });
});

//UpdateDog
const dogUpdate = catchAsyncErrors(async (req, res, next) => {
  let dog = await Dog.findById(req.params.id);
  if (dog) {
    if (dog.dogImage !== req.body.dogImage) {
      await cloudinary.uploader.destroy(dog.cloudinaryId);
      const updated_img = await cloudinary.uploader.upload(req.body.dogImage);
      dog = await Dog.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
          dogImage: updated_img.secure_url,
          cloudinaryId: updated_img.public_id,
        },
        { new: true }
      );
    } else {
      dog = await Dog.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );
    }
    res.status(StatusCodes.ACCEPTED).json(dog, { message: "Dog updated" });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ message: "Dog not found" });
  }
});

//DeleteDog
const dogDelete = catchAsyncErrors(async (req, res, next) => {
  const dog = await Dog.findById(req.params.id);
  if (dog) {
    await cloudinary.uploader.destroy(dog.cloudinaryId);
    await dog.remove();
    res.json(dog, { message: "Dog deleted" });
  } else res.status(StatusCodes.NOT_FOUND).json({ message: "Dog not found" });
});

module.exports = {
  dogPost,
  dogById,
  dogGet,
  dogUpdate,
  dogDelete,
};
