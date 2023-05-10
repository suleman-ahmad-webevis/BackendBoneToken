import React from "react";
import styled from "styled-components";
import EarnDog from "../../../../assets/images/Earn/EarnDog.png";
import { Img } from "../../../../GlobalStyles";
import { CombinedText, PurchasesText } from "../../Me/Purchases";

const MdThirdRowCard = ({ value }) => {
  return (
    <MdThirdCardWrapper key={value.titleOne}>
      <ImgAndText>
        <Img src={EarnDog} />
        <PurchasesText Color="#0E626D" FontSize="24px" FontWeight="900">
          {value.valueOne}
        </PurchasesText>
      </ImgAndText>
      <CombinedText>
        <PurchasesText
          Color="#79999D"
          FontSize="20px"
          SmallLaptopFS="18px"
          FontWeight="900"
        >
          {value.titleTwo}
        </PurchasesText>
        <PurchasesText
          Color="#33A2B0"
          FontSize="35px"
          SmallLaptopFS="20px"
          FontWeight="900"
        >
          {value.valueTwo}
        </PurchasesText>
      </CombinedText>
    </MdThirdCardWrapper>
  );
};

export const MdThirdCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45%;
  background: #ffffff;
  border: 2px solid #e6fafd;
  box-shadow: 0px 2px 4px #c4e9ee;
  border-radius: 8px;
  padding: 10px 20px;
`;

export const ImgAndText = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 22px;
`;

export default MdThirdRowCard;
