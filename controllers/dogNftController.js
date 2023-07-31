const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const DogNft = require("../models/dogNFT/dogNft");
const DogReg = require("../models/dogNFT/dogReg");
const DogOwner = require("../models/dogNFT/dogOwner");
const DogVeterinary = require("../models/dogNFT/dogVeterinary");
const DogInsurance = require("../models/dogNFT/dogInsurance");
const DogShow = require("../models/dogNFT/dogShow");
const { StatusCodes } = require("http-status-codes");
const cloudinary = require("../utils/cloudinary");
const { mongoose } = require("mongoose");

// const createDogNft = catchAsyncErrors(async (req, res, next) => {
//   const session = await mongoose.startSession();
//   session.startTransaction();
//   try {
//     const parsedRegisterDog = JSON.parse(req.body.registerDog);
//     const parsedRegisterOwner = JSON.parse(req.body.registerOwner);
//     const parsedRegisterVeterinary = JSON.parse(req.body.registerVeterinary);
//     const parsedRegisterInsurance = JSON.parse(req.body.registerInsurance);
//     const parsedRegisterDogShow = JSON.parse(req.body.registerDogShow);
//     //CloudinaryUpload
//     let uploadedDogPic;
//     let uploadedDogMother;
//     let uploadedDogFatherPic;
//     let uploadedOwnerPic;
//     if (parsedRegisterDog?.dogPic) {
//       uploadedDogPic = await cloudinary.uploader.upload(
//         parsedRegisterDog?.dogPic,
//         {
//           folder: "DogNFT",
//         }
//       );
//     }
//     if (parsedRegisterDog?.dogMotherPic) {
//       uploadedDogMother = await cloudinary.uploader.upload(
//         parsedRegisterDog?.dogMotherPic,
//         {
//           folder: "DogNFT",
//         }
//       );
//     }
//     if (parsedRegisterDog?.dogFatherPic) {
//       uploadedDogFatherPic = await cloudinary.uploader.upload(
//         parsedRegisterDog?.dogFatherPic,
//         {
//           folder: "DogNFT",
//         }
//       );
//     }
//     if (parsedRegisterOwner?.ownerPic) {
//       uploadedOwnerPic = await cloudinary.uploader.upload(
//         parsedRegisterOwner?.ownerPic,
//         {
//           folder: "DogNFT",
//         }
//       );
//     }
//     // StoringToDatabase
//     const dogReg = new DogReg({
//       ...parsedRegisterDog,
//       dogPic: uploadedDogPic?.secure_url ?? "",
//       dogPicCloudinaryId: uploadedDogPic?.public_id ?? "",
//       dogMotherPic: uploadedDogMother?.secure_url ?? "",
//       dogMotherPicCloudinaryId: uploadedDogMother?.public_id ?? "",
//       dogFatherPic: uploadedDogFatherPic?.secure_url ?? "",
//       dogFatherPicCloudinaryId: uploadedDogFatherPic?.public_id ?? "",
//     });
//     const ownerReg = new DogOwner({
//       ...parsedRegisterOwner,
//       ownerPic: uploadedOwnerPic?.secure_url ?? "",
//       ownerPicCloudinaryId: uploadedOwnerPic?.public_id ?? "",
//     });
//     const veterinaryReg = new DogVeterinary({
//       vaccines: parsedRegisterVeterinary ? [...parsedRegisterVeterinary] : [],
//     });
//     const insuranceReg = new DogInsurance({
//       ...parsedRegisterInsurance,
//     });
//     const dogShowReg = new DogShow({
//       shows: parsedRegisterDogShow ? [...parsedRegisterDogShow] : [],
//     });
//     const [
//       savedDogReg,
//       savedOwner,
//       savedVeterinary,
//       savedInsurance,
//       savedDogShow,
//     ] = await Promise.all([
//       dogReg.save({ session }),
//       ownerReg.save({ session }),
//       veterinaryReg.save({ session }),
//       insuranceReg.save({ session }),
//       dogShowReg.save({ session }),
//     ]);
//     const dogNft = new DogNft({
//       dog: savedDogReg._id,
//       owner: savedOwner._id,
//       veterinary: savedVeterinary._id,
//       insurance: savedInsurance._id,
//       dogShow: savedDogShow._id,
//       user: req?.body?.userId,
//     });
//     const savedDogNft = await dogNft.save({ session });
//     await session.commitTransaction();
//     session.endSession();
//     const nftId = savedDogNft._id.toString();
//     return res
//       .status(StatusCodes.CREATED)
//       .json({ message: "DogNFT created", nftId });
//   } catch (e) {
//     await session.abortTransaction();
//     session.endSession();
//   }
// });

