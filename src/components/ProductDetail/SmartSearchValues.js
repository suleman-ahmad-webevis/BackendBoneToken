import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function SmartSearchValues() {
  const { smartSearch } = useSelector((state) => state.product);
  const smartSearchValues = smartSearch.filter(element => element.length > 0);

  return (
    <ButtonGroup>
      {smartSearchValues.map((selected) => (
        <ButtonToggle key={selected}> {selected} </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  grid-gap: 20px;
`;

export const ButtonToggle = styled.div`
  background: #2979ff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
  color: #fff;
  font-family: "DM Sans";
  font-style: normal;
  font-size: 21px;
  line-height: 27px;
  cursor: pointer;
  &:hover {
    background: #000000;
  }
`;

export default SmartSearchValues;
