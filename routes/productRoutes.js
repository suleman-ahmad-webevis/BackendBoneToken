const { Router } = require("express");
const router = Router();
const {
  productPost,
  productById,
  productGet,
  productUpdate,
  productDelete,
  productTagsPost,
  addProduct,
  rateTheProduct,
  productFeaturedPost,
  updateAllProduct,
  // postProductReview,
  // deleteProductReview,
  // getProductReviews,
} = require("../controllers/productController");
const { requireAuth } = require("../utils/auth");
const upload = require("../utils/multer");
const uploadController = require("../controllers/upload");

//WebsiteRoutes
router.get("/products", productGet);
router.get("/productById/:id", productById);
router.put("/rateTheProduct", rateTheProduct);
// router.put("/productReview", requireAuth, postProductReview);
// router.get("/productReviews/:id", requireAuth, getProductReviews);
// router.delete("/productReviews", requireAuth, deleteProductReview);
//CRMRoutes
router.get("/productsPortal", requireAuth, productGet);
router.post(
  "/addProduct",
  requireAuth,
  upload.single("productFile"),
  addProduct
);
router.post(
  "/postProduct",
  // upload.single("productImage"),
  requireAuth,
  productPost
);
router.put(
  "/updateProduct/:id",
  requireAuth,
  // upload.single("productImage"),
  productUpdate
);
router.delete("/deleteProduct/:id", requireAuth, productDelete);
router.put("/tagProduct/:id", requireAuth, productTagsPost);
router.post("/featureProduct/:id", requireAuth, productFeaturedPost);
router.post(
  "/uploadVideo",
  upload.single("file"),
  uploadController.uploadVideo
);

// router.get("/allProducts", updateAllProduct);
module.exports = router;
