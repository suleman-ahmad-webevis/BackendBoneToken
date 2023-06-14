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
        <PNFTSec AlignItem="center">
          <Title>Male/Female</Title>
          <Value>Female</Value>
          <Title>Date of birth</Title>
          <Value>10/01/2023</Value>
          <Title>Country Birth</Title>
          <Value>Netherlands</Value>
          <Title>Height</Title>
          <Value>20cm</Value>
          <Title>Weight</Title>
          <Value>32kg</Value>
          <Title>Length</Title>
          <Value>24cm</Value>
          <Title>Coat type</Title>
          <Value>Smooth</Value>
        </PNFTSec>
        <PNFTSec AlignItem="flex-start">
          <Title>Breed</Title>
          <Value>Doberman</Value>
          <Title>Name</Title>
          <Value>Jane</Value>
          <Title>Microchip number</Title>
          <Value>4347dewfhjwek</Value>
          <Title> QR number </Title>
          <Value>1727281819 </Value>
          <Title>BSC Scan</Title>
          <Value>https://bscscan.com/</Value>
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
  }
  h5 {
    font-weight: 900;
    font-size: 15px;
    line-height: 95%;
    color: #b1933c;
  }
`;

export const PNFTData = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 80px;
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
`;

export const Value = styled.div`
  width: 50%;
`;
