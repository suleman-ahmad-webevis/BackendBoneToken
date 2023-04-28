import React from "react";
import Login from "../../../assets/images/Forms/Login.png";
import LoginWrapper from "../../../assets/images/Forms/LoginWrapper.png";
import {
  FieldError,
  Form,
  FormButton,
  FormField,
  FormHeading,
  FormInput,
  LoginContainer,
  RegisterSidebar,
} from "../UserStyles";
import { Img } from "../../../GlobalStyles";
import { loginTheUser } from "../../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { loginSchema } from "../../../schema/userSchema";
import { NavLink } from "react-router-dom";

const UserLogin = () => {
  const dispatch = useDispatch();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (data) => {
        dispatch(loginTheUser(data));
      },
    });
  return (
    <RegisterSidebar>
      <LoginContainer>
        <Form onSubmit={handleSubmit}>
          <FormHeading>
            <Img src={Login} alt="Login" />
          </FormHeading>
          <FormField>
            <FormInput
              type="text"
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
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <FieldError>
              {touched.password && errors.password && <>{errors.password}</>}
            </FieldError>
          </FormField>
          <FormButton type="submit" bg width>
            Login
          </FormButton>
          <NavLink
            style={{
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "19px",
              color: "#B9B9B9",
              textDecoration: "none",
            }}
          >
            Forgot Password?
          </NavLink>
        </Form>
        <FormHeading>
          <Img src={LoginWrapper} alt="LoginWrapper" />
        </FormHeading>
      </LoginContainer>
    </RegisterSidebar>
  );
};

export default UserLogin;
