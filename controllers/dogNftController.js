const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const DogNft = require("../models/dogNFT/dogNft");
const DogReg = require("../models/dogNFT/dogReg");
const DogOwner = require("../models/dogNFT/dogOwner");
const DogVeterinary = require("../models/dogNFT/dogVeterinary");
const DogInsurance = require("../models/dogNFT/dogInsurance");
const DogShow = require("../models/dogNFT/dogShow");
const { StatusCodes } = require("http-status-codes");
const cloudinary = require("../utils/cloudinary");

const createDogNft = catchAsyncErrors(async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
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
    // StoringToDatabase
    const dogReg = new DogReg({
      ...parsedRegisterDog,
      dogPic: uploadedDogPic?.secure_url ?? "",
      dogPicCloudinaryId: uploadedDogPic?.public_id ?? "",
      dogMotherPic: uploadedDogMother?.secure_url ?? "",
      dogMotherPicCloudinaryId: uploadedDogMother?.public_id ?? "",
      dogFatherPic: uploadedDogFatherPic?.secure_url ?? "",
      dogFatherPicCloudinaryId: uploadedDogFatherPic?.public_id ?? "",
    });
    const ownerReg = new DogOwner({
      ...parsedRegisterOwner,
      ownerPic: uploadedOwnerPic?.secure_url ?? "",
      ownerPicCloudinaryId: uploadedOwnerPic?.public_id ?? "",
    });
    const veterinaryReg = new DogVeterinary({
      vaccines: parsedRegisterVeterinary ? [...parsedRegisterVeterinary] : [],
    });
    const insuranceReg = new DogInsurance({
      insurances: parsedRegisterInsurance ? [...parsedRegisterInsurance] : [],
    });
    const dogShowReg = new DogShow({
      shows: parsedRegisterDogShow ? [...parsedRegisterDogShow] : [],
    });

    const [
      savedDogReg,
      savedOwner,
      savedVeterinary,
      savedInsurance,
      savedDogShow,
    ] = await Promise.all([
      dogReg.save({ session }),
      ownerReg.save({ session }),
      veterinaryReg.save({ session }),
      insuranceReg.save({ session }),
      dogShowReg.save({ session }),
    ]);
    const dogNft = new DogNft({
      dog: savedDogReg._id,
      owner: savedOwner._id,
      veterinary: savedVeterinary._id,
      insurance: savedInsurance._id,
      dogShow: savedDogShow._id,
    });
    const savedDogNft = await dogNft.save({ session });
    await session.commitTransaction();
    session.endSession();
    const nftId = savedDogNft._id.toString();
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "DogNFT created", nftId });
  } catch (e) {
    await session.abortTransaction();
    session.endSession();
  }
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
