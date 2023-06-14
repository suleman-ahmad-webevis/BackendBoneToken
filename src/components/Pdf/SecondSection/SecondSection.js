import React from "react";
import styled from "styled-components";
import { Img } from "../../../GlobalStyles";
import Logo from "../../../assets/images/Pdf/Logo.png";
import Qr from "../../../assets/images/Pdf/Qr.png";
import RightPaw from "../../../assets/images/Pdf/RightPaw.png";
import LeftPaw from "../../../assets/images/Pdf/LeftPaw.png";
import {
  CerNo,
  DDUserId,
  Footer,
  Header,
  LeftHead,
  RightHead,
} from "../../../Pages/Pdf";
import InsuranceSection from "./InsuranceSection";
import DogShowSection from "./DogShow";
import PuppyNft from "./PuppyNft";

const SecondSection = () => {
  return (
    <SSWrapper id="second">
      <Header>
        <RightHead>
          <Img src={Logo} alt="Logo" />
          <DDUserId>
            <span>DogData user ID</span>
            <h5>00001</h5>
          </DDUserId>
        </RightHead>
        <LeftHead>
          <CerNo>
            <span>Erc721 certificate number</span>
            <h5>00000001</h5>
          </CerNo>
          <Img src={Qr} alt="Qr" />
        </LeftHead>
      </Header>
      <InsuranceSection />
      <DogShowSection />
      <PuppyNft />
      <Footer>
        <Img src={LeftPaw} alt="LeftPaw" />
        <Img src={RightPaw} alt="RightPaw" />
      </Footer>
    </SSWrapper>
  );
};

export default SecondSection;

export const SSWrapper = styled.div`
  padding: 20px;
  border: 2px solid #b1933c;
  margin-left: 2px;
  background-color: #f0f7fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  margin: auto;
  /* width: 587px;
  height: 834px; */
  width: 1122px;
  /* height: 834px; */
  height: 1587px;
  justify-content: space-between;
`;
