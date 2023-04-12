const { Router } = require("express");
const router = Router();
const {
  createDogNft,
  getAllDogNfts,
  getDogNft,
} = require("../controllers/dogNftController");

//Router
router.post("/createDogNft", createDogNft);
router.get("/getAllNfts", getAllDogNfts);
router.get("/getDogNft/:id", getDogNft);

module.exports = router;