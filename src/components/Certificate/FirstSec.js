import React from "react";
import OwnerSec from "./FirstSec/OwnerSec";
import styled from "styled-components";

const FirstCer = () => {
  return (
    <FirstCerWrapper>
      <OwnerSec />
    </FirstCerWrapper>
  );
};

export default FirstCer;

export const FirstCerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 20px 10px;
`;
