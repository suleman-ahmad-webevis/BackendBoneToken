import React from "react";
import styled from "styled-components";
// import Puppy from "../../assets/images/Forms/Puppy.png";
import { NavLink } from "react-router-dom";
import { linkData } from "./LinkData";

function Sidebar({
  showSidebar,
  width,
  position,
  top,
  left,
  respTop,
  respLeft,
}) {
  return (
    <ButtonGroup
      showSidebar={showSidebar}
      left={left}
      top={top}
      position={position}
      respTop={respTop}
      respLeft={respLeft}
    >
      {linkData.map((type) => (
        <ButtonToggle
          to={type.path}
          key={type.path}
          width={width}
          onClick={() => showSidebar(false)}
        >
          <Img src={type.image} alt="image" />
          <Text>{type.text}</Text>
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}

const Button = styled(NavLink)`
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dfdfdf;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  gap: 8px;
  height: 64px;
  width: ${({ width }) => (width ? width : "0px")};
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #9fb4ff;
  text-decoration: none;

  &.active {
    color: #ffffff;
    background: #79999d;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border: 1px solid #79999d;
    border-radius: 8px;
  }
`;
export const ButtonToggle = styled(Button)`
  &:hover {
    border: 1px solid #79999d;
    p {
      display: block;
    }
    img {
      display: none;
    }
  }
`;
export const Text = styled.p`
  color: #79999d;
  display: none;
`;
export const ButtonGroup = styled.div`
  display: ${({ showSidebar }) => (showSidebar ? "flex" : "none")};
  flex-direction: column;
  grid-gap: 10px;
  position: ${({ position }) => (position ? position : "relative")};
  top: ${({ top }) => (top ? top : "0px")};
  left: ${({ left }) => (left ? left : "0px")};
  height: max-content;
  z-index: 800;
  /* width="250px" */
  /* respTop="92px"
          respLeft="0px" */
  @media screen and (max-width: 1530px) {
    top: ${({ respTop }) => respTop};
    left: ${({ respLeft }) => respLeft};
  }
`;
export const Img = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export default Sidebar;
