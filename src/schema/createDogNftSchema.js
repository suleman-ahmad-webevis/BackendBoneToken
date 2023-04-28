import * as yup from "yup";

export const registerDogSchema = yup.object().shape({
  dogName: yup.string().required("Dog name is required"),
  breed: yup.string().required("Breed is required"),
  dogPic: yup.string(),
  dogVideoLink: yup.string(),
  dob: yup.date(),
  gender: yup.string(),
  countryOfBirth: yup.string(),
  location: yup.string(),
  dogMotherName: yup.string(),
  dogMotherPic: yup.string(),
  dogMotherNftNo: yup.string(),
  dogFatherName: yup.string(),
  dogFatherPic: yup.string(),
  dogFatherNftNo: yup.string(),
  weight: yup.string(),
  height: yup.string(),
  length: yup.string(),
  coatType: yup.string(),
  price: yup.string(),
  currency: yup.string(),
});

export const registerOwnerSchema = yup.object().shape({
  ownerName: yup.string().required("Owner name is required"),
  ownerPic: yup.string(),
  ownerVideoLink: yup.string(),
  areYouBreeder: yup.string(),
  breederKennelName: yup.string(),
  email: yup.string(),
  website: yup.string(),
  phone: yup.string(),
  location: yup.string(),
  fbPage: yup.string(),
  instaPage: yup.string(),
});

export const registerVeterinarySchema = yup.object().shape({
  vaccinationTypes: yup.string(),
});

export const registerInsuranceSchema = yup.object().shape({
  contactName: yup.string(),
  insuranceContactNo: yup.string(),
  certificateNo: yup.string(),
  startDate: yup.date(),
  endDate: yup.date(),
});

export const registerDogShowSchema = yup.object().shape({
  showName: yup.string(),
  officialShowName: yup.string(),
  descriptionOfEvent: yup.string(),
  country: yup.string(),
  location: yup.string(),
  date: yup.date(),
  class: yup.string(),
  judge: yup.string(),
  result: yup.string(),
});
