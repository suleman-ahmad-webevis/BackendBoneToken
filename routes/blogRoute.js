const { Router } = require("express");
const router = Router();
const { addBlog } = require("../controllers/blogController");

//Routes
router.post("/postTheBlog", addBlog);

module.exports = router;
