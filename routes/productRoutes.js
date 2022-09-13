const { Router } = require("express");
const router = Router();
const upload = require("../utils/multer");
const {
  productPost,
  productById,
  productGet,
  productUpdate,
  productDelete,
  productCategory
} = require("../controllers/productController");
const { productsPostAdmin } = require('../controllers/productAdminController')
const { requireAuth } = require("../utils/auth");

//Routes
router.get("/products", productGet);
router.get("/products/:id", productById)
// router.post("/products", upload.single("productImage"), productPost);
router.post("/products", productsPostAdmin);
router.put("/products/:id", productUpdate);
router.delete("/products/:id", productDelete);
router.get("/products/category", productCategory);


module.exports = router;
