import React, { useState } from "react";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";
import ArrowDown from "../../assets/images/ArrowDown.png";
import ArrowUp from "../../assets/images/ArrowUp.png";
import { options } from './BreedOptions'

const DropDownContainer = styled("div")`
  cursor: pointer;
`;

const DropDownHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(144, 202, 249, 0.5);
  border-radius: 8px;
  padding: 16px;
  color: #2196F3;
  font-size: 16px;
  font-weight: 700;
  width: 100%;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 97%;
`;

const DropDownList = styled("ul")`
  margin-top: 2px;
  background: #ffffff;
  color: rgba(144, 202, 249, 0.5);
  /* color: #2196F3; */
  height: 150px;
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
`;

const ArrowDownIcon = styled.div`
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  align-items: center;
`;

const ArrowUpIcon = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
`;

const BreedSelector = ({ smartBreed, setSmartBreed }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Affenpinscher");

  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setSmartBreed(value);
    setIsOpen(false);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
         {selectedOption}
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
