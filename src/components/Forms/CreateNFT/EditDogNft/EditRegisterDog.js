import React, { useEffect, useRef, useState } from "react";
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
import Loader from "../../../Loader/Loader";
import { toast } from "react-toastify";

const EditRegisterDog = ({ dog, isLoading }) => {
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
      dogName: sessionData?.dogName ?? dog?.dogName,
      breed: sessionData?.breed ?? dog?.breed,
      dogPic: sessionData?.dogPic ?? dog?.dogPic,
      dogVideoLink: sessionData?.dogVideoLink ?? dog?.dogVideoLink,
      dob: sessionData?.dob ?? dog?.dob,
      gender: sessionData?.gender ?? dog?.gender,
      countryOfBirth: sessionData?.countryOfBirth ?? dog?.countryOfBirth,
      location: sessionData?.location ?? dog?.location,
      dogMotherName: sessionData?.dogMotherName ?? dog?.dogMotherName,
      dogMotherPic: sessionData?.dogMotherPic ?? dog?.dogMotherPic,
      dogMotherNftNo: sessionData?.dogMotherNftNo ?? dog?.dogMotherNftNo,
      dogFatherName: sessionData?.dogFatherName ?? dog?.dogFatherName,
      dogFatherPic: sessionData?.dogFatherPic ?? dog?.dogFatherPic,
      dogFatherNftNo: sessionData?.dogFatherNftNo ?? dog?.dogFatherNftNo,
      weight: sessionData?.weight ?? dog?.weight,
      height: sessionData?.height ?? dog?.height,
      length: sessionData?.length ?? dog?.length,
      coatType: sessionData?.coatType ?? dog?.coatType,
      price: sessionData?.price ?? dog?.price,
      currency: sessionData?.currency ?? dog?.currency,
    },
    validationSchema: registerDogSchema,
    onSubmit: (data) => {
      sessionStorage.setItem("registerDog", JSON.stringify(data));
      setSessionData(JSON.parse(sessionStorage.getItem("registerDog")));
      navigate("/edit-dog-nft/owner-register");
      toast.info("Dog info edited", { theme: "colored" });
    },
  });

  useEffect(() => {
    setFieldValue("dogName", sessionData?.dogName ?? dog?.dogName);
    setFieldValue("breed", sessionData?.breed ?? dog?.breed);
    setFieldValue("dogPic", sessionData?.dogPic ? dog?.dogPic : Transparent);
    setFieldValue(
      "dogVideoLink",
      sessionData?.dogVideoLink ?? dog?.dogVideoLink
    );
    setFieldValue("dob", sessionData?.dob ?? dog?.dob);
    setFieldValue(
      "countryOfBirth",
      sessionData?.countryOfBirth ?? dog?.countryOfBirth
    );
    setFieldValue("location", sessionData?.location ?? dog?.location);
    setFieldValue(
      "dogMotherName",
      sessionData?.dogMotherName ?? dog?.dogMotherName
    );
    setFieldValue(
      "dogFatherName",
      sessionData?.dogFatherName ?? dog?.dogFatherName
    );
    setFieldValue(
      "dogMotherPic",
      sessionData?.dogMotherPic ?? dog?.dogMotherPic
    );
    setFieldValue(
      "dogFatherPic",
      sessionData?.dogFatherPic ?? dog?.dogFatherPic
    );
    setFieldValue(
      "dogMotherNftNo",
      sessionData?.dogFatherNftNo ?? dog?.dogFatherNftNo
    );
    setFieldValue(
      "dogFatherNftNo",
      sessionData?.dogFatherNftNo ?? dog?.dogFatherNftNo
    );
    setFieldValue("weight", sessionData?.weight ?? dog?.weight);
    setFieldValue("height", sessionData?.height ?? dog?.height);
    setFieldValue("length", sessionData?.length ?? dog?.length);
    setFieldValue("coatType", sessionData?.coatType ?? dog?.coatType);
    setFieldValue("price", sessionData?.price ?? dog?.price);
    setFieldValue("currency", sessionData?.currency ?? dog?.currency);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dog]);

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

  if (isLoading) return <Loader />;
  else
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
            <BreedSelector breed={dog?.breed} setFieldValue={setFieldValue} />
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
              {!dog?.dogPic && (
                <>
                  <img src={uploadImage} alt="img" />
                  <UploadText>Photo upload</UploadText>
                </>
              )}
              <FileAccept>
                <Img
                  ref={dogPicUploaded}
                  src={dog?.dogPic ? dog?.dogPic : Transparent}
                />
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
                gender={values?.gender}
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
                  countryOfBirth={values?.countryOfBirth}
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
                  location={values?.location}
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
                  // variant="outlined"
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
                {!dog?.dogMotherPic && (
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
                    src={dog?.dogMotherPic ? dog?.dogMotherPic : Transparent}
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
                  // variant="outlined"
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
                {!dog?.dogFatherPic && (
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
                    src={dog?.dogFatherPic ? dog?.dogFatherPic : Transparent}
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
            <SaveEditNftBtn
              style={{ marginBottom: "20px" }}
              onClick={handleSubmit}
            >
              Save
            </SaveEditNftBtn>
          </PageChanged>
        </Form>
      </RegisterDogContainer>
    );
};

export default EditRegisterDog;
