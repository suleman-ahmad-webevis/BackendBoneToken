const { Router } = require("express");
const router = Router();
const {
  addCategory,
  getAllCategory,
} = require("../controllers/categoryController");
const { requireAuth } = require("../utils/auth");

//Routes
router.post("/addNewCategory", requireAuth, addCategory);
router.get("/getAllCategory", requireAuth, getAllCategory);

module.exports = router;
