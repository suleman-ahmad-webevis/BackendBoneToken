import React, { useState } from "react";
import styled from "styled-components";
import { options } from "./ColorOptions";

const DropDownContainer = styled("div")`
  cursor: pointer;
  background: #ffffff;
  border: 1px solid rgba(144, 202, 249, 0.5);
  border-radius: 8px;
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const DropDownHeader = styled("div")`
  display: flex;
  align-items: center;
  grid-gap: 5px;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 47%;
`;

const DropDownList = styled("ul")`
  background: #ffffff;
  margin-top: 40px;
  height: 200px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 1px;
  }
  ::-webkit-scrollbar-track {
    background: white;
  }
  ::-webkit-scrollbar-thumb {
    background: white;
  }
`;

const ListItem = styled("li")`
  border: 1px solid rgba(144, 202, 249, 0.5);
  border-radius: 8px 8px 0px 0px;
  list-style: none;
  padding: 12px 18px;
  display: flex;
  align-items: center;
  grid-gap: 10px;
`;
const ColorBox = styled.div`
  width: 40px;
  height: 30px;
  border-radius: 8px;
`;

const ColorSelector = ({ color, setColor, coatColor, setCoatColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    //ToPassWhenTagProduct
    setCoatColor(value.colorName);
    setColor(value.selectedColor);
    setIsOpen(false);
  };

  return (
    <DropDownContainer onClick={toggling}>
      <DropDownHeader style={{ color: color }}>
        <ColorBox style={{ background: color }} />
        {coatColor}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem
                onClick={onOptionClicked(option)}
                key={option.colorName}
              >
                <ColorBox style={{ background: option.selectedColor }} />
                {option.colorName}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default ColorSelector;
