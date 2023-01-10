const { Router } = require("express");
const router = Router();
const { addBlog, getAllBlogs } = require("../controllers/blogController");

//Routes
router.post("/postTheBlog", addBlog);
router.get("/allBlogs", getAllBlogs);

module.exports = router;
