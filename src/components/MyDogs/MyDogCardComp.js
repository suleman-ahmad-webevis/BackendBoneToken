import React from "react";
import {
  ButtonExpand,
  DetailsSec,
  DetailText,
  DogDetails,
  DogVideo,
  PeopleIcon,
  PersonalDetail,
  MyDogCard,
  ExpandedButtons,
  ExpandedBtnContainer,
} from "./MyDog.style";
import { GlobalHeading, Img } from "../../GlobalStyles";
import MyDogSetting from "../../assets/images/MyDog/MyDogSetting.png";
import { useNavigate } from "react-router-dom";
const MyDogCardComp = ({ expand, setExpand, value }) => {
  const navigate = useNavigate();
  return (
    <>
      <MyDogCard>
        {!expand && (
          <>
            <DetailText>
              <DetailsSec>
                <GlobalHeading
                  Color={"#8F98A8"}
                  FontSize={"12px"}
                  FontWeight={"400"}
                  LineHeight={"18px"}
                >
                  Name
                </GlobalHeading>
                <GlobalHeading
                  Color={"#282C34"}
                  FontSize={"12px"}
                  FontWeight={"400"}
                  LineHeight={"18px"}
                >
                  {value?.dog?.dogName}
                </GlobalHeading>
              </DetailsSec>
              <DetailsSec>
                <GlobalHeading
                  Color={"#8F98A8"}
                  FontSize={"12px"}
                  FontWeight={"400"}
                  LineHeight={"18px"}
                >
                  Country:
                </GlobalHeading>
                <GlobalHeading
                  Color={"#282C34"}
                  FontSize={"12px"}
                  FontWeight={"400"}
                  LineHeight={"18px"}
                >
                  {value?.dog?.countryOfBirth}
                </GlobalHeading>
              </DetailsSec>
              <DetailsSec>
                <GlobalHeading
                  Color={"#8F98A8"}
                  FontSize={"12px"}
                  FontWeight={"400"}
                  LineHeight={"18px"}
                >
                  DOB:
                </GlobalHeading>
                <GlobalHeading
                  Color={"#282C34"}
                  FontSize={"12px"}
                  FontWeight={"400"}
                  LineHeight={"18px"}
                >
                  {value?.dog?.dob}
                </GlobalHeading>
              </DetailsSec>
              <DetailsSec>
                <GlobalHeading
                  Color={"#8F98A8"}
                  FontSize={"12px"}
                  FontWeight={"400"}
                  LineHeight={"18px"}
                >
                  Breed:
                </GlobalHeading>
                <GlobalHeading
                  Color={"#282C34"}
                  FontSize={"12px"}
                  FontWeight={"400"}
                  LineHeight={"18px"}
                >
                  {value?.dog?.breed}
                </GlobalHeading>
              </DetailsSec>
            </DetailText>
          </>
        )}
        <DogVideo>
          <img src={value?.dog?.dogPic} alt="MyDog" />
          <video width="120px" height="76px" controls>
            <source src={value?.dog?.dogVideoLink} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </DogVideo>
        {expand && (
          <>
            <DogDetails width="90%">
              <h1>DogData NFT {value?._id}</h1>
              <hr />
              <PersonalDetail>
                <h2>Name :</h2>
                <p>{value?.dog?.dogName}</p>
              </PersonalDetail>
              <PersonalDetail>
                <h2>Kennel Name:</h2>
                <p>{value?.dog?.breed} </p>
              </PersonalDetail>
              <PersonalDetail>
                <h2>DOB:</h2>
                <p>{value?.dog?.dob}</p>
              </PersonalDetail>
              <PersonalDetail>
                <h2>Country:</h2>
                <p>{value?.dog?.countryOfBirth}</p>
              </PersonalDetail>
              <PersonalDetail>
                <h2>Breed:</h2>
                <p>{value?.dog?.breed} </p>
              </PersonalDetail>
              <PersonalDetail>
                <h2>Certificate Link:</h2>
                <p>
                  <span>View</span>&nbsp;or&nbsp;
                  <span>Edit</span>
                </p>
              </PersonalDetail>
              <PersonalDetail gap="5px">
                <h2>Number of Views:</h2>
                <p>
                  0 <PeopleIcon />{" "}
                </p>
              </PersonalDetail>
              <PersonalDetail>
                <h2>For sale?</h2>
                <input type="checkbox" id="switch" />
                <label htmlFor="switch">Toggle</label>
              </PersonalDetail>
            </DogDetails>
            <ExpandedBtnContainer>
              <ExpandedButtons>
                <ButtonExpand
                  bg="#0E626D"
                  border="1px solid #0E626D"
                  color="#FFFFFF"
                  onClick={() =>
                    navigate(`/edit-dog-nft/dog-register`, {
                      state: {
                        dogId: value._id,
                      },
                    })
                  }
                >
                  Edit
                </ButtonExpand>
                <ButtonExpand
                  bg="#0E626D"
                  border="1px solid #0E626D"
                  color="#fff"
                >
                  Email
                </ButtonExpand>
                <ButtonExpand bg="#0E626D">Share</ButtonExpand>
                <ButtonExpand
                  bg="#0E626D"
                  border="1px solid #0E626D"
                  color="#FFFFFF"
                >
                  Transfer
                </ButtonExpand>
                <ButtonExpand
                  bg="#0E626D"
                  border="1px solid #0E626D"
                  color="#FFFFFF"
                  onClick={() => navigate("/settings")}
                >
                  <Img src={MyDogSetting} />
                </ButtonExpand>
              </ExpandedButtons>
            </ExpandedBtnContainer>
          </>
        )}
        <p onClick={() => setExpand(!expand)} style={{ cursor: "pointer" }}>
          {!expand ? "Expand View" : "Minimize view"}
        </p>
      </MyDogCard>
    </>
  );
};

export default MyDogCardComp;
