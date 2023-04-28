import React, { useRef } from "react";
import {
  RDForm,
  RDInput,
  RDTabContainer,
  UploadPicsWrapper,
} from "./RTab.style";
import {
  FileAccept,
  NextButton,
  PageChanged,
  Upload,
  UploadText,
} from "../../../UserStyles";
import { Img } from "../../../../../GlobalStyles";
import uploadImage from "../../../../../assets/images/upload.png";
import Transparent from "../../../../../assets/images/transparent.png";
import Next from "../../../../../assets/images/Next.png";
import Back from "../../../../../assets/images/Back.png";

const ROTab = () => {
  const dogPicUploaded = useRef(null);
  const dogMotherPicUploaded = useRef(null);
  const dogMotherPicUploader = useRef(null);

  return (
    <RDTabContainer>
      <RDForm>
        <RDInput
          label="Owner Name *"
          variant="outlined"
          id="outlined-basic"
          Width="100%"
        />
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
          label="Upload Video Link"
          variant="outlined"
          id="outlined-basic"
          Width="100%"
        />
        <RDInput
          label="Are you dog breeder?"
          Width="100%"
          variant="outlined"
          id="outlined-basic"
        />

        <RDInput
          label="Breeder Kennel name"
          Width="100%"
          variant="outlined"
          id="outlined-basic"
        />

        <RDInput
          label="Email"
          Width="100%"
          variant="outlined"
          id="outlined-basic"
        />

        <RDInput
          label="Website"
          Width="100%"
          variant="outlined"
          id="outlined-basic"
        />

        <RDInput
          label="Phoneno"
          Width="100%"
          variant="outlined"
          id="outlined-basic"
        />

        <RDInput
          label="Location"
          Width="100%"
          variant="outlined"
          id="outlined-basic"
        />

        <RDInput
          label="Facebook Page"
          Width="100%"
          variant="outlined"
          id="outlined-basic"
        />

        <RDInput
          label="Instagram Page"
          Width="100%"
          variant="outlined"
          id="outlined-basic"
        />
        <PageChanged>
          <NextButton Back>
            <Img src={Back} alt="back" />
          </NextButton>
          <NextButton type="submit">
            <Img src={Next} alt="next" />
          </NextButton>
        </PageChanged>
      </RDForm>
    </RDTabContainer>
  );
};

export default ROTab;
