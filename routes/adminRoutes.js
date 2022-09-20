const { Router } = require("express");
const {
  registerAdmin,
  loginAdmin,
  editAdmin,
} = require("../controllers/adminController");
const router = Router();

//Routes
router.put("/editadmin/:id", editAdmin);
router.post("/registeradmin", registerAdmin);
router.post("/loginadmin", loginAdmin);

module.exports = router;
