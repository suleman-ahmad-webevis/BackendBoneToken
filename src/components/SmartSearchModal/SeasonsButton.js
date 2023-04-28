import React, { useState } from "react";
import styled from "styled-components";
import { seasonOptions } from "../Selectors/SSearchOptions";

const Button = styled.button`
  background: none;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
`;
export const ButtonToggle = styled(Button)`
  fill: none;
  fill-opacity: 0.5;
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
  justify-content: space-between;
  width: 100%;
`;

function SeasonsButton({ setSeason }) {
  const seasonHandler = (season) => {
    setSeason(season.label);
    setActive(season);
  };

  const [active, setActive] = useState(seasonOptions[0]);
  return seasonOptions.map((season) => (
    <ButtonGroup key={season.label}>
      <ButtonToggle
        active={active === season}
        onClick={() => seasonHandler(season)}
      >
        {season.image}
      </ButtonToggle>
    </ButtonGroup>
  ));
}

export default SeasonsButton;
