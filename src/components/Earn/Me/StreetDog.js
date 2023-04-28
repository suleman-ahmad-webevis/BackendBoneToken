import React from "react";
import styled from "styled-components";
import { CombinedText, PurchasesText } from "./Purchases";
import DonateIcons from "../../../assets/images/Earn/DonateIcons.png";
import DownArrow from "../../../assets/images/Earn/DownArrow.png";
import { Img } from "../../../GlobalStyles";
import Slider from "../Sliders/Slider";

const SDF = () => {
  return (
    <SDFContainer>
      <FirstRow>
        <PurchasesText Color="#0E626D" FontSize="24px" FontWeight="900">
          Street Dog Feeding
        </PurchasesText>
        <CombinedText Gap="22px">
          <PurchasesText Color="#79999D" FontSize="20px" FontWeight="900">
            Amount Donated
          </PurchasesText>
          <PurchasesText Color="#33A2B0" FontSize="35px" FontWeight="900">
            $0
          </PurchasesText>
        </CombinedText>
        <CombinedText Gap="22px">
          <PurchasesText Color="#79999D" FontSize="20px" FontWeight="900">
            DOG earned
          </PurchasesText>
          <PurchasesText Color="#33A2B0" FontSize="35px" FontWeight="900">
            0
          </PurchasesText>
        </CombinedText>
        <DonateSection>
          <DonateIcon>
            <Img src={DonateIcons} />
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
      </FirstRow>
      <Slider />
      <SecondRow></SecondRow>
    </SDFContainer>
  );
};

export default SDF;

export const SDFContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  padding: 30px 30px;
  background: #ffffff;
  border: 2px solid #e6fafd;
  box-shadow: 0px 2px 4px #c4e9ee;
  border-radius: 8px;
  width: 90%;
`;

export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DonateSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

export const DonateIcon = styled.div``;

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
`;

export const SecondRow = styled.div`
  display: flex;
`;
