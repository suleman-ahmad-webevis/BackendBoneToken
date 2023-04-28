import React, { useState } from "react";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";
import ArrowDown from "../../assets/images/ArrowDown.png";
import ArrowUp from "../../assets/images/ArrowUp.png";
import Heading from "../Heading/Heading";

const DropDownContainer = styled("div")`
  cursor: pointer;
`;

const DropDownHeader = styled("div")`
  font-weight: 900;
  font-size: 14px;
  color: rgba(144, 202, 249, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(144, 202, 249, 0.5);
  border-radius: 8px;
  padding: 16px;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  position: absolute;
  background: #ffffff;
  left: 15px;
  right: 15px;
  margin-top: 4px;
  color: rgba(144, 202, 249, 0.5);
  height: 135px;
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
  font-size: 14px;
  font-weight: 700;
  border: 1px solid rgba(144, 202, 249, 0.5);
  border-radius: 8px 8px 0px 0px;
  list-style: none;
  padding: 12px 18px;
`;

const ArrowDownIcon = styled.div`
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  align-items: center;
`;

const ArrowUpIcon = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
`;

const BreedSelector = ({ options, setOptions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setOptions(value);
    setIsOpen(false);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        <Heading level={4} style={{ color: '#2196F3' }}>{selectedOption}</Heading>
        <ArrowDownIcon isOpen={isOpen}>
          <Img src={ArrowDown} alt="ArrowDown" />
        </ArrowDownIcon>
        <ArrowUpIcon isOpen={isOpen}>
          <Img src={ArrowUp} alt="ArrowUp" />
        </ArrowUpIcon>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={option}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default BreedSelector;
