import * as yup from "yup";

export const registerSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Your password is too short.")
    .max(14, "Password can't be greater than 14 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .min(8, "Your password is too short.")
    .max(14, "Password can't be greater than 14 characters")
    .oneOf([yup.ref("password"), null], "Password must match"),
  gender: yup.string().required("Gender is required"),
  countryOfBirth: yup.string().required("Country of birth is required"),
  streetAddress: yup.string().required("Street address is required"),
  streetAddressLineTwo: yup.string().required("Street address two is required"),
  city: yup.string().required("City is required"),
  region: yup.string().required("Region is required"),
  country: yup.string().required("Country is required"),
  postalZipCode: yup.string().required("Postal Code is required"),
  // phone: yup
  //   .number()
  //   .required("Phone is required")
  //   .min(10, "Your password is too short.")
  //   .max(15, "Phone can't be greater than 15 characters"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("Password is required"),
});
