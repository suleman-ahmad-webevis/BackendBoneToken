// import { toast } from "react-toastify";
import API from "../../utils/Interceptor";

const getTheBlogsService = async (obj) => {
  let API_URL = `/blog/allBlogs?category=${obj.category}&page=${obj.page}&limit=${obj.limit}`;
  const response = await API.get(API_URL);
  // toast.success(response.data.message, { theme: "colored" });
  return response.data;
};

const getTheBlogByIdService = async (obj) => {
  let API_URL = `/blog/blogById/${obj}`;
  const response = await API.get(API_URL);
  // toast.success(response.data.message, { theme: "colored" });
  return response.data;
};

const getTheMayLikeBlogs = async (obj) => {
  let API_URL = `/blog/mayLike/${obj.category}/${obj.id}`;
  const response = await API.get(API_URL);
  return response.data;
};

const blogService = {
  getTheBlogsService,
  getTheBlogByIdService,
  getTheMayLikeBlogs,
};

export default blogService;
