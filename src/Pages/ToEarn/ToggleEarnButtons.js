import React, { useState } from "react";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";
import EarnBoneTwo from "../../assets/images/ToEarn/New/EarnBoneTwo.png";

export const ButtonToggle = styled.div`
background: rgba(33, 150, 243, 0.77);
padding: 10px 15px;
  ${({ active }) =>
    active &&
    `
    background: #FFFFFF;
    border: 1px solid #90CAF9;
    border-radius: 10px;

    font-family: 'Inter-Regular';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 29px;
    color: #2196F3;

  `}
`;
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
  width: 140px;
`;
export const EarnButtons = [<div style={{display: "flex", alignItems: "center", gridGap: "10px"}} >EARN <Img src={EarnBoneTwo} alt="Earn" /></div>, "AIRDROP"];
function ToggleEarnButtons() {
  const [active, setActive] = useState(EarnButtons[0]);
  return EarnButtons.map((type) => (
    <ButtonGroup key={type}>
      <ButtonToggle active={active === type} onClick={() => setActive(type)}>
        {type}
      </ButtonToggle>
    </ButtonGroup>
  ));
}

export default ToggleEarnButtons;                
