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

//Routes

router.get("/dogs", requireAuth, dogGet);
router.post("/addDog", requireAuth, dogPost);
router.get("/dogById/:id", requireAuth, dogById);
router.put("/updateDog/:id", requireAuth, dogUpdate);
router.delete("/deleteDog/:id", requireAuth, dogDelete);

module.exports = router;
