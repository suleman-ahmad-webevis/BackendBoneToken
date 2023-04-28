import React from "react";
import { Img } from "../../GlobalStyles";
import {
  ConBtn,
  FieldCol,
  StyledFEM,
  StyledFField,
  StyledFForm,
} from "../../Pages/Register/Register";
import styled from "styled-components";
import FBIcon from "../../assets/images/RegisterLogin/FBIcon.png";

const FirstForm = ({ setPage }) => {
  const formHandler = () => {
    setPage(1);
  };
  return (
    <>
      <StyledFForm>
        <h5>New User Registration</h5>
        {/* InputField */}
        <FieldCol>
          <label htmlFor="name">
            Name <p style={{ color: "red" }}>*</p>
          </label>
          <StyledFField id="name" type="text" name="name" placeHolder="Name" />
          <StyledFEM name="name" />
        </FieldCol>

        <FieldCol>
          <label htmlFor="middleName">Middle Name</label>
          <StyledFField
            id="middleName"
            type="text"
            name="middleName"
            placeHolder="Middle Name"
          />
          <StyledFEM name="middleName" />
        </FieldCol>

        <FieldCol>
          <label htmlFor="lastName">
            Last Name <p style={{ color: "red" }}>*</p>
          </label>
          <StyledFField
            id="lastName"
            type="text"
            name="lastName"
            placeHolder="Last Name"
          />
          <StyledFEM name="lastName" />
        </FieldCol>

        <FieldCol>
          <label htmlFor="dateOfBirth">
            Date of Birth <p style={{ color: "red" }}>*</p>
          </label>
          <StyledFField
            id="dateOfBirth"
            type="text"
            name="dateOfBirth"
            placeHolder="DD/MM/YY"
          />
          <StyledFEM name="dateOfBirth" />
        </FieldCol>

        <FieldCol>
          <label htmlFor="emailAddress">
            Email address <p style={{ color: "red" }}>*</p>
          </label>
          <StyledFField
            id="emailAddress"
            type="text"
            name="emailAddress"
            placeHolder="Email Address"
          />
          <StyledFEM name="emailAddress" />
        </FieldCol>

        <FieldCol>
          <label htmlFor="phoneNo">Phone number</label>
          <StyledFField
            id="phoneNo"
            type="text"
            name="phoneNo"
            placeHolder="Phone Number"
          />
          <StyledFEM name="phoneNo" />
        </FieldCol>
        <ConBtn>
          <button onClick={() => formHandler()}>Continue</button>
        </ConBtn>
      </StyledFForm>
      <FBBtn>
        <Img src={FBIcon} />
        <h5>Continue With Facebook</h5>
      </FBBtn>
    </>
  );
};

export const FBBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
  width: 65%;
  margin: auto;
  background: linear-gradient(180deg, #00b2ff -0.91%, #006aff 104.26%);
  border-radius: 8px;
  padding: 12px 20px;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  h5 {
    color: #fff;
    font-weight: 600;
    font-size: 14px;
  }
`;

export default FirstForm;
