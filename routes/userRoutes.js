const { Router } = require("express");
const router = Router();
const { login, register, getUsers } = require("../controllers/userController");

//Routes
router.post("/register", register);
router.post("/login", login);
router.get("/users", getUsers);

module.exports = router;
