const { Router } = require("express");
const {
  dogPost,
  dogById,
  dogGet,
  dogUpdate,
  dogDelete,
} = require("../controllers/dogController");
const { requireAuth } = require("../utils/auth");
const upload = require("../utils/multer");
const router = Router();

router.get("/dog", dogGet);
router.get("/dog/:id", dogById);
router.post("/dog", upload.single("dogImage"), dogPost);
router.put("/dog/:id", upload.single("dogImage"), dogUpdate);
router.delete("/dog/:id", dogDelete);

module.exports = router;
