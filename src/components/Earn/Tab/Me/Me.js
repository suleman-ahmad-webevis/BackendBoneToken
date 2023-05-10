import React from "react";
import PricesSection from "./Price/Price";
import styled from "styled-components";
import One from "../../../../assets/images/Earn/Tab/Coins/One.png";
import Two from "../../../../assets/images/Earn/Tab/Coins/Two.png";
import Three from "../../../../assets/images/Earn/Tab/Coins/Three.png";
import Four from "../../../../assets/images/Earn/Tab/Coins/Four.png";
import Five from "../../../../assets/images/Earn/Tab/Coins/Five.png";
import DownArrow from "../../../../assets/images/Earn/DownArrow.png";
import { Img } from "../../../../GlobalStyles";
import SMShare from "./SMShare/SMShare";
import JoinAD from "./JoinAD/JoinAD";
import DogFeedingSlider from "../../Sliders/DogFeedingSlider";
import StreetDog from "../../../../assets/images/Earn/StreetDog.png";

const Me = () => {
  const data = [StreetDog, StreetDog, StreetDog, StreetDog, StreetDog, StreetDog, StreetDog, StreetDog];
  return (
    <>
      <PricesSection />
      {/* DonateSection */}
      <DonateSection>
        <DonateIcon>
          <Img src={One} />
          <Img src={Two} />
          <Img src={Three} />
          <Img src={Four} />
          <Img src={Five} />
        </DonateIcon>
        <AmountSec>
          <Amount>
            <AmountText Color="#000000">0</AmountText>
          </Amount>
          <Amount>
            <AmountText Color="#5f7b7e">$</AmountText>
            <Img src={DownArrow} />
          </Amount>
        </AmountSec>
        <DonateBtn>Donate</DonateBtn>
      </DonateSection>
      {/* DonateSection */}
      <DogFeedingSlider data={data}/>

      <SMShare />
      <JoinAD />
    </>
  );
};

export default Me;

export const DonateSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 10px;
`;

export const DonateIcon = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
`;

export const AmountSec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 15px;
`;

export const Amount = styled.div`
  display: flex;
  grid-gap: 2px;
  align-items: center;
`;

export const AmountText = styled.h5`
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  color: ${({ Color }) => Color};
`;

export const DonateBtn = styled.button`
  background: #95cc82;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  color: #ffffff;
  text-align: center;
  padding: 10px 8px;
  border: none;
  font-size: 16px;
  font-weight: 800;
  width: 100%;
`;
