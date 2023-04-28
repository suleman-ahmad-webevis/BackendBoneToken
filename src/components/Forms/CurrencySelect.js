import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.div`
  cursor: pointer;
  background: #ffffff;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonToggle = styled(Button)`
  color: #b7b7b7;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
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
const types = ["EUR", "USD", "GBP"];

function Currencies({ currency, setFieldValue }) {
  const currencyHandler = (type) => {
    setActive(type);
    setFieldValue("currency", type);
  };
  const [active, setActive] = useState(currency ?? "");
  return types.map((type) => (
    <ButtonGroup key={type.label}>
      <ButtonToggle
        key={type}
        active={active === type}
        value={currency}
        onClick={() => currencyHandler(type)}
      >
        {type}
      </ButtonToggle>
    </ButtonGroup>
  ));
}

export default Currencies;
