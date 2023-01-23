const { Router } = require("express");
const router = Router();
const { login, register, getUsers } = require("../controllers/userController");

//Routes
router.post("/registerUser", register);
router.post("/loginUser", login);
router.get("/users", getUsers);

module.exports = router;
