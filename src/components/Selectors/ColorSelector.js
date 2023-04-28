import React, { useState } from "react";
import styled from "styled-components";
import { colorOptions } from "./SSearchOptions";

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
  width: 48%;
`;

const DropDownList = styled("ul")`
  background: #ffffff;
  margin-top: 45px;
  height: 170px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(144, 202, 249, 0.5);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(144, 202, 249, 1);
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

const ColorSelector = ({ color, setColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Black");
  const [colorBox, setColorBox] = useState('Black')

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value.colorName);
    setColor(value.colorName);
    setColorBox(value.selectedColor)
    setIsOpen(false);
  };

  return (
    <DropDownContainer onClick={toggling}>
      <DropDownHeader style={{ color: color, fontSize: "14px", fontWeight: "700", lineHeight: '17px' }}>
        <ColorBox style={{ background: colorBox }} />
        {selectedOption}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {colorOptions.map((option) => (
              <ListItem
                onClick={onOptionClicked(option)}
                key={option.colorName}
                style={{ fontSize: "14px", fontWeight: "700" }}
              >
                <ColorBox style={{ background: option.selectedColor }} />
                {option.colorName}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )
      }
    </DropDownContainer >
  );
};

export default ColorSelector;
