const { Router } = require("express");
const router = Router();
const {
  addSubCategory,
  getAllSubCategory,
} = require("../controllers/subCategoryController");
const { requireAuth } = require("../utils/auth");

router.post("/addNewSubCategory", requireAuth, addSubCategory);
router.get("/getAllSubCategory", getAllSubCategory);

module.exports = router;
