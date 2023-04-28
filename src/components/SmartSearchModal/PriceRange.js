import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import styled from "styled-components";

const PriceRange = () => {
  // Our States
  const [value, setValue] = useState([2, 10]);
  // Changing State when price increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ProductPriceContainer>
      <PriceValues>
        <PriceValue>
          Min
          <Price>{value[0]}</Price>
        </PriceValue>
        -
        <PriceValue>
          Max
          <Price>{value[1]}</Price>
        </PriceValue>
      </PriceValues>
      <Slider value={value} onChange={rangeSelector} valueLabelDisplay="auto" />
    </ProductPriceContainer>
  );
};

const ProductPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #b7b7b7;
  .MuiSlider-rail {
    height: 3px;
    background: rgba(144, 202, 249, 0.5);
    border-radius: 5px;
  }
  .MuiSlider-root {
    color: #b7b7b7;
  }
`;

const PriceValues = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 25px;
`;

const PriceValue = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
`;
const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8px;
  width: 104px;
  height: 45px;
  background: #ffffff;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #b7b7b7;
`;
export default PriceRange;
