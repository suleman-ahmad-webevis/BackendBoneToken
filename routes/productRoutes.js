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
} = require("../controllers/productController");
const { requireAuth } = require("../utils/auth");
const upload = require("../utils/multer");

//Routes
router.get("/products", productGet);
router.get("/productsByCategory", productCategory);
router.get("/productById/:id",productById);

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

module.exports = router;
