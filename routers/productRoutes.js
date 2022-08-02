const { Router } = require("express");
const {} = require("../controllers/dogController");
const { product_Get, product_Post, product_Update, product_Delete, product_Category } = require("../controllers/productController");
const { checkUser, requireAuth } = require("../middleware/authMiddleware");

const router = Router();

router.get("/products", requireAuth, product_Get);
router.post("/products", requireAuth, product_Post);
router.put("/products/:id", requireAuth, product_Update);
router.delete("/products/:id", requireAuth, product_Delete);
router.get("/products/category", requireAuth, product_Category);


module.exports = router;