import React, { useState } from "react";
import styled from "styled-components";
import { ageOptions } from "../Selectors/SSearchOptions";

const Button = styled.button`
  cursor: pointer;
  background: #fff;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  padding: 13px 0;
  display: flex;
  justify-content: center;
  width: 65px;
`;
export const ButtonToggle = styled(Button)`
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  color: #b7b7b7;
  
  ${({ active }) =>
    active &&
    `
  border-radius: 8px;
  background: #F2F4F4;
  color:#79999D;
  border: 2px solid #79999D;
  `}
`;
export const ButtonGroup = styled.div`
  width: 100%;
`;

function DogAgeButton({ setDogAge }) {
  const genderHandler = (type) => {
    setDogAge(type);
    setActive(type);
  };
  const [active, setActive] = useState();
  return ageOptions.map((age) => (
    <ButtonGroup key={age}>
      <ButtonToggle
        Font
        Weight
        active={active === age}
        onClick={() => genderHandler(age)}
      >
        {age}
      </ButtonToggle>
    </ButtonGroup>
  ));
}

export default DogAgeButton;
