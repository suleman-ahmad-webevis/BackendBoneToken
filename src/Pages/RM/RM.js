import React from "react";
import RMComp from "../../components/RM/RMComp";
import styled from "styled-components";

const RM = () => {
  return (
    <RMContainer>
      <RMHeading>Roadmap</RMHeading>
      <RMComp />
    </RMContainer>
  );
};

export default RM;

export const RMContainer = styled.div`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-gap: 20px;
  width: 100%;
`;

export const RMHeading = styled.h5`
  font-weight: 900;
  font-size: 36px;
  line-height: 52px;
  color: #000000;
  align-self: flex-start;
`;
