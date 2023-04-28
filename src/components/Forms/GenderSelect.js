import React, { useState } from "react";
import styled from "styled-components";

const types = ["Male", "Female"];

function GenderButton({ gender, setFieldValue }) {
  const genderHandler = (type) => {
    setActive(type);
    setFieldValue("gender", type);
  };
  const [active, setActive] = useState(gender ?? "");
  return types.map((type) => (
    <ButtonGroup key={type.label}>
      <ButtonToggle
        key={type}
        active={active === type}
        value={gender}
        onClick={() => genderHandler(type)}
      >
        {type}
      </ButtonToggle>
    </ButtonGroup>
  ));
}

const Button = styled.div`
  cursor: pointer;
  background: #ffffff;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const ButtonToggle = styled(Button)`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
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
  display: flex;
  align-items: center;
  grid-gap: 10px;
  width: 30%;
`;

export default GenderButton;
