const { Router } = require("express");
const router = Router();
const {
  productPost,
  productById,
  productGetPortal,
  productGet,
  productUpdate,
  productDelete,
  productCategory,
  postProductReview,
  getProductReviews,
  deleteProductReview,
} = require("../controllers/productController");
const { requireAuth } = require("../utils/auth");
const upload = require("../utils/multer");

//Routes
router.get("/products", productGet);
router.get("/productsPortal", requireAuth, productGetPortal);
router.get("/products/:id", requireAuth, productById);
router.post("/products", requireAuth, productPost);
router.put(
  "/products/:id",
  requireAuth,
  upload.single("productImage"),
  productUpdate
);
router.delete("/products/:id", requireAuth, productDelete);
router.get("/products/category", requireAuth, productCategory);
router.put("/productreview", requireAuth, postProductReview);
router.get("/productreviews/:id", requireAuth, getProductReviews);
router.delete("/productreview", requireAuth, deleteProductReview);

module.exports = router;
