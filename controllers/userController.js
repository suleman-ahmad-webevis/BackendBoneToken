const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const { token } = require("morgan");
const catchAsync = require("../utils/catchAsync");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Please enter email and password" });
  }
  const user = await User.findOne({ email: email });
  //console.log(user)
  if (!user) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "User not found" });
  }
  const isCorrect = await user.checkPassword(password);

  if (isCorrect) {
    const token = user.generateAuthToken();
    return res.status(StatusCodes.OK).json({ token, user });
  } else {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ error: "Incorrect password" });
  }
};

const register = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);
  return res.status(StatusCodes.CREATED).json({ user });

  // try{
  //   const user = await User.create(req.body);
  //   return res.status(StatusCodes.CREATED).json({ user });
  // }catch(err){
  // return res.status(400).json({error:err.message});
  // }
});

const getUsers = async (req, res) => {
  const users = await User.find({});
  return res.status(StatusCodes.OK).json({ users });
};
module.exports = { login, register, getUsers };
