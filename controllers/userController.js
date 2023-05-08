const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
//ErrorHandlers
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const mailSender = require("../utils/mailSender");
const smsOtp = require("../models/smsOtp");

//RegisterUser
const accountSid = "AC4319d5dd2386c179f91043f5460faf93";
const authToken = "4e2bb9e0f19a1edac3a2f96f97776bdb";
const client = require("twilio")(accountSid, authToken);

const register = catchAsyncErrors(async (req, res, next) => {
  const firstForm = JSON.parse(req.body.firstForm);
  const secondForm = JSON.parse(req.body.secondForm);
  const { email } = firstForm;

  if (req.body.values.password !== req.body.values.repeatPassword) {
    return next(
      new ErrorHandler(
        StatusCodes.BAD_REQUEST,
        "Password and repeat password dnt match"
      )
    );
  }
  const userExist = await User.findOne({ email });
  if (userExist) {
    return next(
      new ErrorHandler(StatusCodes.BAD_REQUEST, "Email already registered")
    );
  }
  // let randomNo = Math.floor(Math.random() * 90000) + 10000;
  // client.messages
  //   .create({ from: "+923134766646", to: "+923134766646", body: randomNo })
  //   .then(saveOtp())
  //   .catch(() => {
  //     return next(
  //       new ErrorHandler(
  //         StatusCodes.BAD_REQUEST,
  //         "Error while sending otp on phone number"
  //       )
  //     );
  //   });

  // function saveOtp() {
  //   const newOtp = new smsOtp({
  //     opt: randomNo,
  //   });
  //   newOtp.save(function (err) {
  //     if (err) {
  //       return next(
  //         new ErrorHandler(StatusCodes.BAD_REQUEST, "Error while saving otp")
  //       );
  //     } else {
  //       return res
  //         .status(StatusCodes.CREATED)
  //         .json({ message: "OTP sent to phone number" });
  //     }
  //   });
  // }
  const user = new User({
    ...firstForm,
    ...secondForm,
    ...req.body.values,
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

const verifyOtp = catchAsyncErrors(async (req, res, next) => {
  const code = req.body.code;
  smsOtp.findOne({ opt }, function (err, found) {
    if (err) {
      console.log("The err", err);
    } else if (found) {
      console.log("The success");
      smsOtp.findOneAndDelete(code, function (err) {
        if (err) {
          console.log("The err", err);
        } else {
          console.log("Deleted");
        }
      });
    }
  });
});

module.exports = { login, register, getUsers, verifyOtp };
