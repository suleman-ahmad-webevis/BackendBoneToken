const { Router } = require("express");
const router = Router();
const {
  addBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
} = require("../controllers/blogController");
const { requireAuth } = require("../utils/auth");

//Routes
router.post("/postTheBlog", requireAuth, addBlog);
router.get("/allBlogs", getAllBlogs);
router.put("/updateTheBlog/:id", updateBlog);
router.get("/blogById/:id", getBlogById);

module.exports = router;