// const updateDogNft = catchAsyncErrors(async (req, res, next) => {
//   const session = await mongoose.startSession();
//   session.startTransaction();
//   try {
//     const foundNft = await DogNft.findById({ _id: req.params.id }).session(
//       session
//     );
//     if (!foundNft) {
//       await session.abortTransaction();
//       session.endSession();
//       return res
//         .status(StatusCodes.NOT_FOUND)
//         .json({ message: "Nft not found" });
//     }
//     const parsedRegisterDog = JSON.parse(req.body.registerDog);
//     const parsedRegisterOwner = JSON.parse(req.body.registerOwner);
//     const parsedRegisterInsurance = JSON.parse(req.body.registerInsurance);
//     const parsedRegisterDogShow = JSON.parse(req.body.registerDogShow);
//     //CloudinaryUpload
//     let uploadedDogPic;
//     let uploadedDogMother;
//     let uploadedDogFatherPic;
//     let uploadedOwnerPic;
//     if (parsedRegisterDog?.dogPic) {
//       uploadedDogPic = await cloudinary.uploader.upload(
//         parsedRegisterDog?.dogPic,
//         {
//           folder: "DogNFT",
//         }
//       );
//     }
//     if (parsedRegisterDog?.dogMotherPic) {
//       uploadedDogMother = await cloudinary.uploader.upload(
//         parsedRegisterDog?.dogMotherPic,
//         {
//           folder: "DogNFT",
//         }
//       );
//     }
//     if (parsedRegisterDog?.dogFatherPic) {
//       uploadedDogFatherPic = await cloudinary.uploader.upload(
//         parsedRegisterDog?.dogFatherPic,
//         {
//           folder: "DogNFT",
//         }
//       );
//     }
//     if (parsedRegisterOwner?.ownerPic) {
//       uploadedOwnerPic = await cloudinary.uploader.upload(
//         parsedRegisterOwner?.ownerPic,
//         {
//           folder: "DogNFT",
//         }
//       );
//     }
//     const dog = await DogReg.findById({ _id: foundNft.dog }).session(session);
//     const owner = await DogOwner.findById({ _id: foundNft.owner }).session(
//       session
//     );
//     const insurance = await DogInsurance.findById({
//       _id: foundNft.insurance,
//     }).session(session);
//     const dogShow = await DogShow.findById({ _id: foundNft.dogShow }).session(
//       session
//     );
//     if (parsedRegisterDog) {
//       const { _id, ...updatedDog } = parsedRegisterDog;
//       Object.assign(dog, updatedDog);
//       if (uploadedDogPic) {
//         dog.dogPic = uploadedDogPic?.secure_url;
//         dog.dogPicCloudinaryId = uploadedDogPic?.public_id;
//       }
//       if (uploadedDogMother) {
//         dog.dogMotherPic = uploadedDogMother?.secure_url;
//         dog.dogMotherPicCloudinaryId = uploadedDogMother?.public_id;
//       }
//       if (uploadedDogFatherPic) {
//         dog.dogFatherPic = uploadedDogFatherPic?.secure_url;
//         dog.dogFatherPicCloudinaryId = uploadedDogFatherPic?.public_id;
//       }
//       await dog.save();
//     }

//     if (parsedRegisterOwner) {
//       const { _id, ...updatedOwner } = parsedRegisterOwner;
//       Object.assign(owner, updatedOwner);
//       if (uploadedOwnerPic) {
//         owner.ownerPic = uploadedOwnerPic?.secure_url;
//         owner.ownerPicCloudinaryId = uploadedOwnerPic?.public_id;
//       }
//       await owner.save();
//     }
//     if (parsedRegisterInsurance) {
//       const { _id, ...updatedInsurance } = parsedRegisterInsurance;
//       Object.assign(insurance, updatedInsurance);
//       await insurance.save();
//     }
//     if (parsedRegisterDogShow) {
//       dogShow.shows = parsedRegisterDogShow;
//       await dogShow.save();
//     }
//     foundNft.dog = dog._id;
//     foundNft.owner = owner._id;
//     foundNft.insurance = insurance._id;
//     foundNft.dogShow = dogShow._id;
//     await foundNft.save();
//     await session.commitTransaction();
//     session.endSession();
//     return res.status(StatusCodes.CREATED).json({ message: "DogNFT updated" });
//   } catch (e) {
//     await session.abortTransaction();
//     session.endSession();
//   }
// });

