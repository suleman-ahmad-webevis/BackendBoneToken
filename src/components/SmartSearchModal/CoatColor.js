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
  width: ${(props) => (props.width ? props.width : "white")};
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
  {
    color: "Black",
    width: "75px",
  },
  {
    color: "Black brindle",
    width: "133px",
  },
  {
    color: "Black daple",
    width: "120px",
  },
  {
    color: "Black and tan",
    width: "156px",
  },
  {
    color: "Black and silver",
    width: "177px",
  },
  {
    color: "Black sable",
    width: "112px",
  },
  {
    color: "White",
    width: "74px",
  },
  {
    color: "Yellow",
    width: "78px",
  },
  {
    color: "Red",
    width: "59px",
  },
  {
    color: "Cream",
    width: "102px",
  },
  {
    color: "Mahogany",
    width: "135px",
  },
  {
    color: "Fawn",
    width: "91px",
  },
  {
    color: "Fawn black mask",
    width: "150px",
  },
  {
    color: "Aguty",
    width: "75px",
  },
  {
    color: "Chocolate",
    width: "103px",
  },
  {
    color: "Grey",
    width: "65px",
  },
  {
    color: "Blue",
    width: "63px",
  },
  {
    color: "Silver",
    width: "71px",
  },
];

function CoatColor({ setCoatColor }) {
  const genderHandler = (type) => {
    setActive(type);
    setCoatColor(type);
  };
  const [active, setActive] = useState();
  return types.map((type) => (
    <ButtonGroup key={type.label}>
      <ButtonToggle
        width={type.width}
        key={type}
        active={active === type}
        onClick={() => genderHandler(type)}
      >
        {type.color}
      </ButtonToggle>
    </ButtonGroup>
  ));
}

export default CoatColor;
