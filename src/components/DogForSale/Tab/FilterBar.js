import React, { useState } from "react";
import styled from "styled-components";
import { dogSaleNavData } from "./DSFTabData";
import { Img } from "../../../GlobalStyles";

const FilterBar = () => {
  const [menu, showMenu] = useState(false);
  return (
    <>
      {menu && (
        <Overlay menu={menu} onClick={() => showMenu(false)}>
          {" "}
        </Overlay>
      )}

      <DSTab>
        {!menu && <h5 onClick={() => showMenu(true)}>Filter</h5>}
        {menu && (
          <Menu>
            <ul>
              {dogSaleNavData.map(({ title, icon }, index) => (
                <MenuItem key={index}>
                  <li>{title}</li>
                  <Img src={icon} />
                </MenuItem>
              ))}
            </ul>
          </Menu>
        )}
      </DSTab>
    </>
  );
};

export default FilterBar;

export const Overlay = styled.div`
  position: fixed;
  top: 270px;
  right: 0;
  left: 0;
  bottom: 0;
  height: 300px;
`;

export const DSTab = styled.div`
  position: relative;
  h5 {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.24px;
    color: rgba(27, 21, 61, 0.55);
    width: 30px;
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #f5fcff;
  border-radius: 12px;
  padding: 10px 80px 10px 10px;
  ul {
    list-style: none;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 7px;
  li {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.24px;
    color: rgba(27, 21, 61, 0.55);
    padding: 5px 0px;
  }
`;
