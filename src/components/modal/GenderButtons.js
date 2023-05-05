import React, { useState } from "react";
import styled from "styled-components";
import { genderOptions } from "../Selectors/SSearchOptions";

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
  color: #2196F3;
  opacity: 0.5;
  font-weight: 700;
  font-size: 14px;
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

function GenderButton({ setGender }) {
  const genderHandler = (gender) => {
    setGender(gender);
    setActive(gender);
  };
  const [active, setActive] = useState(genderOptions[0]);
  return genderOptions.map((gender) => (
    <ButtonGroup key={gender}>
      <ButtonToggle
        active={active === gender}
        onClick={() => genderHandler(gender)}
      >
        {gender}
      </ButtonToggle>
    </ButtonGroup>
  ));
}

export default GenderButton;
