const { Router } = require("express");
const router = Router();
const upload = require("../utils/multer");
const {
  productPost,
  productById,
  productGet,
  productUpdate,
  productDelete,
  productCategory,
  productPostAdmin
} = require("../controllers/productController");
const { requireAuth } = require("../utils/auth");

//Routes
router.get("/products", productGet);
router.get("/products/:id", productById)
// router.post("/products", upload.single("productImage"), productPost);
router.post("/csvreader", productPostAdmin);
router.put("/products/:id", requireAuth, upload.single("productImage"), productUpdate);
router.delete("/products/:id", requireAuth, productDelete);
router.get("/products/category", requireAuth, productCategory);


module.exports = router;
