const { Router } = require("express");
const router = Router();
const {
  createDogNft,
  getAllDogNfts,
  getDogNft,
  updateDogNft,
  getDogNftByUser,
} = require("../controllers/dogNftController");

//Router
router.post("/createDogNft", createDogNft);
router.put("/updateDogNft/:id", updateDogNft);
router.get("/getAllNfts", getAllDogNfts);
router.get("/getDogNft/:id", getDogNft);
router.get("/getDogNftByUser/:id", getDogNftByUser);

module.exports = router;
