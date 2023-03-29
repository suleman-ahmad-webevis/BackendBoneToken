const { Router } = require("express");
const router = Router();
const {
  createDogNft,
  getAllDogNfts,
} = require("../controllers/dogNftController");

//Routes
router.post("/createDogNft", createDogNft);
router.get("/getAllNfts", getAllDogNfts);

module.exports = router;