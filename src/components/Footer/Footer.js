import styled from "styled-components";
import React from "react";
import { Img } from "../../GlobalStyles";
import Heading from "../Heading/Heading";
import FooterDog from "../../assets/images/Footer/FooterDog.png";
import FooterPro from "../../assets/images/Footer/FooterPro.png";
import FooterProd from "../../assets/images/Footer/FooterProd.png";
import FooterBT from "../../assets/images/Footer/FooterBT.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <FooterLogo>
          <Img src={FooterBT} alt="FooterBt" />
        </FooterLogo>
        <Img src={FooterProd} alt="FooterProd" />
      </FooterLeft>
      <FooterCenter>
        <Heading level={8} to="#">
          Special Offer
        </Heading>
        <FooterText>
          <Heading level={8} Color FontSmall to="#">
            Buy
          </Heading>
          <Heading level={8} FontSmall to="#">
            10
          </Heading>
          <Heading level={8} Color FontSmall to="#">
            VetBed
          </Heading>
          <Heading level={8} Color FontSmall to="#">
            Save
          </Heading>
          <Heading level={8} FontSmall to="#">
            10%
          </Heading>
        </FooterText>
      </FooterCenter>
      <FooterRight>
        <Img src={FooterPro} alt="FooterPro" />
        <Img src={FooterDog} alt="FooterDog" />
      </FooterRight>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #0e626d;
  /* position: fixed; */
  /* bottom: 0; */
  width: 100%;

  @media screen and (max-width: 1550px) {
    img {
      width: 200px;
    }
  }
  @media screen and (max-width: 1150px) {
    img {
      width: 150px;
    }
  }
  @media screen and (max-width: 990px) {
    img {
      width: 100px;
    }
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    img {
      width: 200px;
    }
  }
  @media screen and (max-width: 475px) {
    align-items: center;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  grid-gap: 10px;
  @media screen and (max-width: 475px) {
    flex-direction: column;
  }
`;

const FooterRight = styled.div`
  display: flex;
  grid-gap: 10px;

  @media screen and (max-width: 800px) {
    align-self: flex-end;
  }

  @media screen and (max-width: 475px) {
    flex-direction: column;
    align-self: center;
  }
`;

const FooterText = styled.div`
  display: flex;
  grid-gap: 8px;
`;

const FooterCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const FooterLogo = styled.div`
  align-self: center;
  img {
    width: 200px;
    height: 100px;
  }
`;
export default Footer;
