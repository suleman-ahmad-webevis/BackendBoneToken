const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const DogNFT = require("../models/dogNFT/dogNft");
const DogReg = require("../models/dogNFT/dog");
const Owner = require("../models/dogNFT/owner");
const Veterinary = require("../models/dogNFT/veterinary");
const Insurance = require("../models/dogNFT/insurance");
const DogShow = require("../models/dogNFT/dogShow");
const { StatusCodes } = require("http-status-codes");

//CreateDogNFT
const createDogNft = catchAsyncErrors(async (req, res, next) => {
  // registerDog
  // registerOwner
  // registerVeterinary
  // registerInsurance
  // registerDogShow
  // Promise.all([
  //   registerDog,
  //   registerOwner,
  //   registerVeterinary,
  //   registerInsurance,
  //   registerDogShow,
  // ]);
  const dogReg = new DogReg({
    ...JSON.parse(req.body.registerDog),
  });
  dogReg.save();
  const owner = new Owner({
    ...JSON.parse(req.body.registerOwner),
  });
  owner.save();
  const veterinary = new Veterinary({
    ...JSON.parse(req.body.registerVeterinary),
  });
  veterinary.save();
  const insurance = new Insurance({
    ...JSON.parse(req.body.registerInsurance),
  });
  insurance.save();
  const dogShow = new DogShow({
    ...JSON.parse(req.body.registerDogShow),
  });
  dogShow.save();
  return res.status(StatusCodes.CREATED).json({ message: "NFt created" });
});

module.exports = { createDogNft };
