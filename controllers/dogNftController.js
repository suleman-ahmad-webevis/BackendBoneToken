const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const DogNFT = require("../models/dogNFT/dogNft");
const Owner = require("../models/dogNFT/owner");
const Veterinary = require("../models/dogNFT/veterinary");
const Insurance = require("../models/dogNFT/insurance");
const DogShow = require("../models/dogNFT/dogShow");

//CreateDogNFT
const createDogNft = catchAsyncErrors(async (req, res, next) => {
  // registerDog
  // registerOwner
  // registerVeterinary
  // registerInsurance
  // registerDogShow
  const newCategory = new DogNFT({
    ...JSON.parse(req.body.registerDog),
  });
  await newCategory.save();
  return res.status(StatusCodes.CREATED).json({ message: "Category created" });
});

module.exports = { createDogNft };
