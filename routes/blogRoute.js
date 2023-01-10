const { Router } = require("express");
const router = Router();
const {
  addBlog,
  getAllBlogs,
  getBlogById,
} = require("../controllers/blogController");

//Routes
router.post("/postTheBlog", addBlog);
router.get("/allBlogs", getAllBlogs);
router.get("/blogById/:id", getBlogById);

module.exports = router;
