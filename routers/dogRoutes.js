const { Router } = require("express");
const {dog_Post,dog_Get,dog_Update} = require("../controllers/dogController");
const { requireAuth } = require("../middleware/authMiddleware");

const router = Router();

router.get("/dog", requireAuth, dog_Get);
router.post("/dog", requireAuth, dog_Post);
router.put("/dog/:id", dog_Update);


module.exports = router;
