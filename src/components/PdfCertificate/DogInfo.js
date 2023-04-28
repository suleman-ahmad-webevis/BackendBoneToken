import React from "react";
import styled from "styled-components";
import DogLogo from "../../assets/images/Certificate/DogLogo.png";
import FileIcon from "../../assets/images/Certificate/FileIcon.png";
import { Img } from "../../GlobalStyles";

const DogInfo = ({ regDog }) => {
  const LDogInfo = [
    {
      title: "Breed",
      value: regDog?.breed ? regDog?.breed : "-",
    },
    {
      title: "Name",
      value: regDog?.dogName ? regDog?.dogName : "-",
    },
    {
      title: "Microchip number",
      value: regDog?.microchipNo ? regDog.microchipNo : "-",
    },
    {
      title: "QR number",
      value: regDog?.qrNo ? regDog?.qrNo : "-",
    },
    {
      title: "QR code",
      value: regDog?.qrCode ? regDog?.qrCode : "-",
    },
  ];
  const RDogInfo = [
    {
      title: "Male/Female",
      value: regDog?.gender ? regDog?.gender : "-",
    },
    {
      title: "Date of birth",
      value: regDog?.dob ? regDog?.dob : "-",
    },
    {
      title: "Country Birth",
      value: regDog?.countryOfBirth ? regDog?.countryOfBirth : "-",
    },
    {
      title: "Height",
      value: regDog?.height ? regDog?.height : "-",
    },
    {
      title: "Weight",
      value: regDog?.weight ? regDog?.weight : "-",
    },
    {
      title: "Length",
      value: regDog?.length ? regDog?.length : "-",
    },
    {
      title: "Coat type",
      value: regDog?.coatType ? regDog?.coatType : "-",
    },
  ];
  return (
    <DogInfoContainer>
      <HeadingLogo>
        <Img src={DogLogo} />
      </HeadingLogo>
      <DogInfoSection>
        {/* Left */}
        <DogInfoLeftRight>
          <DogInfoTitle>
            {LDogInfo.map((value) => (
              <div style={{ display: "flex", gridGap: "20px" }}>
                <p>{value.title}</p>
                <p>{value.value}</p>
              </div>
            ))}
          </DogInfoTitle>
        </DogInfoLeftRight>
        {/* Right */}
        <DogInfoLeftRight>
          <DogInfoTitle>
            {RDogInfo.map((value) => (
              <div style={{ display: "flex", gridGap: "20px" }}>
                <p>{value.title}</p>
                <p>{value.value}</p>
              </div>
            ))}
          </DogInfoTitle>
        </DogInfoLeftRight>
      </DogInfoSection>
      <DogSaleSection>
        <DogSale>
          <Img src={FileIcon} />
          <p>Dog sale contract link:</p>
          <a href="www.google.com">
            {" "}
            https://MyDogData.com/DogSaleContract14273
          </a>
        </DogSale>
        <DogSale>
          <p>Asset value:</p>
          <p style={{ color: "#B1933C" }}>$800</p>
        </DogSale>
        <DogSale>
          <p style={{ color: "#455B96" }}>Erc721 certificate number</p>
        </DogSale>
      </DogSaleSection>
    </DogInfoContainer>
  );
};

export default DogInfo;

const DogInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeadingLogo = styled.div``;

const DogInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DogInfoLeftRight = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;

const DogInfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
`;

const DogSaleSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
  margin-top: 15px;
`;

const DogSale = styled.div`
  display: flex;
  grid-gap: 5px;
  p {
    color: #000000;
    font-weight: 600;
  }
  a {
    color: #455b96;
  }
`;
