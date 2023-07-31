import { toast } from "react-toastify";
import API from "../../utils/Interceptor";

const getUserOrders = async (obj) => {
  let API_URL = `order/myOrder/${obj.userId}`;
  const res = await API.get(API_URL);
  return res?.data;
};

const deleteOrderById = async (obj) => {
  let API_URL = `order/deleteOrder/${obj.id}`;
  const res = await API.delete(API_URL);
  if (res.status === 200 || res.status === 201) {
    toast.success("Item deleted from order", { theme: "colored" });
  }
};

const orderServices = {
  getUserOrders,
  deleteOrderById,
};

export default orderServices;
