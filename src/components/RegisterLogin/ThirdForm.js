import React from "react";
import {
  FieldCol,
  StyledFEM,
  StyledFField,
  StyledFForm,
} from "../../Pages/Register/Register";
import styled from "styled-components";

const ThirdForm = () => {
  return (
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
          placeHolder="************"
        />
        <StyledFEM name="password" />
      </FieldCol>

      <FieldCol>
        <label htmlFor="repeatPassword">
          Repeat Password <p style={{ color: "red" }}>*</p>
        </label>
        <StyledFField
          id="repeatPassword"
          type="password"
          name="repeatPassword"
          placeHolder="************"
        />
        <StyledFEM name="repeatPassword" />
      </FieldCol>
      <RegBtn>
        <button type="submit">Register</button>
      </RegBtn>
    </StyledFForm>
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
