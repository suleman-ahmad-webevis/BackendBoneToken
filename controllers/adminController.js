const Admin = require("../models/admin");
const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../utils/catchAsync");
const cloudinary = require("../utils/cloudinary");

//RegisterAdmin
const registerAdmin = catchAsync(async (req, res) => {
  const { email } = req.body;
  if (!req.body.adminImage) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Profile pic is required" });
  }
  const result = await Admin.findOne({ email });
  if (result) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Admin already exists" });
  } else {
    const uploaded_img = await cloudinary.uploader.upload(req.body.adminImage);
    const admin = new Admin({
      ...req.body,
      adminImage: uploaded_img.secure_url,
      cloudinaryId: uploaded_img.public_id,
    });
    await admin.save();
    return res
      .status(StatusCodes.CREATED)
      .json({ admin, message: "Admin registered" });
  }
});

//LoginAdmin
const loginAdmin = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Enter valid email and password" });
  const admin = await Admin.findOne({ email: email });
  if (!admin)
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "Invalid credentials" });
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
const editAdmin = catchAsync(async (req, res) => {
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
        .json({ admin: result, message: "Admin updated" });
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

module.exports = { loginAdmin, registerAdmin, editAdmin };
