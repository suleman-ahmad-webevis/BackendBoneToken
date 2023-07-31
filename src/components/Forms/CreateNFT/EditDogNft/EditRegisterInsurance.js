import React, { useState } from "react";
import { Img } from "../../../../GlobalStyles";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
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
import { toast } from "react-toastify";

const EditRegisterInsurance = ({ insurance }) => {
  const navigate = useNavigate();
  const [sessionData, setSessionData] = useState(
    JSON.parse(sessionStorage.getItem("registerInsurance")) ?? {}
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
      contactName: sessionData?.contactName ?? insurance?.contactName,
      certificateNo: sessionData?.certificateNo ?? insurance?.certificateNo,
      phoneOne: sessionData?.phoneOne ? String(insurance?.phoneOne) : 0,
      phoneTwo: sessionData?.phoneTwo ? String(insurance?.phoneTwo) : 0,
      startDate: sessionData?.startDate ?? insurance?.startDate,
      endDate: sessionData?.endDate ?? insurance?.endDate,
    },
    validationSchema: registerVeterinarySchema,
    onSubmit: (data) => {
      toast.info("Insurance info edited", { theme: "colored" });
      sessionStorage.setItem("registerInsurance", JSON.stringify(data));
      setSessionData(JSON.parse(sessionStorage.getItem("registerInsurance")));
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
            name="phoneOne"
            value={values.phoneOne || ""}
            onChange={(phone) => setFieldValue("phoneOne", phone)}
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
            name="phoneTwo"
            value={values.phoneTwo || ""}
            onChange={(phone) => setFieldValue("phoneTwo", phone)}
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
          <SaveNftBtn onClick={handleSubmit}>
            <SaveText>
              <h1>Save</h1>
            </SaveText>
          </SaveNftBtn>
        </div>
        <PageChanged>
          <div></div>
          {/* Empty <div> to put next on end */}
          <SaveEditNftBtn
            onClick={() => navigate("/edit-dog-nft/dogShow-register")}
            style={{ marginBottom: "20px" }}
          >
            Save
          </SaveEditNftBtn>
        </PageChanged>
      </Form>
    </RegisterDogContainer>
  );
};

export default EditRegisterInsurance;
