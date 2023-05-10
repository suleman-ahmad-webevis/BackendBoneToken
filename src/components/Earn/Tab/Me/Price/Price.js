import React from "react";
import { PricesData, streetDogFeeding } from "./PricesData";
import styled from "styled-components";

const PricesSection = () => {
  return (
    <PricesContainer>
      <PriceContainer>
        <PriceHeading>Purschases</PriceHeading>
        <PricesWrapper>
          {PricesData.map((value, index) => (
            <PriceWrapper key={index}>
              <h5>{value.title}</h5>
              <PriceBox>
                <h5>{value.price}</h5>
              </PriceBox>
            </PriceWrapper>
          ))}
        </PricesWrapper>
      </PriceContainer>
      <PriceContainer>
        <PriceHeading>Shop Ratings</PriceHeading>
        <PricesWrapper>
          {PricesData.map((value, index) => (
            <PriceWrapper key={index}>
              <h5>{value.title}</h5>
              <PriceBox>
                <h5>{value.price}</h5>
              </PriceBox>
            </PriceWrapper>
          ))}
        </PricesWrapper>
      </PriceContainer>
      <PriceContainer>
        <PriceHeading>Street Dog Feeding</PriceHeading>
        <PricesWrapper>
          {streetDogFeeding.map((value, index) => (
            <PriceWrapper key={index} style={{ width: "48%" }}>
              <h5>{value.title}</h5>
              <PriceBox>
                <h5>{value.price}</h5>
              </PriceBox>
            </PriceWrapper>
          ))}
        </PricesWrapper>
      </PriceContainer>
    </PricesContainer>
  );
};

export default PricesSection;

export const PricesContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 12px;
  background-color: #fafff9;
  padding: 16px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;

export const PricesWrapper = styled.div`
  display: flex;
  grid-gap: 12px;
  width: 100%;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  width: 32%;
  h5 {
    color: #a1b8ba;
    font-weight: 900;
    font-size: 12px;
    line-height: 14px;
  }
`;

export const PriceHeading = styled.h5`
  font-weight: 900;
  font-size: 14px;
  line-height: 19px;
  color: #0e626d;
`;

export const PriceBox = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 10px 5px;
  h5 {
    font-weight: 900;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
`;
