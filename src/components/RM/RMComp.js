import React from "react";
import styled from "styled-components";
import One from "../../assets/images/RoadMap/One.png";
import Two from "../../assets/images/RoadMap/Two.png";
import Three from "../../assets/images/RoadMap/Three.png";
import Four from "../../assets/images/RoadMap/Four.png";
import Five from "../../assets/images/RoadMap/Five.png";
import Six from "../../assets/images/RoadMap/Six.png";
import { Img } from "../../GlobalStyles";
import Line from "../../assets/images/RoadMap/Tab/Line.png";
import useBreakpoint from "../../hooks/useBreakPoint";
import { RMImg } from "../../Pages/RM/RM";

const RMComp = () => {
  const { isTablet, isSmallMobile, isMobile } = useBreakpoint();

  return (
    <>
      <RMWrapper>
        {(isTablet || isSmallMobile || isMobile) && (
          <RMImg src={Line} alt="line" />
        )}
        <RMImage>
          <Img src={One} alt="One" />
        </RMImage>
        <RMImage>
          <Img src={Two} alt="Two" />
        </RMImage>
        <RMImage>
          <Img src={Three} alt="Three" />
        </RMImage>
        <RMImage>
          <Img src={Four} alt="Four" />
        </RMImage>
        <RMImage>
          <Img src={Five} alt="Five" />
        </RMImage>
        <RMImage>
          <Img src={Six} alt="Six" />
        </RMImage>
      </RMWrapper>
    </>
  );
};

export default RMComp;

export const RMWrapper = styled.div`
  display: flex;
  grid-gap: 30px 10px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  background: red;
  max-height: auto;
`;

export const RMImage = styled.div`
  width: 32%;
  max-width: 32%;
  z-index: 2;
  img {
    margin: auto;
  }
  @media screen and (max-width: 1110px) {
    width: 50%;
    max-width: 50%;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
    max-width: 90%;
  }
`;
