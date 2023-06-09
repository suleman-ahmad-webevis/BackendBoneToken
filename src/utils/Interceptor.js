import axios from "axios";
import { store } from "../redux/store";
//This is axios instance

const API = axios.create({
  // baseURL: "https://btoken-backend.herokuapp.com",
  // baseURL: "https://backendbt.up.railway.app",
  // baseURL: "http://localhost:5000",
  // baseURL: "https://cooperative-kilt-tuna.cyclic.app",
  baseURL: "https://outstanding-moth-boot.cyclic.app",
  timeout: 90000,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

//Here creating interceptor for instance
//The axios interceptor takes 2 arguments. 1st argument of config and 2nd argument of error

API.interceptors.request.use(
  (req) => {
    const storeVal = store?.getState();
    if (
      storeVal?.user?.userInfo?.token !== null &&
      storeVal?.user?.userInfo?.token !== undefined
    ) {
      const token = storeVal?.user?.userInfo?.token;
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (err) => {
    console.log("The error in interceptor", err);
  }
);

export default API;
