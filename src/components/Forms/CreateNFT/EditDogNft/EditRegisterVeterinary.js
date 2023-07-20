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
import VaccinationTypes from "./VaccinationTypes";
import {
  SaveEditNftBtn,
  SaveNftBtn,
  SaveText,
} from "../RegisterDogNft/CreateNFT.style";

const EditRegisterVeterinary = ({ veterinary }) => {
  const navigate = useNavigate();
  const [vaccinationPadding, setVaccinationPadding] = useState("100px");
  const [selectedVac, setSelectedVac] = useState();
  const [vaccines, setVaccines] = useState([...veterinary.vaccines]);
  const [expiryDate, setExpiryDate] = useState();
  const [vacSerialNo, setVacSerialNo] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setVaccines((prev) => [
      ...prev,
      {
        vacType: selectedVac.vacType ?? "",
        vacSerialNo: vacSerialNo ?? "",
        vacExpiryDate: expiryDate ?? "",
      },
    ]);
    sessionStorage.setItem("registerVeterinary", JSON.stringify(vaccines));
  };

  return (
    <RegisterDogContainer>
      <Form width="90%">
        <FormHeading>
          {/* <Img src={veterinayImage} alt="veterinayImage" /> */}
        </FormHeading>
        <FormField>
          <CategoriesField>
            <VaccinationTypes
              setVaccinationPadding={setVaccinationPadding}
              vaccines={vaccines}
              setSelectedVac={setSelectedVac}
            />
          </CategoriesField>
        </FormField>
        <FormField>
          <FormTextField
            id="outlined-basic"
            label="Vaccination Serial Number"
            variant="outlined"
            position="relative"
            paddingLeft={vaccinationPadding}
            value={vacSerialNo}
            onChange={(e) => setVacSerialNo(e.target.value)}
          />
          <h5
            style={{
              position: "absolute",
              top: "26.5%",
              left: "20px",
              color: "#b7b7b7",
            }}
          >
            {selectedVac?.vacType ? selectedVac?.vacType : vaccines[0]?.vacType}
          </h5>
        </FormField>
        <FormField>
          <FormTextField
            id="insuranceExpiryDate"
            label="Expiry Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </FormField>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SaveNftBtn onClick={(e) => handleSubmit(e)}>
            <SaveText>
              <h1>Save</h1>
            </SaveText>
          </SaveNftBtn>
        </div>
        <PageChanged>
          <div></div>
          {/* Empty <div> to put next on end */}
          <SaveEditNftBtn
            onClick={() => navigate("/edit-dog-nft/insurance-register")}
            style={{ marginBottom: "20px" }}
          >
            Save
          </SaveEditNftBtn>
        </PageChanged>
      </Form>
    </RegisterDogContainer>
  );
};

export default EditRegisterVeterinary;
