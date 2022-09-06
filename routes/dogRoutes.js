const { Router } = require("express");
const router = Router();
const {
  dogPost,
  dogById,
  dogGet,
  dogUpdate,
  dogDelete,
} = require("../controllers/dogController");
const { requireAuth } = require("../utils/auth");
const upload = require("../utils/multer");

//Routes
router.post("/dog", upload.single("dogImage"), dogPost);
router.get("/dog", dogGet);
router.get("/dog/:id", dogById);
router.put("/dog/:id", upload.single("dogImage"), dogUpdate);
router.delete("/dog/:id", dogDelete);

module.exports = router;
