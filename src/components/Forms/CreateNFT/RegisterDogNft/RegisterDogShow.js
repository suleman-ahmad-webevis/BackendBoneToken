import React, { useState } from "react";
import trophy from "../../../../assets/images/Trophy.png";
import Binance from "../../../../assets/images/CreateNFT/SBC/Binance.png";
import Solana from "../../../../assets/images/CreateNFT/SBC/Solana.png";
import Bitcoin from "../../../../assets/images/CreateNFT/SBC/Bitcoin.png";
import Ethereum from "../../../../assets/images/CreateNFT/SBC/Ethereum.png";
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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createDogNft } from "../../../../redux/createDogNft/createDogNftSlice";
import {
  BChain,
  BChainsWrapper,
  CreateDogNftBtn,
  SBCContainer,
  SBCHeading,
  SaveCreateNft,
  SaveNftBtn,
  SaveText,
  DogShowBtns,
} from "./CreateNFT.style";
import Back from "../../../../assets/images/Back.png";
import { toast } from "react-toastify";
import Loader from "../../../../components/Loader/Loader";

const RegisterDogShow = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [blockChain, setBlockChain] = useState(null);
  const { isLoading } = useSelector((state) => state.dogNft);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sessionData] = useState(
    JSON.parse(sessionStorage.getItem("registerDogShow")) ?? {}
  );
  const [dogS, setDogS] = useState([]);
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
    toast.info("DogShow added", { theme: "colored" });
  };

  const handleSubmit = (e) => {
    if (userInfo?.token) {
      e.preventDefault();
      dispatch(createDogNft({ navigate, dogS, userId: userInfo?.user?._id }));
    } else {
      toast.info("Please Login");
    }
  };

  const handleBlockChain = (param) => {
    setBlockChain(param);
  };

  return (
    <RegisterDogContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
          </Form>
          {/* StyleFromSelectBlockChain */}
          <SBCContainer>
            <SBCHeading>
              Select Blockchain to create your Pet Dog NFT
            </SBCHeading>
            <BChainsWrapper>
              <BChain
                isSelected={blockChain === "solana"}
                onClick={() => handleBlockChain("solana")}
              >
                <Img src={Solana} />
              </BChain>
              <BChain
                isSelected={blockChain === "bitcoin"}
                onClick={() => handleBlockChain("bitcoin")}
              >
                <Img src={Bitcoin} />
              </BChain>
              <BChain
                isSelected={blockChain === "ethereum"}
                onClick={() => handleBlockChain("ethereum")}
              >
                <Img src={Ethereum} />
              </BChain>
              <BChain
                isSelected={blockChain === "binance"}
                onClick={() => handleBlockChain("binance")}
              >
                <Img src={Binance} />
              </BChain>
            </BChainsWrapper>
          </SBCContainer>
          {/* StyleFromSelectBlockChain */}
          <DogShowBtns>
            <SaveCreateNft>
              <SaveNftBtn onClick={handleSave}>
                <SaveText>
                  <h1>Save</h1>
                </SaveText>
              </SaveNftBtn>
              <CreateDogNftBtn onClick={handleSubmit}>
                Create Dog NFT
              </CreateDogNftBtn>
            </SaveCreateNft>
            <PageChanged>
              <NextButton Back>
                <Img
                  src={Back}
                  alt="back"
                  onClick={() => {
                    navigate("/create-dog-nft/register-veterinary");
                  }}
                />
              </NextButton>
              <div></div>
              {/* Empty <div> to put next on end */}
            </PageChanged>
          </DogShowBtns>
        </>
      )}
    </RegisterDogContainer>
  );
};

export default RegisterDogShow;
