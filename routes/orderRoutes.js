const { Router } = require("express");
const router = Router();
const {
  newOrder,
  getSingleOrder,
  myOrders,
  deleteOrder,
  getAllOrders,
} = require("../controllers/orderController");
const { requireAuth } = require("../utils/auth");

//Routes
router.post("/newOrder", newOrder);
router.get("/singleOrder/:id", requireAuth, getSingleOrder);
router.get("/myOrder/:id", requireAuth, myOrders);
router.delete("/deleteOrder/:id", requireAuth, deleteOrder);
router.get("/getAllOrders", requireAuth, getAllOrders);

module.exports = router;
