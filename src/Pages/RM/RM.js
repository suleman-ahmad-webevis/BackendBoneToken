import React from "react";
import RMComp from "../../components/RM/RMComp";
import styled from "styled-components";
import useBreakpoint from "../../hooks/useBreakPoint";
import CommonMobNav from "../../components/CommonMTNav/CommonMobNav";
import CommonTabNav from "../../components/CommonMTNav/CommonTabNav";

const RM = () => {
  const { isTablet, isSmallMobile, isMobile } = useBreakpoint();

  return (
    <RMContainer>
      {(isSmallMobile || isMobile) && <CommonMobNav />}
      {(isTablet || isSmallMobile || isMobile) && <CommonTabNav />}
      <RMHeading>Roadmap</RMHeading>
      <RMComp />
    </RMContainer>
  );
};

export default RM;

export const RMContainer = styled.div`
  padding: 10px 15px 20px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-gap: 20px;
  width: 100%;
  @media screen and (max-width: 1110px) {
    width: 100%;
    padding: 10px 5px 20px 5px;
  }
  @media screen and (max-width: 768px) {
    padding: 10px 15px 20px 15px;
  }
  @media screen and (max-width: 600px) {
    padding: 10px 2px 20px 2px;
  }
`;

export const RMHeading = styled.h5`
  font-weight: 900;
  font-size: 30px;
  line-height: 52px;
  color: #000000;
  align-self: flex-start;
`;
