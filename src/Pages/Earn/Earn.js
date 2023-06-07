import React from "react";
import EarnComp from "../../components/Earn/EarnComp";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Earn = () => {
  return (
    <EarnContainer>
      <EarnComp />
    </EarnContainer>
  );
};

export default Earn;

export const EarnContainer = styled.div`
  display: flex;
  grid-gap: 20px;
  padding: 20px 10px;
`;
