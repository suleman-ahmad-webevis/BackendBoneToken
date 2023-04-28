import React from "react";
import {
  ConBtn,
  FieldCol,
  StyledFEM,
  StyledFField,
  StyledFForm,
} from "../../Pages/Register/Register";
import Location from "../../assets/images/RegisterLogin/Location.png";
import { Img } from "../../GlobalStyles";

const SecondForm = ({ setPage }) => {
  const formHandler = () => {
    setPage(2);
  };
  return (
    <StyledFForm>
      <h5>New User Registration</h5>
      {/* InputField */}
      <FieldCol>
        <label htmlFor="streetAddress">
          Street Address <p style={{ color: "red" }}>*</p>
        </label>
        <StyledFField
          id="streetAddress"
          type="text"
          name="streetAddress"
          placeHolder="-----"
          style={{ paddingLeft: "35px" }}
        />
        <Img src={Location} alt="location-icon" />
        <StyledFEM name="streetAddress" />
      </FieldCol>

      <FieldCol>
        <label htmlFor="streetAddressLine">Street Address Line 2</label>
        <StyledFField
          id="streetAddressLine"
          type="text"
          name="streetAddressLine"
          placeHolder="-----"
          style={{ paddingLeft: "35px" }}
        />
        <Img src={Location} alt="location-icon" />
        <StyledFEM name="streetAddressLine" />
      </FieldCol>

      <FieldCol>
        <label htmlFor="city">
          City<p style={{ color: "red" }}>*</p>
        </label>
        <StyledFField
          id="city"
          type="text"
          name="city"
          placeHolder="-----"
          style={{ paddingLeft: "35px" }}
        />
        <Img src={Location} alt="location-icon" />
        <StyledFEM name="city" />
      </FieldCol>

      <FieldCol>
        <label htmlFor="region">
          Region <p style={{ color: "red" }}>*</p>
        </label>
        <StyledFField
          id="region"
          type="text"
          name="region"
          placeHolder="-----"
          style={{ paddingLeft: "35px" }}
        />
        <Img src={Location} alt="location-icon" />
        <StyledFEM name="region" />
      </FieldCol>

      <FieldCol>
        <label htmlFor="country">
          Country <p style={{ color: "red" }}>*</p>
        </label>
        <StyledFField
          id="country"
          type="text"
          name="country"
          placeHolder="-----"
          style={{ paddingLeft: "35px" }}
        />
        <Img src={Location} alt="location-icon" />
        <StyledFEM name="country" />
      </FieldCol>

      <FieldCol>
        <label htmlFor="postalZipCode">
          Postal / Zip Code <p style={{ color: "red" }}>*</p>
        </label>
        <StyledFField
          id="postalZipCode"
          type="text"
          name="postalZipCode"
          placeHolder="-----"
        />
        <StyledFEM name="postalZipCode" />
      </FieldCol>
      <ConBtn>
        <button onClick={() => formHandler()}>Continue</button>
      </ConBtn>
    </StyledFForm>
  );
};

export default SecondForm;
