import React from "react";
import {
  FieldCol,
  RegContainer,
  StyledFField,
  StyledFForm,
} from "../../Pages/Register/Register";
import { RegBtn } from "../../components/RegisterLogin/ThirdForm";
import { ErrorMessage, Formik } from "formik";
import useBreakpoint from "../../hooks/useBreakPoint";
//ImagesImport
import CommonMobNav from "../../components/CommonMTNav/CommonMobNav";
import CommonTabNav from "../../components/CommonMTNav/CommonTabNav";
import { loginSchema } from "../../schema/registerLoginSchema";
import { loginTheUser } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const { isTablet, isSmallMobile, isMobile } = useBreakpoint();
  //FormikSetup
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    dispatch(loginTheUser({ values }));
  };
  return (
    <RegContainer>
      {(isSmallMobile || isMobile) && <CommonMobNav />}
      {(isTablet || isSmallMobile || isMobile) && <CommonTabNav />}
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        <StyledFForm>
          <h5>Login</h5>
          {/* InputField */}
          <FieldCol>
            <label htmlFor="email">
              Email<p style={{ color: "red" }}>*</p>
            </label>
            <StyledFField
              id="email"
              type="email"
              name="email"
              placeholder="Email"
            />
          </FieldCol>
          <ErrorMessage component="p" name="email" className="error" />
          <FieldCol>
            <label htmlFor="password">
              Password <p style={{ color: "red" }}>*</p>
            </label>
            <StyledFField
              id="password"
              type="password"
              name="password"
              placeholder="************"
            />
          </FieldCol>
          <ErrorMessage component="p" name="password" className="error" />
          <RegBtn>
            <button type="submit">Login</button>
          </RegBtn>
        </StyledFForm>
      </Formik>
    </RegContainer>
  );
};

export default Login;
