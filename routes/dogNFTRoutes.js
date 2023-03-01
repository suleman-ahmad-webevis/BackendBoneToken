const { Router } = require("express");
const router = Router();
const { createDogNft } = require("../controllers/dogNftController");

//Routes
router.post("/createDogNft", createDogNft);

module.exports = router;
