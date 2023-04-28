import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import Next from "../../../../assets/images/Next.png";
import Back from "../../../../assets/images/Back.png";
import Phone from "../../../../assets/images/GrayPhone.png";
import { useFormik } from "formik";
import {
  CombinedFields,
  FieldError,
  Form,
  FormField,
  FormHeading,
  FormTextField,
  NextButton,
  PageChanged,
  PhoneIcon,
  RegisterDogContainer,
  Upload,
  UploadText,
  FileAccept,
} from "../../UserStyles";
import { Img } from "../../../../GlobalStyles";
import uploadImage from "../../../../assets/images/upload.png";
import { useNavigate } from "react-router-dom";
import { registerOwnerSchema } from "../../../../schema/createDogNftSchema";
import Transparent from "../../../../assets/images/transparent.png";
import NFTFooter from "./NFTFooter";
import { useRef } from "react";
import ROTab from "./Tab/ROTab";
import useBreakpoint from "../../../../hooks/useBreakPoint";

const RegisterOwner = () => {
  const { isDesktop, isTablet, isSmallMobile, isMobile } = useBreakpoint();

  const navigate = useNavigate();
  const [sessionData, setSessionData] = useState(
    JSON.parse(sessionStorage.getItem("registerOwner")) ?? {}
  );
  const uploadedImage = useRef(null);
  const imageUploader = useRef(null);
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
      ownerName: sessionData.ownerName ?? "",
      ownerPic: sessionData.ownerPic ?? "",
      ownerVideoLink: sessionData.ownerVideoLink ?? "",
      areYouBreeder: sessionData.areYouBreeder ?? "",
      breederKennelName: sessionData.breederKennelName ?? "",
      email: sessionData.email ?? "",
      website: sessionData.website ?? "",
      phone: sessionData.phone ?? "",
      location: sessionData.location ?? "",
      fbPage: sessionData.fbPage ?? "",
      instaPage: sessionData.instaPage ?? "",
    },
    validationSchema: registerOwnerSchema,
    onSubmit: (data) => {
      sessionStorage.setItem("registerOwner", JSON.stringify(data));
      setSessionData(JSON.parse(sessionStorage.getItem("registerOwner")));
      navigate("/createDogNFT/veterinaryRegister");
    },
  });

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
        setFieldValue("ownerPic", current.src);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      {isDesktop ? (
        <RegisterDogContainer>
          <Form onSubmit={handleSubmit} width="90%">
            <FormHeading>{/* <Img src={owner} alt="Owner" /> */}</FormHeading>
            <FormField>
              <FormTextField
                id="outlined-basic"
                label="Owner Name *"
                variant="outlined"
                name="ownerName"
                value={values.ownerName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FieldError>
                {touched.ownerName && errors.ownerName && (
                  <>{errors.ownerName}</>
                )}
              </FieldError>
            </FormField>
            <FormField style={{ width: "50%" }}>
              <CombinedFields>
                <Upload onClick={() => imageUploader.current.click()}>
                  <input
                    type="file"
                    accept="image/*"
                    name="ownerPic"
                    onChange={(e) => handleImageUpload(e)}
                    ref={imageUploader}
                    style={{
                      display: "none",
                    }}
                  />
                  <img src={uploadImage} alt="img" />
                  <UploadText>Photo upload</UploadText>
                  <FileAccept>
                    <Img ref={uploadedImage} src={Transparent} alt="img" />
                  </FileAccept>
                </Upload>
              </CombinedFields>
            </FormField>
            <FormField>
              <FormTextField
                id="outlined-basic"
                label="Owner Video Link *"
                variant="outlined"
                name="ownerVideoLink"
                value={values.ownerVideoLink}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FieldError>
                {touched.ownerVideoLink && errors.ownerVideoLink && (
                  <>{errors.ownerVideoLink}</>
                )}
              </FieldError>
            </FormField>
            <FormField>
              <FormTextField
                id="outlined-basic"
                label="Are you dog breeder?"
                variant="outlined"
                name="areYouBreeder"
                value={values.areYouBreeder}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FieldError>
                {touched.areYouBreeder && errors.areYouBreeder && (
                  <>{errors.areYouBreeder}</>
                )}
              </FieldError>
            </FormField>
            <FormField>
              <FormTextField
                id="outlined-basic"
                label="Breeder Kennel name"
                variant="outlined"
                name="breederKennelName"
                value={values.breederKennelName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FieldError>
                {touched.breederKennelName && errors.breederKennelName && (
                  <>{errors.breederKennelName}</>
                )}
              </FieldError>
            </FormField>
            <FormField>
              <FormTextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FieldError>
                {touched.email && errors.email && <>{errors.email}</>}
              </FieldError>
            </FormField>
            <FormField>
              <FormTextField
                id="outlined-basic"
                label="Website"
                variant="outlined"
                name="website"
                value={values.website}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FieldError>
                {touched.website && errors.website && <>{errors.website}</>}
              </FieldError>
            </FormField>
            <FormField>
              <PhoneInput
                international
                country="gb"
                countryCallingCodeEditable={true}
                limitMaxLength={true}
                placeholder="(+44) 00000000"
                name="phone"
                id="phone"
                value={values.phone}
                onChange={(phone) => setFieldValue("phone", phone)}
                onBlur={handleBlur}
              />
              <PhoneIcon>
                <Img src={Phone} alt="phone" />
              </PhoneIcon>
              <FieldError>
                {touched.phone && errors.phone && <>{errors.phone}</>}
              </FieldError>
            </FormField>
            <FormField>
              <FormTextField
                id="outlined-basic"
                label="Location"
                variant="outlined"
                name="location"
                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FieldError>
                {touched.location && errors.location && <>{errors.location}</>}
              </FieldError>
            </FormField>
            <FormField>
              <FormTextField
                id="outlined-basic"
                label="Facebook Page"
                variant="outlined"
                name="fbPage"
                value={values.fbPage}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FieldError>
                {touched.fbPage && errors.fbPage && <>{errors.fbPage}</>}
              </FieldError>
            </FormField>
            <FormField>
              <FormTextField
                id="outlined-basic"
                label="Instagram Page"
                variant="outlined"
                name="instaPage"
                value={values.instaPage}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FieldError>
                {touched.instaPage && errors.instaPage && (
                  <>{errors.instaPage}</>
                )}
              </FieldError>
            </FormField>
            <PageChanged>
              <NextButton Back>
                <Img
                  src={Back}
                  alt="back"
                  onClick={() => {
                    navigate("/createDogNFT/dogRegister");
                  }}
                />
              </NextButton>
              <NextButton type="submit">
                <Img src={Next} alt="next" />
              </NextButton>
            </PageChanged>
          </Form>
          <NFTFooter />
        </RegisterDogContainer>
      ) : (
        (isTablet || isMobile || isSmallMobile) && <ROTab />
      )}
    </>
  );
};

export default RegisterOwner;
