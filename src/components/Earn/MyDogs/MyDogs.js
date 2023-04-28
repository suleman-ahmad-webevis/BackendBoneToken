import React from "react";
import styled from "styled-components";
import MDSecRowCard from "./MDSecondRow/MDSecRowCard";
import { MDSecRowData, MDThirdRowData } from "./MDSecondRow/CardData";
import MdThirdRowCard from "./MdThirdRow/MdThirdRowCard";
import { CombinedText, PurchasesText } from "../Me/Purchases";

const MyDogs = () => {
  return (
    <MyDogsContainer>
      {/* 2nd Row */}
      <MDSecRowWrapper>
        {MDSecRowData.map((value) => (
          <MDSecRowCard value={value} key={value.titleOne} />
        ))}
      </MDSecRowWrapper>
      {/* 3rd Row */}
      <MDThirdRowWrapper>
        {MDThirdRowData.map((value) => (
          <MdThirdRowCard value={value} key={value.titleOne} />
        ))}
        <TotalDogData>
          <PurchasesText Color="#0E626D" FontSize="24px" FontWeight="900">
            TotalDogData
          </PurchasesText>
          <CombinedText>
            <PurchasesText Color="#79999D" FontSize="20px" FontWeight="900">
              $DOG earned
            </PurchasesText>
            <PurchasesText Color="#33A2B0" FontSize="35px" FontWeight="900">
              121
            </PurchasesText>
          </CombinedText>
        </TotalDogData>
      </MDThirdRowWrapper>
    </MyDogsContainer>
  );
};

export const MyDogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
`;

export const MDSecRowWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  width: 100%;
  grid-gap: 20px;
  padding-top: 50px;
`;

export const MDThirdRowWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  grid-gap: 20px;
  padding-top: 20px;
`;

export const TotalDogData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45%;
  background: #d8fdd1;
  border: 2px solid #c6eebe;
  box-shadow: 0px 2px 4px #c4e9ee;
  border-radius: 8px;
  padding: 10px 20px;
`;

export default MyDogs;
