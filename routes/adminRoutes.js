const { Router } = require("express");
const router = Router();
const { login, register } = require("../controllers/userController");

//Routes
router.post("/registeradmin", register);
router.post("/loginadmin", login);

module.exports = router;
