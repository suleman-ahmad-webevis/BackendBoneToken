import React, { useState } from "react";
import styled from "styled-components";

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
  color: rgba(144, 202, 249, 0.5);
  font-size: 16px;
  font-weight: 700;
  ${({ active }) =>
    active &&
    `
    color:#2196F3;
    opacity: 1;
  `}
`;
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  width: 50%;
`;
const types = ["Male", "Female"];

function GenderButton({ setGender }) {
  const genderHandler = (type) => {
    setGender(type);
    setActive(type);
  };
  const [active, setActive] = useState(types[0]);
  return types.map((type) => (
    <ButtonGroup key={type.label}>
      <ButtonToggle
        key={type}
        active={active === type}
        onClick={() => genderHandler(type)}
      >
        {type}
      </ButtonToggle>
    </ButtonGroup>
  ));
}

export default GenderButton;
