const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const DogNft = require("../models/dogNFT/dogNft");
const DogReg = require("../models/dogNFT/dogReg");
const Owner = require("../models/dogNFT/owner");
const Veterinary = require("../models/dogNFT/veterinary");
const Insurance = require("../models/dogNFT/insurance");
const DogShow = require("../models/dogNFT/dogShow");
const { StatusCodes } = require("http-status-codes");
const cloudinary = require("../utils/cloudinary");

//CreateDogNft
const createDogNft = catchAsyncErrors(async (req, res, next) => {
  //ParsedAllReqBody
  const parsedRegisterDog = JSON.parse(req.body.registerDog);
  const parsedRegisterOwner = JSON.parse(req.body.registerOwner);
  const parsedRegisterVeterinary = JSON.parse(req.body.registerVeterinary);
  const parsedRegisterInsurance = JSON.parse(req.body.registerInsurance);
  const parsedRegisterDogShow = JSON.parse(req.body.registerDogShow);
  //CloudinaryUpload
  let uploadedDogPic;
  let uploadedDogMother;
  let uploadedDogFatherPic;
  let uploadedOwnerPic;

  if (parsedRegisterDog.dogPic) {
    uploadedDogPic = await cloudinary.uploader.upload(
      parsedRegisterDog.dogPic,
      {
        folder: "DogNFT",
      }
    );
  }
  if (parsedRegisterDog.dogMotherPic) {
    uploadedDogMother = await cloudinary.uploader.upload(
      parsedRegisterDog.dogMotherPic,
      {
        folder: "DogNFT",
      }
    );
  }
  if (parsedRegisterDog.dogFatherPic) {
    uploadedDogFatherPic = await cloudinary.uploader.upload(
      parsedRegisterDog.dogFatherPic,
      {
        folder: "DogNFT",
      }
    );
  }
  if (parsedRegisterOwner.ownerPic) {
    uploadedOwnerPic = await cloudinary.uploader.upload(
      parsedRegisterOwner.ownerPic,
      {
        folder: "DogNFT",
      }
    );
  }

  //StoringToDatabase
  const dogReg = new DogReg({
    ...parsedRegisterDog,
    dogPic: uploadedDogPic?.secure_url ?? "",
    dogPicCloudinaryId: uploadedDogPic?.public_id ?? "",
    dogMotherPic: uploadedDogMother?.secure_url ?? "",
    dogMotherPicCloudinaryId: uploadedDogMother?.public_id ?? "",
    dogFatherPic: uploadedDogFatherPic?.secure_url ?? "",
    dogFatherPicCloudinaryId: uploadedDogFatherPic?.public_id ?? "",
  });
  dogReg.save();
  const owner = new Owner({
    ...parsedRegisterOwner,
    ownerPic: uploadedOwnerPic?.secure_url ?? "",
    ownerPicCloudinaryId: uploadedOwnerPic?.public_id ?? "",
  });
  owner.save();
  const veterinary = new Veterinary({
    ...parsedRegisterVeterinary,
  });
  veterinary.save();
  const insurance = new Insurance({
    ...parsedRegisterInsurance,
  });
  insurance.save();
  const dogShow = new DogShow({
    ...parsedRegisterDogShow,
  });
  dogShow.save();
  const dogNft = new DogNft({
    dog: dogReg._id,
    owner: owner._id,
    veterinary: veterinary._id,
    insurance: insurance._id,
    dogShow: dogShow._id,
  });
  dogNft.save();
  return res.status(StatusCodes.CREATED).json({ message: "DogNFT created" });
});

const getAllDogNfts = catchAsyncErrors(async (req, res, next) => {
  const allDogNfts = await DogNft.find({}).populate(
    "dog owner veterinary insurance dogShow"
  );
  if (allDogNfts.length) {
    return res.status(StatusCodes.OK).json({ data: allDogNfts });
  }
});

module.exports = { createDogNft, getAllDogNfts };
