const { Router } = require("express");
const {dog_Post,dog_Get,dog_Update, dog_Delete} = require("../controllers/dogController");
const { requireAuth } = require("../utils/auth");
const upload = require('../utils/multer')


const router = Router();

router.get("/dog", requireAuth, dog_Get);
router.post("/dog", upload.single('dogImage'), dog_Post);
router.put("/dog/:id", requireAuth, upload.single('dogImage'), dog_Update);
router.delete('/dog/:id',requireAuth, dog_Delete)

module.exports = router;
