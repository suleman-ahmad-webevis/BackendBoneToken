import React from "react";
import styled from "styled-components";
import SwapCardOne from "./SwapCard/SwapCardOne";
import SwapCardTwo from "./SwapCard/SwapCardTwo";

import EarnSlider from "../../Earn/Sliders/EarnSlider";

const FirstRowSec = () => {
  return (
    <RowSecContainer>
      <MultiRowsSlider>
        <EarnSlider />
      </MultiRowsSlider>
      <SwapCards Width="48%">
        <SwapCardOne />
        <SwapCardTwo />
      </SwapCards>
    </RowSecContainer>
  );
};

export default FirstRowSec;

export const RowSecContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 10px;
`;

export const MultiRowsSlider = styled.div`
  width: 48%;
`;

export const SwapCards = styled.div`
  padding-top: 22px;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  width: ${({ Width }) => Width};
`;
