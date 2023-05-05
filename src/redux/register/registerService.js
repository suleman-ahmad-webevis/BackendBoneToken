import API from "../../utils/Interceptor";

const registerTheDog = async (obj) => {
  let API_URL = ``;
  const response = await API.post(API_URL);
  // toast.success(response.data.message, { theme: "colored" });
  return response.data;
};

const registerTheOwner = async (obj) => {
  let API_URL = ``;
  const response = await API.post(API_URL);
  // toast.success(response.data.message, { theme: "colored" });
  return response.data;
};

const registerTheVeterinary = async (obj) => {
  let API_URL = ``;
  const response = await API.post(API_URL);
  // toast.success(response.data.message, { theme: "colored" });
  return response.data;
};

const registerTheDogShow = async (obj) => {
  let API_URL = ``;
  const response = await API.post(API_URL);
  // toast.success(response.data.message, { theme: "colored" });
  return response.data;
};

const registerService = {
  registerTheDog,
  registerTheOwner,
  registerTheVeterinary,
  registerTheDogShow,
};

export default registerService;
