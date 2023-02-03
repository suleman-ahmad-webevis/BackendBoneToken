const { Router } = require("express");
const router = Router();
const {
  login,
  register,
  getUsers,
  verifyOtp,
} = require("../controllers/userController");

//Routes
router.post("/registerUser", register);
router.post("/loginUser", login);
router.get("/users", getUsers);
router.post("/verifyOtp", verifyOtp);
module.exports = router;
