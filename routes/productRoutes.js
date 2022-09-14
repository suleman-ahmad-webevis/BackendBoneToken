const { Router } = require("express");
const router = Router();
const upload = require("../utils/multer");
const {
  productPost,
  productById,
  productGetPortal,
  productGet,
  productUpdate,
  productDelete,
  productCategory
} = require("../controllers/productController");
const { requireAuth } = require("../utils/auth");

//Routes
router.get("/products", productGet);
router.get("/productsPortal", requireAuth, productGetPortal)
router.get("/products/:id", requireAuth, productById)
router.post("/products", requireAuth, productPost);
router.put("/products/:id", requireAuth, productUpdate);
router.delete("/products/:id", requireAuth,productDelete);
router.get("/products/category", requireAuth, productCategory);


module.exports = router;
