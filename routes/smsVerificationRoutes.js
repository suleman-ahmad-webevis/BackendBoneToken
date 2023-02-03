const { Router } = require("express");
const router = Router();
const {
  addCategory,
  getAllCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const { requireAuth } = require("../utils/auth");

//Routes
router.post("/addNewCategory", requireAuth, addCategory);
router.get("/getAllCategories", requireAuth, getAllCategories);
router.get("/getAllCategory", getAllCategory);
router.put("/editTheCategory/:categoryId", updateCategory);
router.delete("/deleteTheCategory/:categoryId", deleteCategory);

module.exports = router;