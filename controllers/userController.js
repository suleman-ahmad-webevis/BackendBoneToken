const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../utils/catchAsync");

//RegisterUser
const register = catchAsync(async (req, res) => {
  const { email } = req.body;
  if (req.body.password !== req.body.confirmPassword) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json("Password and confirm password dnt match");
  }
  const result = await User.findOne({ email });
  if (result) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "User already exists." });
  } else {
    const user = await User.create(req.body);
    return res.status(StatusCodes.CREATED).json({ user });
  }
});

//LoginUser
const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Please enter valid email and password" });
  const user = await User.findOne({ email: email });
  if (!user)
    return res.status(StatusCodes.NOT_FOUND).json({ error: "User not found" });
  const isCorrect = await user.checkPassword(password);
  if (isCorrect) {
    const token = user.generateAuthToken();
    return res.status(StatusCodes.OK).json({ token, user });
  } else
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: "Incorrect password" });
});

//GetAllUsers
const getUsers = catchAsync(async (res) => {
  const users = await User.find({});
  if (users.length > 0) return res.status(StatusCodes.OK).json({ users });
  else
    return res.status(StatusCodes.NOT_FOUND).json({ error: "No user found" });
});

module.exports = { login, register, getUsers };
