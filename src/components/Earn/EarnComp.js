import React, { useState } from "react";
import TEBtnSection from "./TEBtnSection";
import styled from "styled-components";
import TEMenuBar from "./TEMenuBar/TEMenuBar";
import FirstRowSec from "./FirstRowSection/FirstRowSec";
import Me from "./Me/Me";
import MyDogs from "./MyDogs/MyDogs";

const EarnComp = () => {
  const [swapComp, setSwapComp] = useState(true);
  return (
    <EarnCompContainer>
      <TEBtnSection swapComp={swapComp} setSwapComp={setSwapComp} />
      <TEMenuBar />
      <FirstRowSec />
      {swapComp ? <Me /> : <MyDogs />}
      <TEMenuBar />
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
