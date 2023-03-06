const { Router } = require("express");
const router = Router();
const { createDogNft } = require("../controllers/dogNftController");
const upload = require("../utils/multer");

//Routes
router.post(
  "/createDogNft",
  upload.fields([
    {
      name: "dogVideo",
      maxCount: 5,
    },
  ]),
  createDogNft
);

module.exports = router;
