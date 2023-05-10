import React, { useState } from "react";
import TEBtnSection from "./TEBtnSection";
import styled from "styled-components";
import TEMenuBar from "./TEMenuBar/TEMenuBar";
import FirstRowSec from "./FirstRowSection/FirstRowSec";
import Me from "./Me/Me";
import MyDogs from "./MyDogs/MyDogs";
import useBreakpoint from "../../hooks/useBreakPoint";
import EarnTab from "./Tab/EarnTab";
import CommonMobNav from "../CommonMTNav/CommonMobNav";
import CommonTabNav from "../CommonMTNav/CommonTabNav";

const EarnComp = () => {
  const [swapComp, setSwapComp] = useState(true);
  const { isDesktop, isTablet, isMobile, isSmallMobile } = useBreakpoint();

  return (
    <EarnCompContainer>
      {(isSmallMobile || isMobile) && <CommonMobNav />}
      {(isTablet || isSmallMobile || isMobile) && <CommonTabNav />}
      {(isTablet || isSmallMobile || isMobile) && (
        <TabHeading>2Earn</TabHeading>
      )}
      <TEBtnSection swapComp={swapComp} setSwapComp={setSwapComp} />
      {isDesktop ? (
        <>
          <TEMenuBar />
          <FirstRowSec />
          {swapComp ? <Me /> : <MyDogs />}
          <TEMenuBar />
        </>
      ) : (
        <EarnTab swapComp={swapComp} />
      )}
    </EarnCompContainer>
  );
};

export default EarnComp;

export const EarnCompContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 25px;
  padding: 15px 20px;
`;

export const TabHeading = styled.h5`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
`;
