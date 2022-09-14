const { Router } = require("express");
const { registerAdmin, loginAdmin } = require("../controllers/adminController");
const router = Router();

//Routes
router.post("/registeradmin", registerAdmin);
router.post("/loginadmin", loginAdmin);

module.exports = router;