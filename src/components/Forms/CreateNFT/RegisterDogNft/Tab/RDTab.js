import React, { useState } from "react";
import BreedSelector from "../../../BreedSelector";
import {
  FieldError,
  FileAccept,
  NextButton,
  PageChanged,
  SmallImage,
  Upload,
  UploadText,
} from "../../../UserStyles";
import { Img } from "../../../../../GlobalStyles";
import { useRef } from "react";
import uploadImage from "../../../../../assets/images/upload.png";
import Transparent from "../../../../../assets/images/transparent.png";
import Next from "../../../../../assets/images/Next.png";
import GenderButton from "../../../GenderSelect";
import CountryBirth from "../../../CountryBirth";
import Location from "../../../Location";
import {
  CLWrapper,
  Curr,
  DBGWrapper,
  DFamilyWrapper,
  PriceWrapper,
  RDForm,
  RDInput,
  RDTabContainer,
  UploadPicsWrapper,
  WHLWrapper,
} from "./RTab.style";
import CoatSelector from "./CoatSelector";

const RDTab = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
  setFieldValue,
  priceIcon,
}) => {
  const dogPicUploaded = useRef(null);
  const dogPicUploader = useRef(null);
  const dogMotherPicUploaded = useRef(null);
  const dogMotherPicUploader = useRef(null);
  const dogFatherPicUploaded = useRef(null);
  const dogFatherPicUploader = useRef(null);

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

  //ForCurrSelector
  const [active, setActive] = useState("");

  const currTypes = ["EUR", "USD", "GBP"];

  const currHandler = (type) => {
    setActive(type);
    setFieldValue("price", type);
  };

  return (
    <RDTabContainer>
      <RDForm onSubmit={handleSubmit}>
        <RDInput
          id="outlined-basic"
          label="Name *"
          variant="outlined"
          Width="100%"
          name="dogName"
          values={values.dogName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FieldError>
          {touched.dogName && errors.dogName && <>{errors.dogName}</>}
        </FieldError>
        <BreedSelector breed={values.breed} setFieldValue={setFieldValue} />
        <FieldError>
          {touched.breed && errors.breed && <>{errors.breed}</>}
        </FieldError>
        <UploadPicsWrapper>
          <Upload
            onClick={() => dogPicUploader.current.click()}
            style={{ width: "49%" }}
          >
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
            <img src={uploadImage} alt="img" />
            <UploadText>Photo upload</UploadText>
            <FileAccept>
              <Img ref={dogPicUploaded} src={Transparent} alt="img" />
            </FileAccept>
          </Upload>
        </UploadPicsWrapper>
        <RDInput
          id="outlined-basic"
          label="Upload Video Link"
          variant="outlined"
          Width="100%"
          name="dogVideoLink"
          value={values.dogVideoLink}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <DBGWrapper>
          <RDInput
            Width="80%"
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
          <GenderButton
            gender={values.gender}
            setFieldValue={setFieldValue}
            style={{ width: "50%" }}
          />
        </DBGWrapper>
        <CLWrapper>
          <CountryBirth
            countryOfBirth={values.countryOfBirth}
            setFieldValue={setFieldValue}
          />
          <Location location={values.location} setFieldValue={setFieldValue} />
        </CLWrapper>
        <DFamilyWrapper>
          <RDInput
            id="outlined-basic"
            label="Mother Name"
            variant="outlined"
            Width="100%"
            name="dogMotherName"
            value={values.dogMotherName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Upload Differ onClick={() => dogMotherPicUploader.current.click()}>
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
            <SmallImage>
              <img src={uploadImage} alt="img" />
            </SmallImage>
            <UploadText Differ>Photo upload</UploadText>
            <FileAccept>
              <Img ref={dogMotherPicUploaded} src={Transparent} alt="img" />
            </FileAccept>
          </Upload>
        </DFamilyWrapper>
        <RDInput
          id="outlined-basic"
          label="Mother NFT Number"
          variant="outlined"
          Width="100%"
          name="dogMotherNftNo"
          value={values.dogMotherNftNo}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <DFamilyWrapper>
          <RDInput
            id="outlined-basic"
            label="Father Name"
            variant="outlined"
            Width="100%"
            name="dogFatherName"
            value={values.dogFatherName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Upload Differ onClick={() => dogFatherPicUploader.current.click()}>
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
            <SmallImage>
              <img src={uploadImage} alt="img" />
            </SmallImage>
            <UploadText Differ>Photo upload</UploadText>
            <FileAccept>
              <Img ref={dogFatherPicUploaded} src={Transparent} alt="img" />
            </FileAccept>
          </Upload>
        </DFamilyWrapper>
        <RDInput
          Width="100%"
          id="outlined-basic"
          label="Father NFT Number"
          variant="outlined"
          name="dogFatherNftNo"
          value={values.dogFatherNftNo}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <WHLWrapper>
          <RDInput
            id="outlined-basic"
            label="Weight (kg)"
            name="weight"
            variant="outlined"
            value={values.weight}
            onChange={handleChange}
            onBlur={handleBlur}
            Width="33%"
          />
          <RDInput
            id="outlined-basic"
            label="Height (cm)"
            variant="outlined"
            name="height"
            value={values.height}
            onChange={handleChange}
            onBlur={handleBlur}
            Width="33%"
          />
          <RDInput
            id="outlined-basic"
            label="Length (cm)"
            variant="outlined"
            name="length"
            value={values.length}
            onChange={handleChange}
            onBlur={handleBlur}
            Width="33%"
          />
        </WHLWrapper>
        <CoatSelector
          coatType={values.coatType}
          setFieldValue={setFieldValue}
        />
        <PriceWrapper>
          <RDInput
            Width="60%"
            id="outlined-basic"
            label={`Value ${priceIcon(values?.currency)} `}
            variant="outlined"
            name="price"
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Curr
            active={active === currTypes[0]}
            onClick={() => currHandler(currTypes[0])}
          >
            EUR
          </Curr>
          <Curr
            active={active === currTypes[1]}
            onClick={() => currHandler(currTypes[1])}
          >
            USD
          </Curr>
          <Curr
            active={active === currTypes[2]}
            onClick={() => currHandler(currTypes[2])}
          >
            GBP
          </Curr>
        </PriceWrapper>
        <PageChanged>
          <div></div>
          {/* Empty <div> to put next on end */}
          <NextButton type="submit">
            <Img src={Next} alt="next" />
          </NextButton>
        </PageChanged>
      </RDForm>
    </RDTabContainer>
  );
};

export default RDTab;
