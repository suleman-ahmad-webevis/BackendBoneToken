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
router.get("/productsByCategory", productCategory);
router.get("/productById/:id", productById);

//AdminPortalRoutes
router.get("/productsPortal", requireAuth, productGetPortal);
router.post("/addProducts", requireAuth, productPost);
router.put(
  "/updateProduct/:id",
  requireAuth,
  upload.single("productImage"),
  productUpdate
);
router.delete("/deleteProduct/:id", requireAuth, productDelete);
router.put("/productReview", requireAuth, postProductReview);
router.get("/productReviews/:id", requireAuth, getProductReviews);
router.delete("/productReviews", requireAuth, deleteProductReview);

module.exports = router;
