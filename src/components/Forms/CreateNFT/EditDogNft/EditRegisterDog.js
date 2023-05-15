import React, { useState } from "react";
import { Img } from "../../../../GlobalStyles";
import CategoryButton from "../../DogCategories";
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
import { SaveEditNftBtn } from "../RegisterDogNft/CreateNFT.style";

const EditRegisterDog = ({ dog }) => {
  const navigate = useNavigate();
  const [sessionData, setSessionData] = useState(
    JSON.parse(sessionStorage.getItem("registerDog")) ?? {}
  );
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
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
      dogName: sessionData.dogName ?? dog?.dogName,
      breed: sessionData.breed ?? dog?.breed,
      dogPic: sessionData.dogPic ?? dog?.dogPic,
      dogVideoLink: sessionData.dogVideoLink ?? dog?.dogVideoLink,
      dob: sessionData.dob ?? dog?.dob,
      gender: sessionData.gender ?? dog?.gender,
      countryOfBirth: sessionData.countryOfBirth ?? dog?.countryOfBirth,
      weight: sessionData.weight ?? dog?.weight,
      height: sessionData.height ?? dog?.height,
      length: sessionData.length ?? dog?.length,
      coatType: sessionData.coatType ?? dog?.coatType,
      price: sessionData.price ?? dog?.price,
      motherName: sessionData.motherName ?? dog?.motherName,
      motherNFTNumber: sessionData.motherNFTNumber ?? dog?.motherNFTNumber,
      fatherName: sessionData.fatherName ?? dog?.fatherName,
      fatherNFTNumber: sessionData.fatherNFTNumber ?? dog?.fatherNFTNumber,
      currency: sessionData.currency ?? dog?.currency,
      location: sessionData.location ?? dog?.location,
    },
    validationSchema: registerDogSchema,
    onSubmit: (data) => {
      sessionStorage.setItem("registerDog", JSON.stringify(data));
      setSessionData(JSON.parse(sessionStorage.getItem("registerDog")));
      navigate("/createDogNFT/ownerRegister");
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
        setFieldValue("adminImage", current.src);
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
    <RegisterDogContainer>
      <Form onSubmit={handleSubmit} width="90%">
        <FormHeading></FormHeading>
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
          <BreedSelector breed={values.breed} setFieldValue={setFieldValue} />
          <FieldError>
            {touched.breed && errors.breed && <>{errors.breed}</>}
          </FieldError>
        </FormField>
        <FormField style={{ width: "50%" }}>
          <CombinedFields>
            <Upload onClick={() => imageUploader.current.click()}>
              <input
                type="file"
                accept="image/*"
                name="dogPic"
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
                {touched.location && errors.location && <>{errors.location}</>}
              </FieldError>
            </FormField>
          </CombinedFields>
          <CombinedFields>
            <FormField>
              <FormTextField
                id="outlined-basic"
                label="Mother Name"
                variant="outlined"
                name="motherName"
                value={values.motherName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FieldError>
                {touched.motherName && errors.motherName && (
                  <>{errors.motherName}</>
                )}
              </FieldError>
            </FormField>
            <Upload Differ onClick={() => imageUploader.current.click()}>
              <input
                type="file"
                accept="image/*"
                name="adminImage"
                onChange={(e) => handleImageUpload(e)}
                ref={imageUploader}
                style={{
                  display: "none",
                }}
              />
              <SmallImage>
                <img src={uploadImage} alt="img" />
              </SmallImage>
              <UploadText Differ>Photo upload</UploadText>
              <FileAccept>
                <Img ref={uploadedImage} src={Transparent} alt="img" />
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
              name="motherNFTNumber"
              variant="outlined"
              value={values.motherNFTNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FieldError>
              {touched.motherNFTNumber && errors.motherNFTNumber && (
                <>{errors.motherNFTNumber}</>
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
                name="fatherName"
                value={values.fatherName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FieldError>
                {touched.fatherName && errors.fatherName && (
                  <>{errors.fatherName}</>
                )}
              </FieldError>
            </FormField>
            <Upload Differ onClick={() => imageUploader.current.click()}>
              <input
                type="file"
                accept="image/*"
                name="adminImage"
                onChange={(e) => handleImageUpload(e)}
                ref={imageUploader}
                style={{
                  display: "none",
                }}
              />
              <SmallImage>
                <img src={uploadImage} alt="img" />
              </SmallImage>
              <UploadText Differ>Photo upload</UploadText>
              <FileAccept>
                <Img ref={uploadedImage} src={Transparent} alt="img" />
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
              name="fatherNFTNumber"
              value={values.fatherNFTNumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <FieldError>
              {touched.fatherNFTNumber && errors.fatherNFTNumber && (
                <>{errors.fatherNFTNumber}</>
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
          <SaveEditNftBtn>Save</SaveEditNftBtn>
        </PageChanged>
      </Form>
    </RegisterDogContainer>
  );
};

export default EditRegisterDog;
