import React, { useState } from "react";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";
import GrayArrowDown from "../../assets/images/GrayArrowDown.png";
import GrayArrowUp from "../../assets/images/GrayArrowUp.png";
import { options } from "./BreedOptions";

const DropDownContainer = styled("div")`
  cursor: pointer;
`;

const DropDownHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  padding: 16px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #b7b7b7;
  width: 100%;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  background: #ffffff;
  color: #b7b7b7;
  height: 177px;
  overflow-y: scroll;
  margin-top: -5px;
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
  padding: 12px 18px;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 0px;
  font-weight: 700;
  font-size: 14px;
`;

const ArrowDownIcon = styled.div`
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  align-items: center;
`;

const ArrowUpIcon = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
`;

const BreedSelector = ({ breed, setFieldValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    breed ? breed : "Breed *"
  );

  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setFieldValue("breed", value);
    setIsOpen(false);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {selectedOption}
        <ArrowDownIcon isOpen={isOpen}>
          <Img src={GrayArrowDown} alt="ArrowDown" />
        </ArrowDownIcon>
        <ArrowUpIcon isOpen={isOpen}>
          <Img src={GrayArrowUp} alt="ArrowUp" />
        </ArrowUpIcon>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option, ind) => (
              <ListItem onClick={onOptionClicked(option)} key={ind}>
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
