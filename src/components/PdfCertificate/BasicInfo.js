import React from "react";
import styled from "styled-components";
import GoldenPaw from "../../assets/images/Certificate/GoldenPaw.png";
import WebsiteIcon from "../../assets/images/Certificate/WebsiteIcon.png";

import { Img } from "../../GlobalStyles";

const BasicInfo = ({ regDog, regOwner }) => {
  const basicInfoData = [
    {
      title: "Breeder Kennel Name",
      value: regDog?.dogName,
    },
    {
      title: "Owner Name",
      value: regOwner?.ownerName,
    },
    {
      title: "My DogData user ID",
      value: "dummyId",
    },
    {
      title: "Email",
      value: regOwner?.email,
    },
    {
      title: "Telephone",
      value: regOwner?.phone,
    },
  ];

  return (
    <BasicInfoContainer>
      <div>
        {basicInfoData.map((value) => (
          <BasicInfoWrapper>
            <Title>{value.title}</Title>
            <Img src={GoldenPaw} />
            <Data>{value.value}</Data>
          </BasicInfoWrapper>
        ))}
      </div>
      <WebInfoSection>
        <WebInfo>
          <Img src={WebsiteIcon} />
          <p>Breeder Website </p> : <a href="www.google.com"> - </a>
        </WebInfo>
        <WebInfo>
          <Img src={WebsiteIcon} />
          <p>Owner Website </p> :{" "}
          <a href="www.google.com"> {regOwner?.website}</a>
        </WebInfo>
      </WebInfoSection>
    </BasicInfoContainer>
  );
};

export default BasicInfo;

const BasicInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
`;
const BasicInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 20px;
  padding: 2px 0px;
`;

export const Title = styled.div`
  color: rgba(0, 0, 0, 0.7);
  width: 49%;
  text-align: start;
`;

export const Data = styled.div`
  width: 49%;
  text-align: end;
`;

export const WebInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
`;

export const WebInfo = styled.div`
  display: flex;
  grid-gap: 5px;
  p {
    font-weight: 600;
  }
  a {
    text-decoration: none;
  }
`;
