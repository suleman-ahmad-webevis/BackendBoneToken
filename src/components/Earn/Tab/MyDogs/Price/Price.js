import React from "react";
import styled from "styled-components";
import { PeopleData, PriceData } from "./PriceData";
import { Img } from "../../../../../GlobalStyles";

const Price = () => {
  return (
    <>
      {PriceData.map((value, index) => (
        <PriceContainer key={index}>
          <PriceHeading Gap="2px">
            <h5 style={{ color: "#0E626D" }}>{value.heading} </h5>{" "}
            <h5 style={{ color: "#93D27C" }}> {value.headingPer}</h5>
          </PriceHeading>
          <PriceHeading>
            <h5>{value.title}</h5>
          </PriceHeading>
          <Earned>
            <h5>{value.earned}</h5>
          </Earned>
        </PriceContainer>
      ))}
      {PeopleData.map((value, index) => (
        <PriceContainer key={index}>
          <PriceHeading Gap="10px">
            <Img src={value.headingImg} /> <h5> {value.heading}</h5>
          </PriceHeading>
          <PriceHeading>
            <h5>{value.title}</h5>
          </PriceHeading>
          <Earned>
            <h5>{value.earned}</h5>
          </Earned>
        </PriceContainer>
      ))}
      <TotalDogData>
        <Heading>Total DogData</Heading>
        <PriceHeading>
          <h5>$DOG earned</h5>
        </PriceHeading>
        <Earned>
          <h5>121</h5>
        </Earned>
      </TotalDogData>
    </>
  );
};

export default Price;

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
  background: #fafff9;
  padding: 16px;
`;

export const PriceHeading = styled.div`
  display: flex;
  align-items: center;
  grid-gap: ${({ Gap }) => Gap ?? "0px"};
  h5 {
    font-weight: 900;
    font-size: 12px;
    line-height: 14px;
    color: #a1b8ba;
  }
`;

export const Earned = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 12px;
  h5 {
    font-weight: 900;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
`;

export const TotalDogData = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  background: #d7fbd0;
  border-radius: 10px;
`;

export const Heading = styled.h5`
  font-weight: 900;
  font-size: 18px;
  line-height: 19px;
  color: #0e626d;
  padding-bottom: 20px;
`;
