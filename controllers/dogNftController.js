const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const DogNft = require("../models/dogNFT/dogNft");
const DogReg = require("../models/dogNFT/dogReg");
const DogOwner = require("../models/dogNFT/dogOwner");
const DogVeterinary = require("../models/dogNFT/dogVeterinary");
const DogInsurance = require("../models/dogNFT/dogInsurance");
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

  if (parsedRegisterDog?.dogPic) {
    uploadedDogPic = await cloudinary.uploader.upload(
      parsedRegisterDog?.dogPic,
      {
        folder: "DogNFT",
      }
    );
  }
  if (parsedRegisterDog?.dogMotherPic) {
    uploadedDogMother = await cloudinary.uploader.upload(
      parsedRegisterDog?.dogMotherPic,
      {
        folder: "DogNFT",
      }
    );
  }
  if (parsedRegisterDog?.dogFatherPic) {
    uploadedDogFatherPic = await cloudinary.uploader.upload(
      parsedRegisterDog?.dogFatherPic,
      {
        folder: "DogNFT",
      }
    );
  }
  if (parsedRegisterOwner?.ownerPic) {
    uploadedOwnerPic = await cloudinary.uploader.upload(
      parsedRegisterOwner?.ownerPic,
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
  const owner = new DogOwner({
    ...parsedRegisterOwner,
    ownerPic: uploadedOwnerPic?.secure_url ?? "",
    ownerPicCloudinaryId: uploadedOwnerPic?.public_id ?? "",
  });
  owner.save();
  const veterinary = new DogVeterinary({
    vaccines: parsedRegisterVeterinary ? [...parsedRegisterVeterinary] : [],
  });
  veterinary.save();
  const insurance = new DogInsurance({
    insurances: parsedRegisterInsurance ? [...parsedRegisterInsurance] : [],
    // insurances: [...parsedRegisterInsurance],
  });
  insurance.save();
  const dogShow = new DogShow({
    shows: parsedRegisterDogShow ? [...parsedRegisterDogShow] : [],
    // shows: [...parsedRegisterDogShow],
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
  nftId = dogNft._id;
  nftId = nftId.toString();
  return res
    .status(StatusCodes.CREATED)
    .json({ message: "DogNFT created", nftId });
});

const getAllDogNfts = catchAsyncErrors(async (req, res, next) => {
  const allDogNfts = await DogNft.find({}).populate(
    "dog owner veterinary insurance dogShow"
  );
  if (allDogNfts.length) {
    return res.status(StatusCodes.OK).json({ data: allDogNfts });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ message: "DogNFT not found" });
  }
});

const getDogNft = catchAsyncErrors(async (req, res, next) => {
  const dogNft = await DogNft.findById(req.params.id).populate(
    "dog owner veterinary insurance dogShow"
  );
  if (dogNft) {
    res.json(dogNft);
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ message: "DogNFT not found" });
  }
});

module.exports = { createDogNft, getAllDogNfts, getDogNft };
