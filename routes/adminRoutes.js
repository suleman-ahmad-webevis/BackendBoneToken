const { Router } = require("express");
const {
  registerAdmin,
  loginAdmin,
  editAdmin,
} = require("../controllers/adminController");
const router = Router();
const { requireAuth } = require("../utils/auth");
const upload = require("../utils/multer");

//Routes
router.post("/registerAdmin", upload.single("adminImage"), registerAdmin);
router.post("/loginAdmin", loginAdmin);
router.put(
  "/editAdmin/:id",
  upload.single("adminImage"),
  requireAuth,
  editAdmin
);

module.exports = router;
