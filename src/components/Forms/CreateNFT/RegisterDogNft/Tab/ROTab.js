import React from "react";
import {
  RDForm,
  RDInput,
  RDTabContainer,
  UploadPicsWrapper,
} from "./RTab.style";
import {
  FieldError,
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
import { useNavigate } from "react-router-dom";

const ROTab = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
  setFieldValue,
}) => {
  const navigate = useNavigate();
  return (
    <RDTabContainer>
      <RDForm>
        <RDInput
          label="Owner Name *"
          variant="outlined"
          id="outlined-basic"
          Width="100%"
          name="ownerName"
          value={values.ownerName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <FieldError>
          {touched.ownerName && errors.ownerName && <>{errors.ownerName}</>}
        </FieldError>
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
              <Img src={Transparent} alt="img" />
            </FileAccept>
          </Upload>
        </UploadPicsWrapper>

        <RDInput
          label="Upload Video Link"
          variant="outlined"
          id="outlined-basic"
          Width="100%"
          name="ownerVideoLink"
          value={values.ownerVideoLink}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <RDInput
          label="Are you dog breeder?"
          Width="100%"
          variant="outlined"
          id="outlined-basic"
          name="areYouBreeder"
          value={values.areYouBreeder}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <RDInput
          label="Breeder Kennel name"
          Width="100%"
          variant="outlined"
          id="outlined-basic"
          name="breederKennelName"
          value={values.breederKennelName}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <RDInput
          label="Email"
          Width="100%"
          variant="outlined"
          id="outlined-basic"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <RDInput
          label="Website"
          Width="100%"
          variant="outlined"
          id="outlined-basic"
          name="website"
          value={values.website}
          onChange={handleChange}
          onBlur={handleBlur}
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
          name="location"
          value={values.location}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <RDInput
          label="Facebook Page"
          Width="100%"
          variant="outlined"
          id="outlined-basic"
          name="fbPage"
          value={values.fbPage}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <RDInput
          label="Instagram Page"
          Width="100%"
          variant="outlined"
          id="outlined-basic"
          name="instaPage"
          value={values.instaPage}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <PageChanged>
          <NextButton Back>
            <Img
              src={Back}
              alt="back"
              onClick={() => {
                navigate("/create-dog-nft/register-dogData");
              }}
            />
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
