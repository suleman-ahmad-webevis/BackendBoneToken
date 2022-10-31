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
  deleteProductReview,
  getProductReviews,
  featuredProducts,
  popularProducts,
  productTagsPost,
} = require("../controllers/productController");
const { requireAuth } = require("../utils/auth");
const upload = require("../utils/multer");

//WebsiteRoutes
router.get("/products", productGet);
router.get("/productsByCategory", productCategory);
router.get("/productById/:id", productById);
router.put("/productReview", requireAuth, postProductReview);
router.get("/productReviews/:id", requireAuth, getProductReviews);
router.delete("/productReviews", requireAuth, deleteProductReview);
router.get("/featuredProducts", featuredProducts);
router.get("/popularProducts", popularProducts);

//CRMRoutes
router.get("/productsPortal", requireAuth, productGetPortal);
router.post(
  "/addProducts",
  upload.single("productImage"),
  requireAuth,
  productPost
);
router.put(
  "/updateProduct/:id",
  requireAuth,
  upload.single("productImage"),
  productUpdate
);
router.delete("/deleteProduct/:id", requireAuth, productDelete);
router.put("/tagProduct/:id", productTagsPost);

module.exports = router;
