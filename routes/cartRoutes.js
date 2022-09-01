const { Router } = require("express");
const { addtoCart } = require("../controllers/cartController");
const router = Router();

router.post("/addtocart/:id", addtoCart);

module.exports = router;
