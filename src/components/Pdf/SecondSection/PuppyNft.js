import React from "react";
import Puppy from "../../../assets/images/Pdf/Puppy.png";
import styled from "styled-components";
import { Img } from "../../../GlobalStyles";

const PuppyNft = () => {
  return (
    <PNFTWrapper>
      <PNFTHead>
        <Img src={Puppy} alt="Puppy" />
        <h5>Puppy NFTS</h5>
      </PNFTHead>
      <PNFTData>
        <PNFTSec>
          <Title>Male/Female</Title>
          <Value>-</Value>
          <Title>Date of birth</Title>
          <Value>-</Value>
          <Title>Country Birth</Title>
          <Value>-</Value>
          <Title>Height</Title>
          <Value>-</Value>
          <Title>Weight</Title>
          <Value>-</Value>
          <Title>Length</Title>
          <Value>-</Value>
          <Title>Coat type</Title>
          <Value>-</Value>
        </PNFTSec>
        <PNFTSec AlignItem="flex-start">
          <Title>Breed</Title>
          <Value>-</Value>
          <Title>Name</Title>
          <Value>-</Value>
          <Title>Microchip number</Title>
          <Value>-</Value>
          <Title> QR number </Title>
          <Value>- </Value>
          <Title>BSC Scan</Title>
          <Value>-</Value>
        </PNFTSec>
      </PNFTData>
    </PNFTWrapper>
  );
};

export default PuppyNft;

export const PNFTWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
`;

export const PNFTHead = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  grid-gap: 20px;
  img {
    border-radius: 20px;
    width: 15%;
  }
  h5 {
    font-weight: 900;
    font-size: 18px;
    line-height: 95%;
    color: #b1933c;
  }
`;

export const PNFTData = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 80px;
  font-size: 20px;
`;

export const PNFTSec = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: ${({ AlignItem }) => AlignItem};
`;

export const Title = styled.div`
  width: 50%;
  padding: 5px 0px;
`;

export const Value = styled.div`
  width: 50%;
  padding: 5px 0px;
`;
