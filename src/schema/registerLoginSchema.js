import * as yup from "yup";

export const firstFormSchema = yup.object({
  name: yup.string().required("Required!"),
  lName: yup.string().required("Required!"),
  //dob
  email: yup.string().email("Invalid email").required("Required!"),
});

export const secondFormSchema = yup.object({
  sAddress: yup.string().required("Required!"),
  sAddressLine: yup.string().required("Required!"),
  city: yup.string().required("Required!"),
  region: yup.string().required("Required!"),
  country: yup.string().required("Required!"),
  postalZipCode: yup.string().required("Required!"),
});

export const thirdFormSchema = yup.object({
  password: yup.string().required("Required!"),
  repeatPassword: yup.string().required("Required!"),
});

export const loginSchema = yup.object({
  email: yup.string().email("Invalid email").required("Required!"),
  password: yup.string().required("Required!"),
});
