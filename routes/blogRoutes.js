const { Router } = require("express");
const router = Router();
const {
  addBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  mayLike,
  deleteBlogById,
} = require("../controllers/blogController");
const { requireAuth } = require("../utils/auth");

//Routes
router.post("/postTheBlog", requireAuth, addBlog);
router.get("/allBlogs", getAllBlogs);
router.put("/updateTheBlog/:id", updateBlog);
router.delete("/deleteTheBlog/:id", deleteBlogById);
router.get("/blogById/:id", getBlogById);
router.get("/mayLike/:category/:id", mayLike);

module.exports = router;
