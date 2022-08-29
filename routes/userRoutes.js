const { Router } = require("express");
const { login, register, getUsers } = require("../controllers/userController");
const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/register", getUsers);

module.exports = router;
