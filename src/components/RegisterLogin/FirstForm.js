import React from "react";
import { Img } from "../../GlobalStyles";
import {
  ConBtn,
  FieldCol,
  StyledFField,
  StyledFForm,
} from "../../Pages/Register/Register";
import styled from "styled-components";
import FBIcon from "../../assets/images/RegisterLogin/FBIcon.png";
import { ErrorMessage, Formik } from "formik";
import { firstFormSchema } from "../../schema/registerLoginSchema";

const FirstForm = ({ setPage }) => {
  //FormikSetup
  const initialValues = {
    name: "",
    mName: "",
    lName: "",
    dob: "",
    email: "",
    phoneNo: "",
  };
  const onSubmit = (values) => {
    console.log("The value", values);
    setPage(1);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={firstFormSchema}
        onSubmit={onSubmit}
      >
        <StyledFForm>
          <h5>New User Registration</h5>
          {/* InputField */}
          <FieldCol>
            <label htmlFor="name">
              Name <p style={{ color: "red" }}>*</p>
            </label>
            <StyledFField
              id="name"
              type="text"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage component="p" name="name" className="error" />
          </FieldCol>
          <FieldCol>
            <label htmlFor="mName">Middle Name</label>
            <StyledFField
              id="mName"
              type="text"
              name="mName"
              placeholder="Middle Name"
            />
            <ErrorMessage component="p" name="mName" className="error" />
          </FieldCol>
          <FieldCol>
            <label htmlFor="lName">
              Last Name <p style={{ color: "red" }}>*</p>
            </label>
            <StyledFField
              id="lName"
              type="text"
              name="lName"
              placeholder="Last Name"
            />
            <ErrorMessage component="p" name="lName" className="error" />
          </FieldCol>
          <FieldCol>
            <label htmlFor="dob">
              Date of Birth <p style={{ color: "red" }}>*</p>
            </label>
            <StyledFField
              id="dob"
              type="text"
              name="dob"
              placeholder="DD/MM/YY"
            />
            <ErrorMessage component="p" name="dob" className="error" />
          </FieldCol>
          <FieldCol>
            <label htmlFor="email">
              Email address <p style={{ color: "red" }}>*</p>
            </label>
            <StyledFField
              id="email"
              type="text"
              name="email"
              placeholder="Email Address"
            />
            <ErrorMessage component="p" name="email" className="error" />
          </FieldCol>
          <FieldCol>
            <label htmlFor="phoneNo">Phone number</label>
            <StyledFField
              id="phoneNo"
              type="text"
              name="phoneNo"
              placeholder="Phone Number"
            />
            <ErrorMessage component="p" name="phoneNo" className="error" />
          </FieldCol>
          <ConBtn>
            <button type="submit">Continue</button>
          </ConBtn>
        </StyledFForm>
      </Formik>
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
