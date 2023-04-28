import React from "react";
import styled from "styled-components";
import { CombinedText, PurchasesText } from "./Purchases";
import Telegram from "../../../assets/images/Earn/Telegram.png";
import Twitter from "../../../assets/images/Earn/Twitter.png";
import Fb from "../../../assets/images/Earn/Fb.png";
import Insta from "../../../assets/images/Earn/Insta.png";
import Reddit from "../../../assets/images/Earn/Reddit.png";
import { Img } from "../../../GlobalStyles";

const SocialMediaShare = () => {
  return (
    <SMSContainer>
      <PurchasesText Color="#0E626D" FontSize="24px" FontWeight="900">
        Social Media Share
      </PurchasesText>
      <SocialIcons>
        <Img src={Telegram} />
        <Img src={Twitter} />
        <Img src={Fb} />
        <Img src={Insta} />
        <Img src={Reddit} />
      </SocialIcons>
      <CombinedText Gap="22px">
        <PurchasesText Color="#79999D" FontSize="20px" FontWeight="900">
          $DOG earned
        </PurchasesText>
        <PurchasesText Color="#33A2B0" FontSize="35px" FontWeight="900">
          0
        </PurchasesText>
      </CombinedText>
    </SMSContainer>
  );
};

export const SMSContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: 2px solid #e6fafd;
  box-shadow: 0px 2px 4px #c4e9ee;
  border-radius: 8px;
  width: ${({ Width }) => Width ?? "72%"};
  padding: 30px 20px;
`;

export const SocialIcons = styled.div`
  display: flex;
  grid-gap: 2px;
`;
export default SocialMediaShare;
