const { Router } = require("express");
const router = Router();
const {
  createDogNft,
  getAllDogNfts,
  getDogNft,
  updateDogNft
} = require("../controllers/dogNftController");

//Router
router.post("/createDogNft", createDogNft);
router.put("/updateDogNft/:id", updateDogNft);
router.get("/getAllNfts", getAllDogNfts);
router.get("/getDogNft/:id", getDogNft);

module.exports = router;
