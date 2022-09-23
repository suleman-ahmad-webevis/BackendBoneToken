const { Router } = require("express");
const {
  registerAdmin,
  loginAdmin,
  editAdmin,
} = require("../controllers/adminController");
const router = Router();

//Routes
router.post("/registerAdmin", registerAdmin);
router.post("/loginAdmin", loginAdmin);
router.put("/editAdmin/:id", editAdmin);

module.exports = router;
