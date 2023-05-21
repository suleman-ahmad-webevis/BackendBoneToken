const { Router } = require("express");
const router = Router();
const { makeIntent } = require("../controllers/paymentController");

router.post("/createCheckoutSession", makeIntent);

module.exports = router;
