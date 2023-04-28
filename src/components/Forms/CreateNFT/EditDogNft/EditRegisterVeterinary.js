import React, { useState } from "react";
import {
  CategoriesField,
  FieldError,
  Form,
  FormField,
  FormHeading,
  FormTextField,
  PageChanged,
  RegisterDogContainer,
} from "../../UserStyles";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { registerVeterinarySchema } from "../../../../schema/createDogNftSchema";
import NFTFooter from "./NFTFooter";
import VaccinationTypes from "../../VaccinationTypes";
import {
  SaveEditNftBtn,
  SaveNftBtn,
  SaveText,
} from "../RegisterDogNft/CreateNFT.style";

const EditRegisterVeterinary = () => {
  const [vaccinationPadding, setVaccinationPadding] = useState("100px");
  const navigate = useNavigate();
  const [sessionData, setSessionData] = useState(
    JSON.parse(sessionStorage.getItem("registerVeterinary")) ?? {}
  );
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
      vaccinationTypes: sessionData.vaccinationTypes ?? "Rabies 1 year",
    },
    validationSchema: registerVeterinarySchema,
    onSubmit: (data) => {
      sessionStorage.setItem("registerVeterinary", JSON.stringify(data));
      setSessionData(JSON.parse(sessionStorage.getItem("registerOwner")));
      navigate("/createDogNFT/insuranceRegister");
    },
  });
  return (
    <RegisterDogContainer>
      <Form onSubmit={handleSubmit} width="90%">
        <FormHeading>
          {/* <Img src={veterinayImage} alt="veterinayImage" /> */}
        </FormHeading>
        <FormField>
          <CategoriesField>
            <VaccinationTypes
              vaccinationTypes={values.vaccinationTypes}
              setFieldValue={setFieldValue}
              setVaccinationPadding={setVaccinationPadding}
            />
          </CategoriesField>
        </FormField>
        <FormField>
          <FormTextField
            id="outlined-basic"
            label="Vaccination Serial Number"
            variant="outlined"
            name="price"
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
            position="relative"
            paddingLeft={vaccinationPadding}
          />
          <FieldError>
            {touched.price && errors.price && <>{errors.price}</>}
          </FieldError>
          <h5
            style={{
              position: "absolute",
              top: "26.5%",
              left: "20px",
              color: "#b7b7b7",
            }}
          >
            {values.vaccinationTypes ?? ""}
          </h5>
        </FormField>
        <FormField>
          <FormTextField
            id="insuranceExpiryDate"
            label="Expiry Date"
            type="date"
            value={values.insuranceExpiryDate}
            setFieldValue={setFieldValue}
            onChange={handleChange}
            onBlur={handleBlur}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FieldError>
            {touched.insuranceExpiryDate && errors.insuranceExpiryDate && (
              <>{errors.insuranceExpiryDate}</>
            )}
          </FieldError>
        </FormField>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SaveNftBtn>
            <SaveText>
              <h1>Save</h1>
            </SaveText>
          </SaveNftBtn>
        </div>
        <PageChanged>
          <div></div>
          {/* Empty <div> to put next on end */}
          <SaveEditNftBtn onClick={() => handleSubmit()}>Save</SaveEditNftBtn>
        </PageChanged>
      </Form>
      <NFTFooter />
    </RegisterDogContainer>
  );
};

export default EditRegisterVeterinary;
