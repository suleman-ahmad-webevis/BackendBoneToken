const { Router } = require("express");
const {
  registerAdmin,
  loginAdmin,
  editAdmin,
} = require("../controllers/adminController");
const router = Router();
const { requireAuth } = require("../utils/auth");

//Routes
router.post("/registerAdmin", registerAdmin);
router.post("/loginAdmin", loginAdmin);
router.put("/editAdmin/:id", requireAuth, editAdmin);

module.exports = router;
