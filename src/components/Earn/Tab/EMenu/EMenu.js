import React from "react";
import styled from "styled-components";
import { TabMenuData } from "../../TEMenuBar/TEMenuBarData";

const EMenu = () => {
  return (
    <MenuWrapper>
      {TabMenuData.map(({ title, width, bGColor }, index) => (
        <MenuItem Width={width} key={index}>
          <h5> {title}</h5>
          <Price BGColor={bGColor}>
            <h5>0</h5>
          </Price>
        </MenuItem>
      ))}
      <ClaimBtn>
        <h5>Claim 0</h5>
      </ClaimBtn>
    </MenuWrapper>
  );
};

export default EMenu;

export const MenuWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  grid-gap: 10px 0px;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  width: ${({ Width }) => Width};
  h5 {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #a1b8ba;
  }
`;

export const Price = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  background-color: ${({ BGColor }) => BGColor};
  h5 {
    padding: 12px;
    font-weight: 900;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
`;

export const ClaimBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 43px;
  background: #58c069;
  border: 1px solid #4dab5c;
  border-radius: 8px;
  width: 100%;
  h5 {
    font-weight: 900;
    font-size: 14px;
    line-height: 200px;
    color: #ffffff;
  }
`;
