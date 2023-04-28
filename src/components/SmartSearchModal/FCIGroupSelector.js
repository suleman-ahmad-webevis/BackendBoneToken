import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.div`
  cursor: pointer;
  background: #ffffff;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  padding: 0 16px;
`;
export const ButtonToggle = styled(Button)`
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  color: #b7b7b7;
  text-align: center;
  /* width: 100%; */
  ${({ active }) =>
    active &&
    `
  border-radius: 8px;
  background: #F2F4F4;
  color:#79999D;
  border: 2px solid #79999D;
  `}
`;
export const ButtonGroup = styled.div``;
const types = [
  "Group I",
  "Group II",
  "Group III",
  "Group IV",
  "Group V",
  "Group VI",
  "Group VII",
  "Group VIII",
  "Group IX",
  "Group X",
];

function FCIGroupSelector({ setFCIGroup }) {
  const genderHandler = (type) => {
    setActive(type);
    setFCIGroup(type);
  };
  const [active, setActive] = useState();
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

export default FCIGroupSelector;
