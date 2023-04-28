import axios from "axios";
import { toast } from "react-toastify";

//**Base URL not from Interceptor**
// const BaseUrl = "https://backendbt.up.railway.app";
// const BaseUrl = "https://web-production-5b72.up.railway.app";
// const BaseUrl = "http://localhost:5000";
const BaseUrl = "https://cooperative-kilt-tuna.cyclic.app";

const getTheProductsService = async (obj) => {
  let API_URL = `${BaseUrl}/product/products?search=${obj.search}&category=${obj.category}&subCategory=${obj.subCategory}&featured=${obj.featured}&new=${obj.new}&gender=${obj.gender}&rated=${obj.rated}&coatColor=${obj.coatColor}&age=${obj.age}&breed=${obj.breed}&dogGroupFCI=${obj.dogGroupFCI}&season=${obj.season}&page=${obj.page}&limit=${obj.limit}`;
  const response = await axios.get(API_URL);
  return response.data;
};

const getProductByIdService = async (obj) => {
  let API_URL = `${BaseUrl}/product/productById/${obj}`;
  const response = await axios.get(API_URL);
  toast.success(response.data.message, { theme: "colored" });
  return response.data;
};

const rateTheProductService = async (obj) => {
  let API_URL = `${BaseUrl}/product/rateTheProduct`;
  const response = await axios.put(API_URL, obj);
  toast.success(response.data.message, { theme: "colored" });
  return response.data;
};

const getTheSubCategoryService = async (obj) => {
  let API_URL = `${BaseUrl}/subCategory/getAllSubCategory?subCategory=${obj}`;
  const response = await axios.get(API_URL, obj);
  // toast.success(response.data.message, { theme: "colored" });
  return response.data;
};

// const ratingUpdateService = async (obj) => {
//   let API_URL = `${BaseUrl}/product/productReview`;
//   const response = await API.put(API_URL, obj);
//   toast.success(response.data.message, { theme: "colored" });
//   return response.data;
// };

const productService = {
  getTheProductsService,
  getProductByIdService,
  rateTheProductService,
  // ratingUpdateService,
  getTheSubCategoryService,
};

export default productService;
