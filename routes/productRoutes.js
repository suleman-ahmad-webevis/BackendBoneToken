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
router.get("/productsPortal", productGetPortal)
router.get("/products/:id", productById)
router.post("/products", productPost);
router.put("/products/:id", productUpdate);
router.delete("/products/:id", productDelete);
router.get("/products/category", productCategory);


module.exports = router;
