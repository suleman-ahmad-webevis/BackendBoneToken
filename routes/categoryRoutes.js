const { Router } = require("express");
const router = Router();
const {
  addCategory,
  getAllCategory,
  getAllCategories,
} = require("../controllers/categoryController");
const { requireAuth } = require("../utils/auth");

//Routes
router.post("/addNewCategory", requireAuth, addCategory);
router.get("/getAllCategories", requireAuth, getAllCategories);
router.get("/getAllCategory", getAllCategory);

module.exports = router;
