const Admin = require("../models/admin");
const { StatusCodes } = require("http-status-codes");
const cloudinary = require("../utils/cloudinary");
//ErrorHandlers
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const { tokenDecoder } = require("../utils/tokenDecoder");

//RegisterAdmin
const registerAdmin = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!req.body.adminImage) {
    return next(
      new ErrorHandler(StatusCodes.BAD_REQUEST, "Profile pic is required")
    );
  }
  const alreadyExist = await Admin.findOne({ email });
  if (alreadyExist) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Admin already exists" });
  } else {
    const uploaded_img = await cloudinary.uploader.upload(req.body.adminImage);
    const hashedPassword = await admin.hashPassword(password);
    const admin = new Admin({
      ...req.body,
      password: hashedPassword,
      adminImage: uploaded_img.secure_url,
      cloudinaryId: uploaded_img.public_id,
    });
    await admin.save();
    return res
      .status(StatusCodes.CREATED)
      .json({ admin, message: "Admin registered" });
  }
});

//GoogleRegister
const registerGoogleAdmin = catchAsyncErrors(async (req, res, next) => {
  const { credential } = req.body;
  if (credential) {
    const { given_name, family_name, email, picture } = await tokenDecoder(
      credential
    );
    if (!picture) {
      return next(
        new ErrorHandler(StatusCodes.BAD_REQUEST, "Profile pic is required")
      );
    }
    const admin = await Admin.findOne({ email });
    // const token = admin.generateAuthToken();
    if (admin) {
      const token = admin.generateAuthToken();
      return res.status(StatusCodes.OK).json({ token, admin });
    } else {
      const admin = new Admin({
        firstName: String(given_name),
        lastName: String(family_name),
        email: String(email),
        adminImage: String(picture),
        role: "Admin",
      });
      await admin.save();
      const token = admin.generateAuthToken();
      return res.status(StatusCodes.OK).json({ token, admin });
    }
  } else {
    return next(new ErrorHandler(StatusCodes.NOT_FOUND, "Invalid token"));
  }
});

//LoginAdmin
const loginAdmin = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(
      new ErrorHandler(
        StatusCodes.BAD_REQUEST,
        "Enter valid email and password"
      )
    );
  const admin = await Admin.findOne({ email: email });
  if (!admin)
    return next(new ErrorHandler(StatusCodes.NOT_FOUND, "Invalid credentials"));
  const isCorrect = await admin.checkPassword(password);
  if (isCorrect) {
    const token = admin.generateAuthToken();
    return res.status(StatusCodes.OK).json({ token, admin });
  } else
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ message: "Invalid credentials" });
});

//EditAdminProfile
const editAdmin = catchAsyncErrors(async (req, res, next) => {
  let admin = await Admin.findById(req.params.id);
  if (admin) {
    if (admin.adminImage !== req.body.adminImage) {
      await cloudinary.uploader.destroy(admin.cloudinaryId);
      const updated_img = await cloudinary.uploader.upload(req.body.adminImage);
      const result = await Admin.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
          adminImage: updated_img.secure_url,
          cloudinaryId: updated_img.public_id,
        },
        { new: true }
      );
      return res
        .status(StatusCodes.OK)
        .json({ admin: result, message: "User updated" });
    } else {
      const result = await Admin.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,
        },
        { new: true }
      );
      return res
        .status(StatusCodes.OK)
        .json({ admin: result, message: "User updated" });
    }
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ message: "User not found" });
  }
});

module.exports = { loginAdmin, registerAdmin, editAdmin, registerGoogleAdmin };
