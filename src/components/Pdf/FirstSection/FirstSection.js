import React from "react";
import styled from "styled-components";
import OwnerSection from "./OwnerSection";
import DogDataSection from "./DogDataSection";
import VacSection from "./VacSection";
import {
  CerNo,
  DDUserId,
  Footer,
  Header,
  LeftHead,
  RightHead,
} from "../../../Pages/Pdf";
import { Img } from "../../../GlobalStyles";
import Logo from "../../../assets/images/Pdf/Logo.png";
import Qr from "../../../assets/images/Pdf/Qr.png";
import RightPaw from "../../../assets/images/Pdf/RightPaw.png";
import LeftPaw from "../../../assets/images/Pdf/LeftPaw.png";

const FirstSection = ({ dog, owner, veterinary }) => {
  return (
    <FSPer>
      <FSWrapper id="first">
        {" "}
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
              <h5>Erc721 certificate number</h5>
              <h5>00000001</h5>
            </CerNo>
            <Img src={Qr} alt="Qr" />
          </LeftHead>
        </Header>
        <OwnerSection owner={owner} />
        <DogDataSection dog={dog} />
        <VacSection veterinary={veterinary} />
        <Footer>
          <Img src={LeftPaw} alt="LeftPaw" />
          <Img src={RightPaw} alt="RightPaw" />
        </Footer>
      </FSWrapper>
    </FSPer>
  );
};

export default FirstSection;

export const FSWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  border: 2px solid #b1933c;
  margin-left: 2px;
  background-color: #f0f7fc;
  /* height: 834px; */
  /* height: 1587px; */
  padding-top: 30px;
  margin: auto;
  /* width: 587px;*/
  width: 1122px;
  /* height: 834px; */
  height: 1587px;
`;

export const FSPer = styled.div`
  width: 100%;
`;
