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

router.get("/dogs", requireAuth, dogGet);
router.post("/addDog", upload.single("dogImage"), requireAuth, dogPost);
router.get("/dogById/:id", requireAuth, dogById);
router.put("/updateDog/:id", upload.single("dogImage"), requireAuth, dogUpdate);
router.delete("/deleteDog/:id", requireAuth, dogDelete);

module.exports = router;
