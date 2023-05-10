import React from "react";
import styled from "styled-components";

const JoinAD = () => {
  return (
    <ADContainer>
      <Text Color="#0E626D" FontSize="14px" FontWeight="900">
        Join Airdrop
      </Text>
      <Text Color="#A1B8BA" FontSize="12px" FontWeight="900">
        $DOG earned
      </Text>
      <EarnedPoints>
        <h5>0</h5>
      </EarnedPoints>
      <CWBtn>
        <h5>Connect Wallet</h5>
      </CWBtn>
    </ADContainer>
  );
};

export default JoinAD;

export const ADContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

export const ADSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

export const Text = styled.div`
  font-weight: ${({ FontWeight }) => FontWeight};
  font-size: ${({ FontSize }) => FontSize};
  line-height: 19px;
  color: ${({ Color }) => Color};
`;

export const EarnedPoints = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  width: 100%;
  h5 {
    padding: 10px;
    font-weight: 900;
    font-size: 16px;
    line-height: 19px;
    color: #000;
  }
`;

export const CWBtn = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 100%;
  background: #95cc82;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 10px 20px;
  h5 {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }
`;
