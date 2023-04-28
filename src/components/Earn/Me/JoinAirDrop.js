import React from "react";
import { PurchasesText } from "./Purchases";
import styled from "styled-components";

const JoinAirDrop = () => {
  return (
    <JADContainer>
      <JADTextWrapper>
        <PurchasesText Color="#0E626D" FontSize="24px" FontWeight="900">
          Join Airdrop
        </PurchasesText>
      </JADTextWrapper>
      <CWBtn>Connect Wallet 0 $DOG earned </CWBtn>
    </JADContainer>
  );
};

export default JoinAirDrop;

export const JADContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border: 2px solid #e6fafd;
  box-shadow: 0px 2px 4px #c4e9ee;
  border-radius: 8px;
  width: ${({ Width }) => Width ?? "60%"};
  padding: 30px 20px;
`;

export const JADTextWrapper = styled.div`
  width: 185px;
  height: 46px;
  text-align: center;
  padding: 5px 0px;
  border: 2px solid #d1f7ff;
  border-radius: 8px;
`;

export const CWBtn = styled.button`
  background: #58c069;
  border: 1px solid #22b539;
  border-radius: 8px;
  outline: none;
  color: #ffffff;
  padding: 10px 8px;
  font-weight: 900;
  font-size: 20px;
`;
