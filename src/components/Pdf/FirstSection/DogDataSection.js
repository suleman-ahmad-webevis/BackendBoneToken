import React from "react";
import styled from "styled-components";
import Dog from "../../../assets/images/Pdf/Dog.png";
import { Img } from "../../../GlobalStyles";

const DogDataSection = ({ dog }) => {
  return (
    <DDWrapper>
      <DDHead>
        <img
          src={dog?.dogPic ? dog?.dogPic : Dog}
          alt="Dog"
          style={{ borderRadius: "50px" }}
        />
        <h5>DogData</h5>
      </DDHead>
      <DogDataData>
        <DogDataSec AlignItem="center">
          <Title>Male/Female</Title>
          <Value>{dog?.gender ? dog?.gender : "-"}</Value>
          <Title>Date of birth</Title>
          <Value>{dog?.dob ? dog?.dob : "-"}</Value>
          <Title>Country Birth</Title>
          <Value>{dog?.countryOfBirth ? dog?.countryOfBirth : "-"}</Value>
          <Title>Height</Title>
          <Value>{dog?.height ? dog?.height : "-"}</Value>
          <Title>Weight</Title>
          <Value>{dog?.weight ? dog?.weight : "-"}</Value>
          <Title>Length</Title>
          <Value>{dog?.length ? dog?.length : "-"}</Value>
          <Title>Coat type</Title>
          <Value>{dog?.coatType ? dog?.coatType : "-"}</Value>
        </DogDataSec>
        <DogDataSec AlignItem="flex-start">
          <Title>Breed</Title>
          <Value>{dog?.breed ? dog?.breed : "-"}</Value>
          <Title>Name</Title>
          <Value>{dog?.dogName ? dog?.dogName : "-"}</Value>
          <Title>Microchip number</Title>
          <Value>{dog?.microChip ? dog?.microChip : "-"}</Value>
          <Title> QR number </Title>
          <Value>1727281819 </Value>
          <Title>BSC Scan</Title>
          <Value>https://bscscan.com/</Value>
          <Title style={{ marginTop: "38px" }}>
            {" "}
            <span style={{ fontWeight: "700" }}>Sale Price :</span>{" "}
            <span style={{ fontWeight: "700", color: "rgba(177, 147, 60, 1)" }}>
              {dog?.price ? dog?.price : "-"}
            </span>{" "}
          </Title>
        </DogDataSec>
      </DogDataData>
    </DDWrapper>
  );
};

export default DogDataSection;

export const DDWrapper = styled.div`
  width: 80%;
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
    border-radius: 20px solid transparent;
    width: 25%;
  }
  h5 {
    font-weight: 900;
    font-size: 25px;
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
  font-size: 20px;
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
  padding: 5px 0px;
  font-weight: 300;
`;

export const Value = styled.div`
  width: 50%;
  padding: 5px 0px;
  font-weight: 400;
`;
