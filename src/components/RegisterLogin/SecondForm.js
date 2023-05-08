import React from "react";
import {
  ConBtn,
  FieldCol,
  StyledFField,
  StyledFForm,
} from "../../Pages/Register/Register";
import Location from "../../assets/images/RegisterLogin/Location.png";
import { Img } from "../../GlobalStyles";
import { ErrorMessage, Formik } from "formik";
import { secondFormSchema } from "../../schema/registerLoginSchema";

const SecondForm = ({ setPage }) => {
  //FormikSetup
  const initialValues = {
    sAddress: "",
    sAddressLine: "",
    city: "",
    region: "",
    country: "",
    postalZipCode: "",
  };
  const onSubmit = (values) => {
    console.log("The value", values);
    setPage(2);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={secondFormSchema}
      onSubmit={onSubmit}
    >
      <StyledFForm>
        <h5>New User Registration</h5>
        {/* InputField */}
        <FieldCol>
          <label htmlFor="sAddress">
            Street Address <p style={{ color: "red" }}>*</p>
          </label>
          <StyledFField
            id="sAddress"
            type="text"
            name="sAddress"
            placeholder="-----"
            style={{ paddingLeft: "35px" }}
          />
          <Img src={Location} alt="location-icon" />
          <ErrorMessage component="p" name="sAddress" className="error" />
        </FieldCol>

        <FieldCol>
          <label htmlFor="sAddressLine">Street Address Line 2</label>
          <StyledFField
            id="sAddressLine"
            type="text"
            name="sAddressLine"
            placeholder="-----"
            style={{ paddingLeft: "35px" }}
          />
          <Img src={Location} alt="location-icon" />
          <ErrorMessage component="p" name="sAddressLine" className="error" />
        </FieldCol>

        <FieldCol>
          <label htmlFor="city">
            City<p style={{ color: "red" }}>*</p>
          </label>
          <StyledFField
            id="city"
            type="text"
            name="city"
            placeholder="-----"
            style={{ paddingLeft: "35px" }}
          />
          <Img src={Location} alt="location-icon" />
          <ErrorMessage component="p" name="city" className="error" />
        </FieldCol>

        <FieldCol>
          <label htmlFor="region">
            Region <p style={{ color: "red" }}>*</p>
          </label>
          <StyledFField
            id="region"
            type="text"
            name="region"
            placeholder="-----"
            style={{ paddingLeft: "35px" }}
          />
          <Img src={Location} alt="location-icon" />
          <ErrorMessage component="p" name="region" className="error" />
        </FieldCol>

        <FieldCol>
          <label htmlFor="country">
            Country <p style={{ color: "red" }}>*</p>
          </label>
          <StyledFField
            id="country"
            type="text"
            name="country"
            placeholder="-----"
            style={{ paddingLeft: "35px" }}
          />
          <Img src={Location} alt="location-icon" />
          <ErrorMessage component="p" name="country" className="error" />
        </FieldCol>

        <FieldCol>
          <label htmlFor="postalZipCode">
            Postal / Zip Code <p style={{ color: "red" }}>*</p>
          </label>
          <StyledFField
            id="postalZipCode"
            type="text"
            name="postalZipCode"
            placeholder="-----"
          />
          <ErrorMessage component="p" name="postalZipCode" className="error" />
        </FieldCol>
        <ConBtn>
          <button type="submit">Continue</button>
        </ConBtn>
      </StyledFForm>
    </Formik>
  );
};

export default SecondForm;
