import React from "react";
import styled from "styled-components";
import Telegram from "../../../../../assets/images/Earn/Telegram.png";
import Twitter from "../../../../../assets/images/Earn/Twitter.png";
import Fb from "../../../../../assets/images/Earn/Fb.png";
import Insta from "../../../../../assets/images/Earn/Insta.png";
import Reddit from "../../../../../assets/images/Earn/Reddit.png";
import { Img } from "../../../../../GlobalStyles";

const SMShare = () => {
  return (
    <SMContainer>
      <Text Color="#0E626D" FontSize="14px" FontWeight="900">
        Social Media Share
      </Text>
      <Text Color="#A1B8BA" FontSize="12px" FontWeight="900">
        $DOG earned
      </Text>
      <EarnedPoints>
        <h5>0</h5>
      </EarnedPoints>
      <SMIcons>
        <Img src={Telegram} alt="SM" />
        <Img src={Twitter} alt="SM" />
        <Img src={Fb} alt="SM" />
        <Img src={Insta} alt="SM" />
        <Img src={Reddit} alt="SM" />
      </SMIcons>
    </SMContainer>
  );
};

export default SMShare;

export const SMContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

export const ADSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

export const Text = styled.div`
  font-weight: ${({ FontWeight }) => FontWeight};
  font-size: ${({ FontSize }) => FontSize};
  line-height: 19px;
  color: ${({ Color }) => Color};
`;

export const EarnedPoints = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  width: 100%;
  h5 {
    padding: 10px;
    font-weight: 900;
    font-size: 16px;
    line-height: 19px;
    color: #000;
  }
`;

export const SMIcons = styled.div`
  display: flex;
  grid-gap: 5px;
  align-self: center;
`;
