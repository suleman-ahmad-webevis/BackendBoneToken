import React, { useState } from "react";
import { Img } from "../../../../GlobalStyles";
import PhoneInput from "react-phone-input-2";
import Phone from "../../../../assets/images/GrayPhone.png";
import {
  FieldError,
  Form,
  FormField,
  FormHeading,
  FormTextField,
  PageChanged,
  PhoneIcon,
  RegisterDogContainer,
} from "../../UserStyles";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { registerVeterinarySchema } from "../../../../schema/createDogNftSchema";
import {
  SaveEditNftBtn,
  SaveNftBtn,
  SaveText,
} from "../RegisterDogNft/CreateNFT.style";

const EditRegisterInsurance = () => {
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
      contactName: sessionData.contactName ?? "",
      certificateNo: sessionData.certificateNo ?? "",
      insuranceContactNo: sessionData.insuranceContactNo ?? "",
      startDate: sessionData.startDate ?? "",
      endDate: sessionData.endDate ?? "",
    },
    validationSchema: registerVeterinarySchema,
    onSubmit: (data) => {
      sessionStorage.setItem("registerVeterinary", JSON.stringify(data));
      setSessionData(JSON.parse(sessionStorage.getItem("registerOwner")));
      navigate("/createDogNFT/dogShowRegister");
    },
  });

  return (
    <RegisterDogContainer>
      <Form onSubmit={handleSubmit} width="90%">
        <FormHeading></FormHeading>
        <FormField>
          <FormTextField
            id="outlined-basic"
            label="Contact Name"
            variant="outlined"
            name="contactName"
            value={values.contactName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldError>
            {touched.contactName && errors.contactName && (
              <>{errors.contactName}</>
            )}
          </FieldError>
        </FormField>
        <FormField>
          <FormTextField
            id="outlined-basic"
            label="Certificate Number"
            variant="outlined"
            name="certificateNo"
            value={values.certificateNo}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <FieldError>
            {touched.certificateNo && errors.certificateNo && (
              <>{errors.certificateNo}</>
            )}
          </FieldError>
        </FormField>
        <FormField>
          <PhoneInput
            international
            country="gb"
            countryCallingCodeEditable={true}
            limitMaxLength={true}
            placeholder="(+44) 00000000"
            name="insuranceContactNo"
            value={values.emergencyContactNo}
            onChange={(phone) => setFieldValue("insuranceContactNo", phone)}
            onBlur={handleBlur}
          />
          <PhoneIcon>
            <Img src={Phone} alt="phone" />
          </PhoneIcon>
          <FieldError>
            {touched.emergencyContactNo && errors.emergencyContactNo && (
              <>{errors.emergencyContactNo}</>
            )}
          </FieldError>
        </FormField>
        <FormField>
          <PhoneInput
            international
            country="gb"
            countryCallingCodeEditable={true}
            limitMaxLength={true}
            placeholder="(+44) 00000000"
            name="insuranceContactNo"
            value={values.emergencyContactNo}
            onChange={(phone) => setFieldValue("insuranceContactNo", phone)}
            onBlur={handleBlur}
          />
          <PhoneIcon>
            <Img src={Phone} alt="phone" />
          </PhoneIcon>
          <FieldError>
            {touched.emergencyContactNo && errors.emergencyContactNo && (
              <>{errors.emergencyContactNo}</>
            )}
          </FieldError>
        </FormField>
        <FormField>
          <FormTextField
            id="startDate"
            label="Start Date"
            type="date"
            value={values.startDate}
            setFieldValue={setFieldValue}
            onChange={handleChange}
            onBlur={handleBlur}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FieldError>
            {touched.startDate && errors.startDate && <>{errors.startDate}</>}
          </FieldError>
        </FormField>
        <FormField>
          <FormTextField
            id="endDate"
            label="End Date"
            type="date"
            name="endDate"
            value={values.endDate}
            setFieldValue={setFieldValue}
            onChange={handleChange}
            onBlur={handleBlur}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FieldError>
            {touched.endDate && errors.endDate && <>{errors.endDate}</>}
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
    </RegisterDogContainer>
  );
};

export default EditRegisterInsurance;
