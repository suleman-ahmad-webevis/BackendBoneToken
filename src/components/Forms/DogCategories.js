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
  height: 50px;
  padding: 0 14px;
`;
export const ButtonToggle = styled(Button)`
  color: #b7b7b7;
  font-size: 14px;
  font-weight: 700;
  /* width: 100%; */
  ${({ active }) =>
    active &&
    `
    color:#79999D;
    background: #F2F4F4;;
    opacity: 1;
    border: 2px solid #79999D;
  `}
`;
export const ButtonGroup = styled.div``;
const types = [
  "Heavy coat",
  "Curly/Wavy/Fleece coat",
  "Long coat",
  "Wire coat",
  "Silk coat",
  "Smooth coat",
  "Short coat",
  "Combination coat",
  "Double coat",
  "Hairless coat",
];

function CategoryButton({ coatType, setFieldValue }) {
  const genderHandler = (type) => {
    setActive(type);
    setFieldValue("coatType", type);
  };
  const [active, setActive] = useState(coatType ?? "");
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

export default CategoryButton;
