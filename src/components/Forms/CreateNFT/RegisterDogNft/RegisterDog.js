import React, { useState, useRef } from "react";
import { Img } from "../../../../GlobalStyles";
import CategoryButton from "../../DogCategories";
import Next from "../../../../assets/images/Next.png";
import uploadImage from "../../../../assets/images/upload.png";
import Transparent from "../../../../assets/images/transparent.png";
import GenderButton from "../../GenderSelect";
import {
  CombinedFields,
  Form,
  FormField,
  FormHeading,
  Upload,
  RegisterDogContainer,
  CategoriesField,
  UploadText,
  FormTextField,
  FieldError,
  FileAccept,
  NextButton,
  PageChanged,
  SmallImage,
} from "../../UserStyles";
import BreedSelector from "../../BreedSelector";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { registerDogSchema } from "../../../../schema/createDogNftSchema";
import Currencies from "../../CurrencySelect";
import CountryBirth from "../../CountryBirth";
import Location from "../../Location";
import useBreakpoint from "../../../../hooks/useBreakPoint";
import RDTab from "./Tab/RDTab";

const RegisterDog = () => {
  const { isDesktop, isTablet, isSmallMobile, isMobile } = useBreakpoint();

  const navigate = useNavigate();
  const [sessionData, setSessionData] = useState(
    JSON.parse(sessionStorage.getItem("registerDog")) ?? {}
  );
  const dogPicUploaded = useRef(null);
  const dogPicUploader = useRef(null);
  const dogMotherPicUploaded = useRef(null);
  const dogMotherPicUploader = useRef(null);
  const dogFatherPicUploaded = useRef(null);
  const dogFatherPicUploader = useRef(null);
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
      dogName: sessionData.dogName ?? "",
      breed: sessionData.breed ?? "",
      dogPic: sessionData.dogPic ?? "",
      dogVideoLink: sessionData.dogVideoLink ?? "",
      dob: sessionData.dob ?? "",
      gender: sessionData.gender ?? "",
      countryOfBirth: sessionData.countryOfBirth ?? "",
      location: sessionData.location ?? "",
      dogMotherName: sessionData.dogMotherName ?? "",
      dogMotherPic: sessionData.dogMotherPic ?? "",
      dogMotherNftNo: sessionData.dogMotherNftNo ?? "",
      dogFatherName: sessionData.dogFatherName ?? "",
      dogFatherPic: sessionData.dogFatherPic ?? "",
      dogFatherNftNo: sessionData.dogFatherNftNo ?? "",
      weight: sessionData.weight ?? "",
      height: sessionData.height ?? "",
      length: sessionData.length ?? "",
      coatType: sessionData.coatType ?? "",
      price: sessionData.price ?? "",
      currency: sessionData.currency ?? "",
    },
    validationSchema: registerDogSchema,
    onSubmit: (data) => {
      sessionStorage.setItem("registerDog", JSON.stringify(data));
      setSessionData(JSON.parse(sessionStorage.getItem("registerDog")));
      navigate("/create-dog-nft/register-owner");
    },
  });

  const handleImageUpload = (event) => {
    const [file] = event.target.files;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (event.target.name === "dogPic") {
          dogPicUploaded.current.src = e.target.result;
          setFieldValue("dogPic", dogPicUploaded.current.src);
        } else if (event.target.name === "dogMotherPic") {
          dogMotherPicUploaded.current.src = e.target.result;
          setFieldValue("dogMotherPic", dogMotherPicUploaded.current.src);
        } else if (event.target.name === "dogFatherPic") {
          dogFatherPicUploaded.current.src = e.target.result;
          setFieldValue("dogFatherPic", dogFatherPicUploaded.current.src);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const priceIcon = (price) => {
    switch (price) {
      case "EUR":
        return "€";
      case "USD":
        return "$";
      case "GBP":
        return "£";
      default:
        return "$";
    }
  };

  return (
    <>
      {isDesktop ? (
        <RegisterDogContainer>
          <Form onSubmit={handleSubmit} width="90%">
            <FormHeading>
              {/* <Img src={dogInfo} alt="dogInfo" /> */}
            </FormHeading>
            <FormField>
              <FormTextField
                id="outlined-basic"
                label="Name *"
                variant="outlined"
                name="dogName"
                value={values.dogName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FieldError>
                {touched.dogName && errors.dogName && <>{errors.dogName}</>}
              </FieldError>
            </FormField>
            <FormField>
              <BreedSelector
                breed={values.breed}
                setFieldValue={setFieldValue}
              />
              <FieldError>
                {touched.breed && errors.breed && <>{errors.breed}</>}
              </FieldError>
            </FormField>
            <FormField style={{ width: "50%" }}>
              <Upload onClick={() => dogPicUploader.current.click()}>
                <input
                  type="file"
                  accept="image/*"
                  name="dogPic"
                  onChange={(e) => handleImageUpload(e)}
                  ref={dogPicUploader}
                  style={{
                    display: "none",
                  }}
                />
                {!values?.dogPic && (
                  <>
                    <img src={uploadImage} alt="img" />
                    <UploadText>Photo upload</UploadText>
                  </>
                )}
                <FileAccept>
                  <Img ref={dogPicUploaded} src={Transparent} alt="img" />
                </FileAccept>
              </Upload>
            </FormField>
            <FormField>
              <FormTextField
                id="outlined-basic"
                label="Video Link "
                variant="outlined"
                name="dogVideoLink"
                value={values.dogVideoLink}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FieldError>
                {touched.dogVideoLink && errors.dogVideoLink && (
                  <>{errors.dogVideoLink}</>
                )}
              </FieldError>
            </FormField>
            <FormField>
              <CombinedFields>
                <FormField>
                  <FormTextField
                    id="dob"
                    name="dob"
                    label="Date of Birth"
                    type="date"
                    value={values.dob}
                    setFieldValue={setFieldValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <FieldError>
                    {touched.dob && errors.dob && <>{errors.dob}</>}
                  </FieldError>
                </FormField>
                {/* <DateInput type="date" date={values.date} setFieldValue={setFieldValue} /> */}
                <GenderButton
                  gender={values.gender}
                  setFieldValue={setFieldValue}
                />
              </CombinedFields>
              <FieldError>
                {touched.gender && errors.gender && <>{errors.gender}</>}
              </FieldError>
            </FormField>
            <CombinedFields>
              <CombinedFields>
                <FormField>
                  <CountryBirth
                    countryOfBirth={values.countryOfBirth}
                    setFieldValue={setFieldValue}
                  />
                  <FieldError>
                    {touched.countryOfBirth && errors.countryOfBirth && (
                      <>{errors.countryOfBirth}</>
                    )}
                  </FieldError>
                </FormField>
                <FormField>
                  <Location
                    location={values.location}
                    setFieldValue={setFieldValue}
                  />
                  <FieldError>
                    {touched.location && errors.location && (
                      <>{errors.location}</>
                    )}
                  </FieldError>
                </FormField>
              </CombinedFields>
              <CombinedFields>
                <FormField>
                  <FormTextField
                    id="outlined-basic"
                    label="Mother Name"
                    variant="outlined"
                    name="dogMotherName"
                    value={values.dogMotherName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <FieldError>
                    {touched.dogMotherName && errors.dogMotherName && (
                      <>{errors.dogMotherName}</>
                    )}
                  </FieldError>
                </FormField>
                <Upload
                  Differ
                  onClick={() => dogMotherPicUploader.current.click()}
                >
                  <input
                    type="file"
                    accept="image/*"
                    name="dogMotherPic"
                    onChange={(e) => handleImageUpload(e)}
                    ref={dogMotherPicUploader}
                    style={{
                      display: "none",
                    }}
                  />
                  {!values?.dogMotherPic && (
                    <>
                      <SmallImage>
                        <img src={uploadImage} alt="img" />
                      </SmallImage>
                      <UploadText Differ>Photo upload</UploadText>
                    </>
                  )}
                  <FileAccept>
                    <Img
                      ref={dogMotherPicUploaded}
                      src={Transparent}
                      alt="img"
                    />
                  </FileAccept>
                </Upload>
              </CombinedFields>
            </CombinedFields>
            <CombinedFields>
              <FormField>
                <FormTextField
                  id="outlined-basic"
                  label="Weight (kg)"
                  name="weight"
                  variant="outlined"
                  value={values.weight}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FieldError>
                  {touched.weight && errors.weight && <>{errors.weight}</>}
                </FieldError>
              </FormField>
              <FormField>
                <FormTextField
                  id="outlined-basic"
                  label="Mother NFT number"
                  name="dogMotherNftNo"
                  variant="outlined"
                  value={values.dogMotherNftNo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FieldError>
                  {touched.dogMotherNftNo && errors.dogMotherNftNo && (
                    <>{errors.dogMotherNftNo}</>
                  )}
                </FieldError>
              </FormField>
            </CombinedFields>
            <CombinedFields>
              <FormField>
                <FormTextField
                  id="outlined-basic"
                  label="Height (cm)"
                  variant="outlined"
                  name="height"
                  value={values.height}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FieldError>
                  {touched.height && errors.height && <>{errors.height}</>}
                </FieldError>
              </FormField>
              <CombinedFields>
                <FormField>
                  <FormTextField
                    id="outlined-basic"
                    label="Father Name"
                    variant="outlined"
                    name="dogFatherName"
                    value={values.dogFatherName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <FieldError>
                    {touched.dogFatherName && errors.dogFatherName && (
                      <>{errors.dogFatherName}</>
                    )}
                  </FieldError>
                </FormField>
                <Upload
                  Differ
                  onClick={() => dogFatherPicUploader.current.click()}
                >
                  <input
                    type="file"
                    accept="image/*"
                    name="dogFatherPic"
                    onChange={(e) => handleImageUpload(e)}
                    ref={dogFatherPicUploader}
                    style={{
                      display: "none",
                    }}
                  />
                  {!values?.dogFatherPic && (
                    <>
                      <SmallImage>
                        <img src={uploadImage} alt="img" />
                      </SmallImage>
                      <UploadText Differ>Photo upload</UploadText>
                    </>
                  )}
                  <FileAccept>
                    <Img
                      ref={dogFatherPicUploaded}
                      src={Transparent}
                      alt="img"
                    />
                  </FileAccept>
                </Upload>
              </CombinedFields>
            </CombinedFields>
            <CombinedFields>
              <FormField>
                <FormTextField
                  id="outlined-basic"
                  label="Length (cm)"
                  variant="outlined"
                  name="length"
                  value={values.length}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FieldError>
                  {touched.length && errors.length && <>{errors.length}</>}
                </FieldError>
              </FormField>
              <FormField>
                <FormTextField
                  id="outlined-basic"
                  label="Father NFT number"
                  variant="outlined"
                  name="dogFatherNftNo"
                  value={values.dogFatherNftNo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FieldError>
                  {touched.dogFatherNftNo && errors.dogFatherNftNo && (
                    <>{errors.dogFatherNftNo}</>
                  )}
                </FieldError>
              </FormField>
            </CombinedFields>
            <FormField>
              <CategoriesField>
                <CategoryButton
                  coatType={values.coatType}
                  setFieldValue={setFieldValue}
                />
              </CategoriesField>
            </FormField>
            <CombinedFields>
              <FormField>
                <FormTextField
                  id="outlined-basic"
                  label={`Value ${priceIcon(values?.currency)} `}
                  variant="outlined"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FieldError>
                  {touched.price && errors.price && <>{errors.price}</>}
                </FieldError>
              </FormField>
              <Currencies
                currency={values.currency}
                setFieldValue={setFieldValue}
              />
              <FieldError>
                {touched.currency && errors.currency && <>{errors.currency}</>}
              </FieldError>
            </CombinedFields>
            <PageChanged>
              <div></div>
              {/* Empty <div> to put next on end */}
              <NextButton type="submit">
                <Img src={Next} alt="next" />
              </NextButton>
            </PageChanged>
          </Form>
        </RegisterDogContainer>
      ) : (
        (isTablet || isMobile || isSmallMobile) && (
          <RDTab
            values={values}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setFieldValue={setFieldValue}
            priceIcon={priceIcon}
          />
        )
      )}
    </>
  );
};

export default RegisterDog;