const createDogNft = catchAsyncErrors(async (req, res, next) => {
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
    ...parsedRegisterInsurance,
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
    dogReg.save(),
    ownerReg.save(),
    veterinaryReg.save(),
    insuranceReg.save(),
    dogShowReg.save(),
  ]);
  const dogNft = new DogNft({
    dog: savedDogReg._id,
    owner: savedOwner._id,
    veterinary: savedVeterinary._id,
    insurance: savedInsurance._id,
    dogShow: savedDogShow._id,
    user: req?.body?.userId,
  });
  const savedDogNft = await dogNft.save();
  const nftId = savedDogNft._id.toString();
  return res
    .status(StatusCodes.CREATED)
    .json({ message: "DogNFT created", nftId });
});

const updateDogNft = catchAsyncErrors(async (req, res, next) => {
  const foundNft = await DogNft.findById({ _id: req.params.id });
  if (!foundNft) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: "Nft not found" });
  }
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

  const dog = await DogReg.findById({ _id: foundNft.dog });
  const owner = await DogOwner.findById({ _id: foundNft.owner });
  const insurance = await DogInsurance.findById({
    _id: foundNft.insurance,
  });
  const veterinary = await DogVeterinary.findById({
    _id: foundNft.veterinary,
  });
  const dogShow = await DogShow.findById({ _id: foundNft.dogShow });
  if (parsedRegisterDog) {
    const { _id, ...updatedDog } = parsedRegisterDog;
    Object.assign(dog, updatedDog);
    if (uploadedDogPic) {
      dog.dogPic = uploadedDogPic?.secure_url;
      dog.dogPicCloudinaryId = uploadedDogPic?.public_id;
    }
    if (uploadedDogMother) {
      dog.dogMotherPic = uploadedDogMother?.secure_url;
      dog.dogMotherPicCloudinaryId = uploadedDogMother?.public_id;
    }
    if (uploadedDogFatherPic) {
      dog.dogFatherPic = uploadedDogFatherPic?.secure_url;
      dog.dogFatherPicCloudinaryId = uploadedDogFatherPic?.public_id;
    }
    await dog.save();
  }

  if (parsedRegisterOwner) {
    const { _id, ...updatedOwner } = parsedRegisterOwner;
    Object.assign(owner, updatedOwner);
    if (uploadedOwnerPic) {
      owner.ownerPic = uploadedOwnerPic?.secure_url;
      owner.ownerPicCloudinaryId = uploadedOwnerPic?.public_id;
    }
    await owner.save();
  }
  if (parsedRegisterInsurance) {
    const { _id, ...updatedInsurance } = parsedRegisterInsurance;
    Object.assign(insurance, updatedInsurance);
    await insurance.save();
  }
  if (parsedRegisterVeterinary) {
    const { _id, ...updatedVeterinary } = parsedRegisterVeterinary;
    Object.assign(veterinary, updatedVeterinary);
    await veterinary.save();
  }
  if (parsedRegisterInsurance) {
    const { _id, ...updatedInsurance } = parsedRegisterInsurance;
    Object.assign(insurance, updatedInsurance);
    await insurance.save();
  }
  if (parsedRegisterDogShow) {
    dogShow.shows = parsedRegisterDogShow;
    await dogShow.save();
  }
  foundNft.dog = dog._id;
  foundNft.owner = owner._id;
  foundNft.insurance = insurance._id;
  foundNft.veterinary = veterinary._id;
  foundNft.dogShow = dogShow._id;
  await foundNft.save();
  return res.status(StatusCodes.CREATED).json({ message: "DogNFT updated" });
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

const getDogNftByUser = catchAsyncErrors(async (req, res, next) => {
  const dogNftOfUser = await DogNft.find({ user: req?.params?.id }).populate(
    "dog owner veterinary insurance dogShow"
  );
  if (dogNftOfUser) {
    res.json({ data: dogNftOfUser });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ message: "No DogNft found" });
  }
});

module.exports = {
  createDogNft,
  getAllDogNfts,
  getDogNft,
  updateDogNft,
  getDogNftByUser,
};
