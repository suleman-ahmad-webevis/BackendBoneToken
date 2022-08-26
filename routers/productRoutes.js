const { Router } = require("express");
const upload = require("../utils/multer");
const {
  product_Get,
  product_Post,
  product_Update,
  product_Delete,
  product_Category,
} = require("../controllers/productController");
const { requireAuth } = require("../utils/auth");

const router = Router();

router.get("/products", product_Get);
router.post("/products", upload.single("productImage"), product_Post);
router.put(
  "/products/:id",
  requireAuth,
  upload.single("productImage"),
  product_Update
);
router.delete("/products/:id", requireAuth, product_Delete);
router.get("/products/category", requireAuth, product_Category);

module.exports = router;
