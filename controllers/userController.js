const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
//ErrorHandlers
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const mailSender = require("../utils/mailSender");

//RegisterUser
const register = catchAsyncErrors(async (req, res, next) => {
  const { email } = req.body.data;
  if (req.body.password !== req.body.confirmPassword) {
    return next(
      new ErrorHandler(
        StatusCodes.BAD_REQUEST,
        "Password and confirm password dnt match"
      )
    );
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    return next(
      new ErrorHandler(StatusCodes.BAD_REQUEST, "Email already registered")
    );
  }
  const user = new User({
    ...req.body.data,
    dateOfBirth: req.body.dateOfBirth,
  });
  await user.save();
  // mailSender();
  return res
    .status(StatusCodes.CREATED)
    .json({ user, message: "User registered" });
});

//LoginUser
const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(
      new ErrorHandler(
        StatusCodes.BAD_REQUEST,
        "Please enter email and password"
      )
    );
  const user = await User.findOne({ email });
  if (!user)
    return next(new ErrorHandler(StatusCodes.NOT_FOUND, "Invalid credentials"));
  const isCorrect = await user.checkPassword(password);
  if (isCorrect) {
    const token = user.generateAuthToken();
    return res.status(StatusCodes.OK).json({ token, user });
  } else
    return next(
      new ErrorHandler(StatusCodes.UNAUTHORIZED, "Invalid credentials")
    );
});

//GetAllUsers
const getUsers = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find({});
  if (users.length > 0) return res.status(StatusCodes.OK).json({ users });
  else
    return res.status(StatusCodes.NOT_FOUND).json({ message: "No user found" });
});

module.exports = { login, register, getUsers };
