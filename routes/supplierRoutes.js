const { Router } = require("express");
const {
  addSupplier,
  getAllSupplier,
  deleteSupplier,
} = require("../controllers/supplierController");
const router = Router();
const { requireAuth } = require("../utils/auth");
const upload = require("../utils/multer");

//Routes
router.post("/addSupplier", requireAuth, addSupplier);
router.get("/getAllSuppliers", requireAuth, getAllSupplier);
router.delete("/deleteSupplier/:supplierId", requireAuth, deleteSupplier);

module.exports = router;
