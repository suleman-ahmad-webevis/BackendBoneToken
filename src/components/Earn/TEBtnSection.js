import React from "react";
import Me from "../../assets/images/Earn/Me.png";
import MyDogs from "../../assets/images/Earn/MyDogs.png";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";

const TEBtnSection = ({ swapComp, setSwapComp }) => {
  return (
    <TEBtnContainer>
      <MeBtn onClick={() => setSwapComp(true)} swapComp={swapComp}>
        <Img src={Me} />
      </MeBtn>
      <MyDogBtn onClick={() => setSwapComp(false)} swapComp={swapComp}>
        <Img src={MyDogs} />
      </MyDogBtn>
    </TEBtnContainer>
  );
};

export default TEBtnSection;

export const TEBtnContainer = styled.div`
  display: flex;
  grid-gap: 10px;
`;

export const MeBtn = styled.div`
  display: flex;
  background: #ffffff;
  border: ${({ swapComp }) =>
    swapComp ? "3px solid #0e626d" : "3px solid #fff"};
  border-radius: 8px;
  padding: 10px 15px;
`;

export const MyDogBtn = styled.div`
  display: flex;
  background: #ffffff;
  border: ${({ swapComp }) =>
    !swapComp ? "3px solid #0e626d" : "3px solid #fff"};
  border-radius: 8px;
  padding: 10px 15px;
`;
