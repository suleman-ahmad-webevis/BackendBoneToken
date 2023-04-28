import React, { useState } from "react";
import styled from "styled-components";
import { ageOptions } from "../Selectors/SSearchOptions";

const Button = styled.button`
  cursor: pointer;
  background: #ffffff;
  border: 1px solid rgba(144, 202, 249, 0.5);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const ButtonToggle = styled(Button)`
  font-size: ${({ Font }) => Font ? '14px' : ""};
  font-weight: ${({ Weight }) => Weight ? '700' : ""};
  color: #2196F3;
  opacity: 0.5;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
  width: 50%;
`;

function DogAgeButton({ setDogAge }) {
  const genderHandler = (type) => {
    setDogAge(type);
    setActive(type);
  };
  const [active, setActive] = useState(ageOptions[0]);
  return ageOptions.map((age) => (
    <ButtonGroup key={age}>
      <ButtonToggle Font Weight active={active === age} onClick={() => genderHandler(age)}>
        {age}
      </ButtonToggle>
    </ButtonGroup>
  ));
}

export default DogAgeButton;
