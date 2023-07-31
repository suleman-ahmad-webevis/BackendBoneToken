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
import { toast } from "react-toastify";

const EditRegisterVeterinary = ({ veterinary }) => {
  const navigate = useNavigate();
  const [vaccinationPadding, setVaccinationPadding] = useState("100px");
  const [newVaccines, setNewVaccines] = useState([...veterinary?.vaccines]);
  const [vacType, setVacType] = useState(null);
  const [vacExpiryDate, setVacExpiryDate] = useState(null);
  const [vacSerialNo, setVacSerialNo] = useState(null);
  const [activeIdx, setActiveIdx] = useState(0);
  let filteredArray;
  const handleSubmit = (e) => {
    e.preventDefault();
    const newVacc = {
      vacType: vacType,
      vacSerialNo: vacSerialNo,
      vacExpiryDate: vacExpiryDate,
    };
    newVaccines.push(newVacc);
    filteredArray = newVaccines?.filter(
      (obj) => obj?.vacType !== newVacc?.vacType
    );
    filteredArray?.push(newVacc);
    toast.info("Vaccine info edited", { theme: "colored" });
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
              vacType={vacType}
              setVacType={setVacType}
              newVaccines={newVaccines}
              activeIdx={activeIdx}
              setActiveIdx={setActiveIdx}
            />
          </CategoriesField>
        </FormField>
        <FormField>
          <FormTextField
            id="outlined-basic"
            label={activeIdx?.vacSerialNo}
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
            {vacType ? vacType : newVaccines[0]?.vacType}
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
            value={vacExpiryDate}
            onChange={(e) => setVacExpiryDate(e.target.value)}
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
            onClick={() => {
              const withoutIds = filteredArray?.filter(
                (val) => !val.hasOwnProperty("_id")
              );
              if (withoutIds?.length) {
                const stored = {
                  _id: veterinary?._id,
                  createdAt: veterinary?.createdAt,
                  vaccines: [...withoutIds],
                  updatedAt: veterinary?.updatedAt,
                  __v: 0,
                };
                sessionStorage.setItem(
                  "registerVeterinary",
                  JSON.stringify(stored)
                );

                navigate("/edit-dog-nft/insurance-register");
              } else {
                navigate("/edit-dog-nft/insurance-register");
              }
            }}
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
