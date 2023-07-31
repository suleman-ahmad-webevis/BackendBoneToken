import { toast } from "react-toastify";
import API from "../../utils/Interceptor";

const createCheckoutSession = async (obj) => {
  let API_URL = `payment/createCheckoutSession`;
  const res = await API.post(API_URL, obj);
  toast.success(res.data.message, { theme: "colored" });
  if (res?.data?.url) {
    window.location.href = res?.data?.url;
  }
  return res.data;
};

const createOrder = async (obj) => {
  let API_URL = `order/newOrder`;
  const res = await API.post(API_URL, obj);
  toast.success("Order created", { theme: "colored" });
  // if (res?.data?.url) {
  //   window.location.href = res?.data?.url;
  // }
  // return res.data;
};

const paymentService = {
  createCheckoutSession,
  createOrder,
};

export default paymentService;
