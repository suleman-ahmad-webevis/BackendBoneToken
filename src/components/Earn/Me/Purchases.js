import React from "react";
import styled from "styled-components";

const Purchases = () => {
  return (
    <PurchasesContainer Width="77%">
      <PurchasesText Color="#0E626D" FontSize="24px" FontWeight="900">
        Purchases
      </PurchasesText>
      <CombinedText Gap="22px">
        <PurchasesText Color="#79999D" FontSize="20px" FontWeight="900">
          Fiat
        </PurchasesText>
        <PurchasesText Color="#33A2B0" FontSize="35px" FontWeight="900">
          $0
        </PurchasesText>
      </CombinedText>
      <CombinedText Gap="22px">
        <PurchasesText Color="#79999D" FontSize="20px" FontWeight="900">
          Crypto
        </PurchasesText>
        <PurchasesText Color="#33A2B0" FontSize="35px" FontWeight="900">
          $0
        </PurchasesText>
      </CombinedText>
      <CombinedText Gap="22px">
        <PurchasesText Color="#79999D" FontSize="20px" FontWeight="900">
          $DOG earned
        </PurchasesText>
        <PurchasesText Color="#33A2B0" FontSize="35px" FontWeight="900">
          0
        </PurchasesText>
      </CombinedText>
    </PurchasesContainer>
  );
};

export const PurchasesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: 2px solid #e6fafd;
  box-shadow: 0px 2px 4px #c4e9ee;
  border-radius: 8px;
  width: ${({ Width }) => Width ?? "0%"};
  padding: 30px 20px;
`;

export const CombinedText = styled.div`
  display: flex;
  align-items: center;
  grid-gap: ${({ Gap }) => Gap ?? "22px"};
`;

export const PurchasesText = styled.h5`
  color: ${({ Color }) => Color ?? "#fff"};
  font-size: ${({ FontSize }) => FontSize ?? "0px"};
  font-weight: ${({ FontWeight }) => FontWeight ?? "0"};
`;
export default Purchases;
