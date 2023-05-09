import React from "react";
import { CombinedText, PurchasesText } from "../../Me/Purchases";
import styled from "styled-components";

const MDSecRowCard = ({ value }) => {
  return (
    <MDCardWrapper>
      <CombinedText Gap="10px">
        <PurchasesText
          Color="#0E626D"
          FontSize="24px"
          SmallLaptopFS="20px"
          FontWeight="900"
        >
          {value.titleOne}
        </PurchasesText>
        <PurchasesText
          Color="#1D8B6A"
          FontSize="35px"
          SmallLaptopFS="24px"
          FontWeight="900"
        >
          {value.valueOne}
        </PurchasesText>
      </CombinedText>
      <CombinedText Gap="5px">
        <PurchasesText
          Color="#79999D"
          FontSize="20px"
          SmallLaptopFS="18px"
          FontWeight="900"
        >
          {value.titleTwo}
        </PurchasesText>
        <PurchasesText
          Color="#33A2B0"
          FontSize="35px"
          SmallLaptopFS="20px"
          FontWeight="900"
        >
          {value.valueTwo}
        </PurchasesText>
      </CombinedText>
    </MDCardWrapper>
  );
};

export const MDCardWrapper = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  width: 48%;
  background: #ffffff;
  border: 2px solid #e6fafd;
  box-shadow: 0px 2px 4px #c4e9ee;
  border-radius: 8px;
`;
export default MDSecRowCard;
