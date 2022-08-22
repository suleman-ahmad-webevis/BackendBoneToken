const { Router } = require("express");
const {dog_Post,dog_Get,dog_Update, dog_Delete, dogbyId} = require("../controllers/dogController");
const { requireAuth } = require("../utils/auth");
const upload = require('../utils/multer')


const router = Router();

router.get("/dog", dog_Get);
router.get('/dog/:id', dogbyId)
router.post("/dog", upload.single('dogImage'), dog_Post);
router.put("/dog/:id", upload.single('dogImage'), dog_Update);
router.delete('/dog/:id', dog_Delete)

module.exports = router;
