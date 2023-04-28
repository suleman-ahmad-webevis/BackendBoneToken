import React from "react";
import BreedSelector from "../../../BreedSelector";
import {
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
  CoatsWrapper,
  Curr,
  DBGWrapper,
  DFamilyWrapper,
  PriceWrapper,
  RDForm,
  RDInput,
  RDTabContainer,
  ThreeCoats,
  TwoCoats,
  UploadPicsWrapper,
  WHL,
  WHLWrapper,
} from "./RTab.style";

const RDTab = () => {
  const dogPicUploaded = useRef(null);
  const dogMotherPicUploaded = useRef(null);
  const dogMotherPicUploader = useRef(null);

  return (
    <RDTabContainer>
      <RDForm>
        <RDInput
          id="outlined-basic"
          label="Name *"
          variant="outlined"
          Width="100%"
        />
        <BreedSelector />
        <UploadPicsWrapper>
          <Upload
            // onClick={() => dogPicUploader.current.click()}
            style={{ width: "49%" }}
          >
            <input
              type="file"
              accept="image/*"
              name="dogPic"
              // onChange={(e) => handleImageUpload(e)}
              // ref={dogPicUploader}
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
        />
        <DBGWrapper>
          <RDInput
            Width="80%"
            id="dob"
            name="dob"
            label="Date of Birth"
            type="date"
            // value={values.dob}
            // setFieldValue={setFieldValue}
            // onChange={handleChange}
            // onBlur={handleBlur}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <GenderButton style={{ width: "50%" }} />
        </DBGWrapper>
        <CLWrapper>
          <CountryBirth
          // countryOfBirth={values.countryOfBirth}
          // setFieldValue={setFieldValue}
          />
          <Location
          // location={values.location} setFieldValue={setFieldValue}
          />
        </CLWrapper>
        <DFamilyWrapper>
          <RDInput
            id="outlined-basic"
            label="Mother Name"
            variant="outlined"
            Width="100%"
          />
          <Upload
            Differ
            // onClick={() => dogMotherPicUploader.current.click()}
          >
            <input
              type="file"
              accept="image/*"
              name="dogMotherPic"
              // onChange={(e) => handleImageUpload(e)}
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
        />
        <DFamilyWrapper>
          <RDInput
            id="outlined-basic"
            label="Father Name"
            variant="outlined"
            Width="100%"
          />
          <Upload
            Differ
            // onClick={() => dogMotherPicUploader.current.click()}
          >
            <input
              type="file"
              accept="image/*"
              name="dogMotherPic"
              // onChange={(e) => handleImageUpload(e)}
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
          Width="100%"
          id="outlined-basic"
          label="Father NFT Number"
          variant="outlined"
        />
        <WHLWrapper>
          <WHL>Weight (kg)</WHL>
          <WHL>Height (cm)</WHL>
          <WHL>Length (cm)</WHL>
        </WHLWrapper>
        <CoatsWrapper>
          <TwoCoats>Heavy coat</TwoCoats>
          <TwoCoats>Curly/Wavy/Fleece coat</TwoCoats>
        </CoatsWrapper>
        <CoatsWrapper>
          <ThreeCoats>Long coat</ThreeCoats>
          <ThreeCoats>Wire coat</ThreeCoats>
          <ThreeCoats>Silk coat</ThreeCoats>
        </CoatsWrapper>
        <CoatsWrapper>
          <ThreeCoats>Smooth coat</ThreeCoats>
          <ThreeCoats>Short coat</ThreeCoats>
          <ThreeCoats>Double coat</ThreeCoats>
        </CoatsWrapper>
        <PriceWrapper>
          <RDInput
            Width="60%"
            id="outlined-basic"
            label="Value"
            variant="outlined"
          />
          <Curr>EUR</Curr>
          <Curr>USD</Curr>
          <Curr>GBP</Curr>
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
