import React from "react";
import {
  FieldCol,
  StyledFField,
  StyledFForm,
} from "../../Pages/Register/Register";
import styled from "styled-components";
import { ErrorMessage, Formik } from "formik";
import { thirdFormSchema } from "../../schema/registerLoginSchema";
import { useDispatch } from "react-redux";
import { registerTheUser } from "../../redux/user/userSlice";

const ThirdForm = () => {
  const dispatch = useDispatch();
  //FormikSetup
  const initialValues = {
    password: "",
    repeatPassword: "",
  };
  const onSubmit = (values) => {
    const firstForm = sessionStorage.getItem("firstForm");
    const secondForm = sessionStorage.getItem("secondForm");
    dispatch(registerTheUser({firstForm, secondForm, values}));
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={thirdFormSchema}
      onSubmit={onSubmit}
    >
      <StyledFForm>
        <h5>New User Registration</h5>
        {/* InputField */}
        <FieldCol>
          <label htmlFor="password">
            Create Password <p style={{ color: "red" }}>*</p>
          </label>
          <StyledFField
            id="password"
            type="password"
            name="password"
            placeholder="************"
          />
          <ErrorMessage component="p" name="password" className="error" />
        </FieldCol>

        <FieldCol>
          <label htmlFor="repeatPassword">
            Repeat Password <p style={{ color: "red" }}>*</p>
          </label>
          <StyledFField
            id="repeatPassword"
            type="password"
            name="repeatPassword"
            placeholder="************"
          />
          <ErrorMessage component="p" name="repeatPassword" className="error" />
        </FieldCol>
        <RegBtn>
          <button type="submit">Register</button>
        </RegBtn>
      </StyledFForm>
    </Formik>
  );
};

export const RegBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    background: #0e626d;
    border-radius: 8px;
    border: none;
    padding: 10px 50px;
    font-weight: 700;
    font-size: 16px;
    color: #ffffff;
  }
`;
export default ThirdForm;
