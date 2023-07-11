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
import { toast } from "react-toastify";

const RegisterInsurance = () => {
  const navigate = useNavigate();

  const [sessionData] = useState(
    JSON.parse(sessionStorage.getItem("registerInsurance")) ?? {}
  );
  const [ins, setIns] = useState([]);
  console.log("The ins", ins);
  const [insurance, setInsurance] = useState({
    contactName: sessionData[0]?.contactName ?? "",
    certificateNo: sessionData[0]?.certificateNo ?? "",
    phoneOne: sessionData[0]?.phoneOne ?? "",
    phoneTwo: sessionData[0]?.phoneTwo ?? "",
    startDate: sessionData[0]?.startDate ?? "",
    endDate: sessionData[0]?.endDate ?? "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInsurance({
      ...insurance,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIns((prev) => {
      const updatedIns = [...prev, insurance];
      sessionStorage.setItem("registerInsurance", JSON.stringify(updatedIns));
      return updatedIns;
    });
    toast.info("Insurance added", { theme: "colored" });
  };

  return (
    <RegisterDogContainer>
      <Form width="90%">
        <FormHeading>
          {/* <Img src={insurance} alt="insurance" /> */}
        </FormHeading>
        <FormField>
          <FormTextField
            id="outlined-basic"
            label="Contact Name"
            variant="outlined"
            name="contactName"
            value={insurance.contactName}
            onChange={(e) => handleChange(e)}
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
            value={insurance.certificateNo}
            onChange={(e) => handleChange(e)}
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
            value={insurance.phoneOne}
            onChange={(e) => setInsurance({ ...insurance, phoneOne: e })}
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
            value={insurance.phoneTwo}
            onChange={(e) => setInsurance({ ...insurance, phoneTwo: e })}
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
            value={insurance.startDate}
            onChange={(e) =>
              setInsurance({ ...insurance, startDate: e.target.value })
            }
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
            value={insurance.endDate}
            onChange={(e) =>
              setInsurance({ ...insurance, endDate: e.target.value })
            }
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
        <SaveNftBtn onClick={handleSave}>
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
