import React, { useState } from "react";
import { Img } from "../../../../GlobalStyles";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Phone from "../../../../assets/images/GrayPhone.png";
import Next from "../../../../assets/images/Next.png";
import Back from "../../../../assets/images/Back.png";
import {
  Form,
  FormField,
  FormHeading,
  FormTextField,
  NextButton,
  PageChanged,
  PhoneIcon,
  RegisterDogContainer,
} from "../../UserStyles";
import { useNavigate } from "react-router-dom";
// import { registerInsuranceSchema } from "../../../../schema/createDogNftSchema";
import { SaveNftBtn, SaveText } from "./CreateNFT.style";
import { useFormik } from "formik";
import { toast } from "react-toastify";

const RegisterInsurance = () => {
  const navigate = useNavigate();

  const [sessionData, setSessionData] = useState(
    JSON.parse(sessionStorage.getItem("registerDog")) ?? {}
  );

  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      contactName: sessionData.contactName ?? "",
      certificateNo: sessionData.certificateNo ?? "",
      phoneOne: sessionData.phoneOne ?? "",
      phoneTwo: sessionData.phoneTwo ?? "",
      startDate: sessionData.startDate ?? "",
      endDate: sessionData.endDate ?? "",
    },
    onSubmit: (data) => {
      sessionStorage.setItem("registerInsurance", JSON.stringify(data));
      setSessionData(JSON.parse(sessionStorage.getItem("registerInsurance")));
      toast.info("Insurance added", { theme: "colored" });
    },
  });

  return (
    <RegisterDogContainer>
      <Form width="90%" onSubmit={handleSubmit}>
        <FormHeading>
          {/* <Img src={insurance} alt="insurance" /> */}
        </FormHeading>
        <FormField>
          <FormTextField
            id="outlined-basic"
            label="Contact Name"
            variant="outlined"
            name="contactName"
            value={values.contactName}
            onChange={handleChange}
            // onBlur={handleBlur}
          />
          {/* <FieldError>
          {touched.contactName && errors.contactName && (
              <>{errors.contactName}</>
            )} 
          </FieldError>*/}
        </FormField>
        <FormField>
          <FormTextField
            id="outlined-basic"
            label="Certificate Number"
            variant="outlined"
            name="certificateNo"
            value={values.certificateNo}
            onChange={handleChange}
            // onBlur={handleBlur}
          />
          {/* <FieldError>
            {touched.certificateNo && errors.certificateNo && (
              <>{errors.certificateNo}</>
            )}
          </FieldError> */}
        </FormField>
        <FormField>
          <PhoneInput
            international
            country="gb"
            countryCallingCodeEditable={true}
            limitMaxLength={true}
            placeholder="(+44) 00000000"
            name="phoneOne"
            value={values.phoneOne}
            onChange={(phone) => setFieldValue("phoneOne", phone)}
            // onBlur={handleBlur}
          />
          <PhoneIcon>
            <Img src={Phone} alt="phone" />
          </PhoneIcon>
          {/* <FieldError>
            {touched.insuranceContactNo && errors.insuranceContactNo && (
              <>{errors.insuranceContactNo}</>
            )}
          </FieldError> */}
        </FormField>
        <FormField>
          <PhoneInput
            international
            country="gb"
            countryCallingCodeEditable={true}
            limitMaxLength={true}
            placeholder="(+44) 00000000"
            name="phoneTwo"
            value={values.phoneTwo}
            onChange={(phone) => setFieldValue("phoneTwo", phone)}
            // onBlur={handleBlur}
          />
          <PhoneIcon>
            <Img src={Phone} alt="phone" />
          </PhoneIcon>
          {/* <FieldError>
            {touched.insuranceContactNo && errors.insuranceContactNo && (
              <>{errors.insuranceContactNo}</>
            )}
          </FieldError> */}
        </FormField>
        <FormField>
          <FormTextField
            id="startDate"
            label="Start Date"
            type="date"
            name="startDate"
            value={values.startDate}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            // setFieldValue={setFieldValue}
            // onChange={handleChange}
            // onBlur={handleBlur}
          />
          {/* <FieldError>
            {touched.startDate && errors.startDate && <>{errors.startDate}</>}
          </FieldError> */}
        </FormField>
        <FormField>
          <FormTextField
            id="endDate"
            label="End Date"
            type="date"
            name="endDate"
            value={values.endDate}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
            // setFieldValue={setFieldValue}
            // onChange={handleChange}
            // onBlur={handleBlur}
          />
          {/* <FieldError>
            {touched.endDate && errors.endDate && <>{errors.endDate}</>}
          </FieldError> */}
        </FormField>
        <SaveNftBtn onClick={handleSubmit}>
          <SaveText>
            <h1>Save</h1>
          </SaveText>
        </SaveNftBtn>
        <PageChanged>
          <NextButton Back>
            <Img
              src={Back}
              alt="back"
              onClick={() => {
                navigate("/createDogNFT/register-veterinary");
              }}
            />
          </NextButton>
          <NextButton
            onClick={() => {
              navigate("/create-dog-nft/register-dogShow");
            }}
          >
            <Img src={Next} alt="next" />
          </NextButton>
        </PageChanged>
      </Form>
    </RegisterDogContainer>
  );
};

export default RegisterInsurance;
