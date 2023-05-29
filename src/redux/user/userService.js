import { toast } from "react-toastify";
import API from "../../utils/Interceptor";

const registerTheUserService = async (obj) => {
  let API_URL = `user/registerUser`;
  const res = await API.post(API_URL, obj);
  toast.success(res.data.message, { theme: "colored" });
  return res.data;
};

const loginTheUserService = async (obj) => {
  let API_URL = `user/loginUser`;
  const res = await API.post(API_URL, obj);
  toast.success(res.data.message, { theme: "colored" });
  return res.data;
};

const verifyTheOtpService = async (obj) => {
  let API_URL = `user/verifyOtp`;
  const res = await API.post(API_URL, obj);
  // toast.success(res.data.message, { theme: "colored" });
  return res.data;
};

const userService = {
  registerTheUserService,
  loginTheUserService,
  verifyTheOtpService,
};

export default userService;
