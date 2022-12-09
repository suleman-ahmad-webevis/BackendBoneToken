const { Router } = require("express");
const router = Router();
const {
  productPost,
  productById,
  productGet,
  productUpdate,
  productDelete,
  postProductReview,
  deleteProductReview,
  getProductReviews,
  productTagsPost,
  addProduct,
} = require("../controllers/productController");
const { requireAuth } = require("../utils/auth");
const upload = require("../utils/multer");

//WebsiteRoutes
router.get("/products", productGet);
router.get("/productById/:id", productById);
router.put("/productReview", requireAuth, postProductReview);
router.get("/productReviews/:id", requireAuth, getProductReviews);
router.delete("/productReviews", requireAuth, deleteProductReview);

//CRMRoutes
router.get("/productsPortal", productGet);
router.post(
  "/addProduct",
  upload.single("productImage"),
  requireAuth,
  addProduct
);
router.post(
  "/postProduct",
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
