import React from "react";
import styled from "styled-components";
import { teMenuBarData } from "./TEMenuBarData";

const TEMenuBar = () => {
  return (
    <TEMenuBarContainer>
      {teMenuBarData.map((value) => (
        <TEMenu>
          <MenuText>{value}</MenuText>
          <MenuText>0</MenuText>
        </TEMenu>
      ))}
    </TEMenuBarContainer>
  );
};

export default TEMenuBar;

export const TEMenuBarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  grid-gap: 10px;
  div:nth-child(9) {
    background: #58c069;
    h4 {
      color: #fff;
    }
    h5 {
      color: #fff;
    }
  }
`;

export const TEMenu = styled.div`
  border: 1px solid #ebf0f0;
  border-radius: 8px;
  display: flex;
  padding: 15px 12px;
  grid-gap: 40px;
  background: #fff;
  h4 {
    font-weight: bold;
    font-size: 14px;
    line-height: 109.5%;
    color: rgba(121, 153, 157, 0.7);
  }
  h5 {
    font-weight: bold;
    font-size: 14px;
    color: #33a2b0;
  }
`;

const MenuText = styled.h5``;
