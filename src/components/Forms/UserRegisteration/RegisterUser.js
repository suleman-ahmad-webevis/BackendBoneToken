import React from "react";
import {
  CombinedFields,
  FieldError,
  Form,
  FormBtn,
  FormField,
  FormHeading,
  FormInput,
  LeftSide,
  Newsletter,
  RegisterContainer,
  RegisterSidebar,
  RightSide,
} from "../UserStyles";
import { Img } from "../../../GlobalStyles";
import One from "../../../assets/images/Forms/One.png";
import Two from "../../../assets/images/Forms/Two.png";
import Register from "../../../assets/images/Forms/Register.png";
import GenderButton from "../GenderSelect";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import Countries from "../../Selectors/Countries";
import { registerTheUser } from "../../../redux/user/userSlice";
import RegistrationDatePicker from "./RegisterationDatePicker";

const RegisterUser = () => {
  const dispatch = useDispatch();
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dob: "",
      gender: "Male",
      countryOfBirth: "",
      streetAddress: "",
      streetAddressLineTwo: "",
      city: "",
      region: "",
      country: "",
      postalZipCode: "",
      phone: 0,
    },
    // validationSchema: registerSchema,
    onSubmit: (data) => {
      dispatch(registerTheUser({ data }));
      // navigate("/otp");
    },
  });
  return (
    <RegisterSidebar>
      <RegisterContainer>
        <LeftSide>
          <Img src={One} alt="Dog" />
        </LeftSide>
        <Form onSubmit={handleSubmit}>
          <FormHeading>
            <Img src={Register} alt="Register" />
          </FormHeading>
          <FormField>
            <FormInput
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            <FieldError>
              {touched.firstName && errors.firstName && <>{errors.firstName}</>}
            </FieldError>
          </FormField>
          <FormField>
            <FormInput
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            <FieldError>
              {touched.lastName && errors.lastName && <>{errors.lastName}</>}
            </FieldError>
          </FormField>
          <FormField>
            <FormInput
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <FieldError>
              {touched.email && errors.email && <>{errors.email}</>}
            </FieldError>
          </FormField>
          <FormField>
            <FormInput
              type="text"
              placeholder="Create Password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <FieldError>
              {touched.password && errors.password && <>{errors.password}</>}
            </FieldError>
          </FormField>
          <FormField>
            <FormInput
              type="text"
              placeholder="Repeat Password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
            <FieldError>
              {touched.confirmPassword && errors.confirmPassword && (
                <>{errors.confirmPassword}</>
              )}
            </FieldError>
          </FormField>
          <CombinedFields>
            <RegistrationDatePicker setFieldValue={setFieldValue} />
            <GenderButton
              gender={values.gender}
              setFieldValue={setFieldValue}
            />
            <FieldError>
              {touched.gender && errors.gender && <>{errors.gender}</>}
            </FieldError>
          </CombinedFields>
          <FormField>
            <FormInput
              type="text"
              placeholder="Country Birth"
              name="countryOfBirth"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.countryOfBirth}
            />
          </FormField>
          <FieldError>
            {touched.countryOfBirth && errors.countryOfBirth && (
              <>{errors.countryOfBirth}</>
            )}
          </FieldError>
          <FormField>
            <FormInput
              type="text"
              placeholder="Street Address"
              name="streetAddress"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.streetAddress}
            />
            <FieldError>
              {touched.streetAddress && errors.streetAddress && (
                <>{errors.streetAddress}</>
              )}
            </FieldError>
          </FormField>
          <FormField>
            <FormInput
              type="text"
              placeholder="Street Address Line 2"
              name="streetAddressLineTwo"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.streetAddressLineTwo}
            />
            <FieldError>
              {touched.streetAddressLineTwo && errors.streetAddressLineTwo && (
                <>{errors.streetAddressLineTwo}</>
              )}
            </FieldError>
          </FormField>
          <CombinedFields>
            <FormField>
              <FormInput
                type="text"
                placeholder="City"
                name="city"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.city}
              />
              <FieldError>
                {touched.city && errors.city && <>{errors.city}</>}
              </FieldError>
            </FormField>
            <FormField>
              <FormInput
                type="text"
                placeholder="Region"
                name="region"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.region}
              />
              <FieldError>
                {touched.region && errors.region && <>{errors.region}</>}
              </FieldError>
            </FormField>
          </CombinedFields>
          <CombinedFields align="base-line">
            <Countries
              country={values.country}
              setFieldValue={setFieldValue}
              width="370px"
            />
            {/* <FieldError>
            {touched.country && errors.country && <>{errors.country}</>}
          </FieldError> */}
            <FormField>
              <FormInput
                type="text"
                placeholder="Postal / Zip Code"
                name="postalZipCode"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.postalZipCode}
              />
              <FieldError>
                {touched.postalZipCode && errors.postalZipCode && (
                  <>{errors.postalZipCode}</>
                )}
              </FieldError>
            </FormField>
          </CombinedFields>
          <PhoneInput
            international
            country="gb"
            countryCallingCodeEditable={true}
            limitMaxLength={true}
            placeholder="(+44) 00000000"
            value={values.phone}
            onBlur={handleBlur}
            onChange={(phone) => setFieldValue("phone", phone)}
          />
          <FieldError>
            {touched.phone && errors.phone && <>{errors.phone}</>}
          </FieldError>
          <FormField>
            <Newsletter>
              <FormInput type="checkbox" />
              <p>Subscribe to newsletter</p>
            </Newsletter>
          </FormField>
          <FormBtn type="submit" width="25%" bg="#3DBB8B">
            Register
          </FormBtn>
        </Form>
        <RightSide>
          <Img src={Two} alt="Dog" />
        </RightSide>
      </RegisterContainer>
    </RegisterSidebar>
  );
};

export default RegisterUser;
