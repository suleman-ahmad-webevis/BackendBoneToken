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
router.post("/dog", requireAuth, dogPost);
router.get("/dog", requireAuth, dogGet);
router.get("/dog/:id", requireAuth, dogById);
router.put("/dog/:id", requireAuth, dogUpdate);
router.delete("/dog/:id", requireAuth, dogDelete);

module.exports = router;
