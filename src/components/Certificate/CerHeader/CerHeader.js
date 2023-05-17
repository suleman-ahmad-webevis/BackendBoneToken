import React from "react";
import styled from "styled-components";
import DogData from "../../../assets/images/Certificate/DogData.png";
import Qr from "../../../assets/images/Certificate/Qr.png";
import { Img } from "../../../GlobalStyles";

const CerHeader = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Img src={DogData} alt="DogData" />
        <h5>DogData user ID</h5>
      </HeaderWrapper>
      <HeaderWrapper>
        <h5>Erc721 certificate number</h5>
        <Img src={Qr} alt="Qr" />
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default CerHeader;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 10px;
  width: 95%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  grid-gap: 15px;
  align-items: center;
  h5 {
    font-weight: 600;
    font-size: 9px;
    line-height: 14px;
    color: rgba(0, 0, 0, 0.7);
  }
`;
