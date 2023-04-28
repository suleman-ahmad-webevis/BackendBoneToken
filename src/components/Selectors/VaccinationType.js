import React, { useState } from "react";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";
import ArrowDown from '../../assets/images/ArrowDown.png'
import ArrowUp from '../../assets/images/ArrowUp.png'

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
color: #797979;
`;

const DropDownListContainer = styled("div")`
`;

const DropDownList = styled("ul")`
  margin-top: 10px;
  color: rgba(144, 202, 249, 0.5);
`;

const ListItem = styled("li")`
border: 1px solid rgba(144, 202, 249, 0.5);
border-radius: 8px 8px 0px 0px;
list-style: none;
padding: 12px 18px;
`;

const ArrowDownIcon = styled.div`
display: ${({ isOpen }) => (isOpen ? 'none' : 'flex')};
align-items: center;
`;

const ArrowUpIcon = styled.div`
display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
align-items: center;
`;

const options = ["Rabies", "Second", "Third"];

const VaccinationType = ({ setFieldValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Rabies"); 

  const toggling = () => setIsOpen(!isOpen);
  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setFieldValue("vaccinationTypes", value);
    setIsOpen(false);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {selectedOption || "Rabies"}
        <ArrowDownIcon isOpen={isOpen}><Img src={ArrowDown} alt='ArrowDown' /></ArrowDownIcon>
        <ArrowUpIcon isOpen={isOpen}><Img src={ArrowUp} alt='ArrowUp' /></ArrowUpIcon>
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map(option => (
              <ListItem onClick={onOptionClicked(option)} key={option}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}


export default VaccinationType