import React from "react";
import {
  FieldCol,
  RegContainer,
  StyledFField,
  StyledFForm,
} from "../../Pages/Register/Register";
import { RegBtn } from "../../components/RegisterLogin/ThirdForm";
import { Formik } from "formik";
import useBreakpoint from "../../hooks/useBreakPoint";
//ImagesImport
import CommonMobNav from "../../components/CommonMTNav/CommonMobNav";
import CommonTabNav from "../../components/CommonMTNav/CommonTabNav";

const Login = () => {
  const { isTablet, isSmallMobile, isMobile } = useBreakpoint();

  return (
    <RegContainer>
      {(isSmallMobile || isMobile) && <CommonMobNav />}
      {(isTablet || isSmallMobile || isMobile) && <CommonTabNav />}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        // onSubmit={onSubmit}
        // validate={validate}
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
              placeHolder="Email"
            />
          </FieldCol>

          <FieldCol>
            <label htmlFor="password">
              Password <p style={{ color: "red" }}>*</p>
            </label>
            <StyledFField
              id="password"
              type="password"
              name="password"
              placeHolder="************"
            />
          </FieldCol>
          <RegBtn>
            <button type="submit">Login</button>
          </RegBtn>
        </StyledFForm>
      </Formik>
    </RegContainer>
  );
};

export default Login;
