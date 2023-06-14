import React from "react";
import styled from "styled-components";
import Dog from "../../../assets/images/Pdf/Dog.png";
import { Img } from "../../../GlobalStyles";

const DogDataSection = ({ dog }) => {
  return (
    <DDWrapper>
      <DDHead>
        <Img src={Dog} alt="Dog" />
        <h5>DogData</h5>
      </DDHead>
      <DogDataData>
        <DogDataSec AlignItem="center">
          <Title>Male/Female</Title>
          <Value>{dog?.gender}</Value>
          <Title>Date of birth</Title>
          <Value>{dog?.dob}</Value>
          <Title>Country Birth</Title>
          <Value>{dog.countryOfBirth}</Value>
          <Title>Height</Title>
          <Value>{dog?.height}</Value>
          <Title>Weight</Title>
          <Value>{dog?.weight}</Value>
          <Title>Length</Title>
          <Value>{dog?.length}</Value>
          <Title>Coat type</Title>
          <Value>{dog?.coatType}</Value>
        </DogDataSec>
        <DogDataSec AlignItem="flex-start">
          <Title>Breed</Title>
          <Value>{dog.breed}</Value>
          <Title>Name</Title>
          <Value>{dog?.dogName}</Value>
          <Title>Microchip number</Title>
          <Value></Value>
          <Title> QR number </Title>
          <Value>1727281819 </Value>
          <Title>BSC Scan</Title>
          <Value>https://bscscan.com/</Value>
          <Title style={{ AlignSelf: "flex-end" }}>
            {" "}
            Sale Price : {dog?.price}{" "}
          </Title>
        </DogDataSec>
      </DogDataData>
    </DDWrapper>
  );
};

export default DogDataSection;

export const DDWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
`;

export const DDHead = styled.div`
  display: flex;
  grid-gap: 10px;
  align-items: center;
  width: 30%;
  img {
    border-radius: 20px;
  }
  h5 {
    font-weight: 900;
    font-size: 15px;
    line-height: 95%;
    color: #b1933c;
  }
`;

export const DogDataData = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 80px;
`;

export const DogDataSec = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: ${({ AlignItem }) => AlignItem};
`;

export const Title = styled.div`
  width: 50%;
`;

export const Value = styled.div`
  width: 50%;
`;
