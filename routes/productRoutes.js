const { Router } = require("express");
const router = Router();
const upload = require("../utils/multer");
const {
  productPost,
  productGet,
  productUpdate,
  productDelete,
  productCategory,
} = require("../controllers/productController");
const { requireAuth } = require("../utils/auth");

//Routes
router.post("/products", upload.single("productImage"), productPost);
router.get("/products", productGet);
router.get("/products/category", productCategory);
router.put(
  "/products/:id",
  requireAuth,
  upload.single("productImage"),
  productUpdate
);
router.delete("/products/:id", requireAuth, productDelete);

module.exports = router;
