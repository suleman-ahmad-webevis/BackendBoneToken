import React, { useState } from "react";
import styled from "styled-components";
import Heading from "../Heading/Heading";
import { genderOptions } from "../Selectors/SSearchOptions";

const Button = styled.button`
  cursor: pointer;
  background: #ffffff;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
`;
export const ButtonToggle = styled(Button)`
  color: #b7b7b7;
  font-weight: 700;
  font-size: 14px;
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
  grid-gap: 5px;
  width: 50%;
`;

function GenderButton({ setGender }) {
  const genderHandler = (gender) => {
    setGender(gender);
    setActive(gender);
  };
  const [active, setActive] = useState();
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
