import React, { useState } from "react";
import trophy from "../../../../assets/images/Trophy.png";
// import search from "../../../../assets/images/Search.png";
import person from "../../../../assets/images/Person.png";
import segments from "../../../../assets/images/Segments.png";
import {
  Form,
  FormField,
  FormHeading,
  FormTextField,
  NextButton,
  PageChanged,
  RegisterDogContainer,
} from "../../UserStyles";
import { Img } from "../../../../GlobalStyles";
import Countries from "../../Countries";
import { PhoneIcon } from "../../UserStyles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import NFTFooter from "./NFTFooter";
import { createDogNft } from "../../../../redux/createDogNft/createDogNftSlice";
import { CreateDogNftBtn, SaveNftBtn, SaveText } from "./CreateNFT.style";
import Back from "../../../../assets/images/Back.png";

const RegisterDogShow = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sessionData, setSessionData] = useState(
    JSON.parse(sessionStorage.getItem("registerDogShow")) ?? {}
  );
  console.log("The setSessionData", setSessionData);
  const [dogS, setDogS] = useState([]);
  console.log("The dogS", dogS);
  const [dogShow, setDogShow] = useState({
    showName: sessionData[0]?.showName ?? "",
    officialShowName: sessionData[0]?.officialShowName ?? "",
    descriptionOfEvent: sessionData[0]?.descriptionOfEvent ?? "",
    country: sessionData[0]?.country ?? "",
    location: sessionData[0]?.location ?? "",
    date: sessionData[0]?.date ?? "",
    class: sessionData[0]?.class ?? "",
    judge: sessionData[0]?.judge ?? "",
    result: sessionData[0]?.result ?? "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDogShow({
      ...dogShow,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setDogS((prev) => {
      const updatedDogShow = [...prev, dogShow];
      sessionStorage.setItem("registerDogShow", JSON.stringify(updatedDogShow));
      return updatedDogShow;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createDogNft({ navigate }));
  };
  return (
    <RegisterDogContainer>
      <Form width="90%" onSubmit={handleSubmit}>
        <FormHeading>
          {/* <Img src={dogShow} title="Dog Show" /> */}
        </FormHeading>
        <FormField>
          <FormTextField
            id="outlined-basic"
            label="Dog Show Name"
            variant="outlined"
            name="showName"
            value={dogShow.showName}
            onChange={handleChange}
            // onBlur={handleBlur}
          />
          {/* <FieldError>
            {touched.showName && errors.showName && <>{errors.showName}</>}
          </FieldError> */}
        </FormField>
        <FormField>
          <FormTextField
            id="outlined-basic"
            label="Official Dog Show Name"
            variant="outlined"
            name="officialShowName"
            value={dogShow.officialShowName}
            onChange={handleChange}
            // onBlur={handleBlur}
          />
          <PhoneIcon>
            <Img src={trophy} title="trophy" />
          </PhoneIcon>
          {/* <FieldError>
            {touched.officialShowName && errors.officialShowName && (
              <>{errors.officialShowName}</>
            )}
          </FieldError> */}
        </FormField>
        <FormField>
          <FormTextField
            id="outlined-basic"
            label="Description of Event"
            variant="outlined"
            name="descriptionOfEvent"
            value={dogShow.descriptionOfEvent}
            onChange={handleChange}
            // onBlur={handleBlur}
          />
          {/* <FieldError>
            {touched.descriptionOfEvent && errors.descriptionOfEvent && (
              <>{errors.descriptionOfEvent}</>
            )}
          </FieldError> */}
        </FormField>
        <FormField>
          <Countries dogShow={dogShow} setDogShow={setDogShow} />
        </FormField>
        <FormField>
          <FormTextField
            id="outlined-basic"
            label="Location"
            variant="outlined"
            name="location"
            value={dogShow.location}
            onChange={handleChange}
            // onBlur={handleBlur}
          />
          <PhoneIcon>{/* <Img src={search} title="search" /> */}</PhoneIcon>
          {/* <FieldError>
            {touched.location && errors.location && <>{errors.location}</>}
          </FieldError> */}
        </FormField>
        <FormField>
          <FormTextField
            id="date"
            label="Date"
            type="date"
            value={dogShow.date}
            // setFieldValue={setFieldValue}
            onChange={(event) => {
              setDogShow({ ...dogShow, date: event.target.value });
            }}
            // onBlur={handleBlur}
            InputLabelProps={{
              shrink: true,
            }}
          />
          {/* <FieldError>
            {touched.date && errors.date && <>{errors.date}</>}
          </FieldError> */}
        </FormField>
        <FormField>
          <FormTextField
            id="outlined-basic"
            label="Class"
            variant="outlined"
            name="class"
            value={dogShow.class}
            onChange={handleChange}
            // onBlur={handleBlur}
          />
          <PhoneIcon>
            <Img src={person} title="person" />
          </PhoneIcon>
          {/* <FieldError>
            {touched.class && errors.class && <>{errors.class}</>}
          </FieldError> */}
        </FormField>
        <FormField>
          <FormTextField
            id="outlined-basic"
            label="Judge"
            variant="outlined"
            name="judge"
            value={dogShow.judge}
            onChange={handleChange}
            // onBlur={handleBlur}
          />
          <PhoneIcon>
            <Img src={segments} title="segments" />
          </PhoneIcon>
          {/* <FieldError>
            {touched.judge && errors.judge && <>{errors.judge}</>}
          </FieldError>
           */}
        </FormField>
        <FormField>
          <FormTextField
            id="outlined-basic"
            label="Result"
            variant="outlined"
            name="result"
            value={dogShow.result}
            onChange={handleChange}
            // onBlur={handleBlur}
          />
          <PhoneIcon>
            <Img src={trophy} title="trophy" />
          </PhoneIcon>
          {/* <FieldError>
            {touched.result && errors.result && <>{errors.result}</>}
          </FieldError> */}
        </FormField>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <SaveNftBtn onClick={handleSave}>
            <SaveText>
              <h1>Save</h1>
            </SaveText>
          </SaveNftBtn>
        </div>
        <PageChanged>
          <NextButton Back>
            <Img
              src={Back}
              alt="back"
              onClick={() => {
                navigate("/createDogNFT/insuranceRegister");
              }}
            />
          </NextButton>
          <CreateDogNftBtn type="submit">Create Dog NFT</CreateDogNftBtn>
        </PageChanged>
      </Form>
      <NFTFooter />
    </RegisterDogContainer>
  );
};

export default RegisterDogShow;
