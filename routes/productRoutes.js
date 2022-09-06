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
router.get("/products", productGet);
router.post("/products", upload.single("productImage"), productPost);
router.put("/products/:id", requireAuth, upload.single("productImage"), productUpdate);
router.delete("/products/:id", requireAuth, productDelete);
router.get("/products/category", requireAuth, productCategory);


module.exports = router;
