const { Router } = require("express");
const router = Router();
const { requireAuth } = require("../utils/auth");
const {
  processPayment,
  sendStripeApiKey,
} = require("../controllers/paymentController");

//Routes
router.post("/paymentProcess", processPayment);
router.get("/stripeApiKey", sendStripeApiKey);

module.exports = router;
