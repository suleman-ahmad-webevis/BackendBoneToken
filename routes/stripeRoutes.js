const { Router } = require("express");
const router = Router();
const { makeIntent } = require("../controllers/stripeController");

router.post("/createCheckoutSession", makeIntent);

module.exports = router;
