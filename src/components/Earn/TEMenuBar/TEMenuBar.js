import React from "react";
import styled from "styled-components";
import { MenuData } from "./TEMenuBarData";

const TEMenuBar = () => {
  return (
    <TEMenuBarContainer>
      {MenuData.map((value, index) => (
        <TEMenu key={index}>
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
  padding: 10px;
  grid-gap: 30px;
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
  @media screen and (max-width: 1520px) {
    grid-gap: 20px;
  }
  @media screen and (max-width: 1420px) {
    grid-gap: 10px;
  }
  @media screen and (max-width: 1320px) {
    grid-gap: 5px;
    padding: 8px;
  }
`;

const MenuText = styled.h5``;
