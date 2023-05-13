import React, { useState } from "react";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";
import DatePickerField from "../DatePicker/DatePicker";
import eye from "../../assets/images/eye.png";

const MemberCard = () => {
  const [showCVV, setShowCVV] = useState(false);

  return (
    <MemberCardContainer>
      <MemberCards>
        <CardOne>
          <CardLabel>CARD NUMBER</CardLabel>
          <CardInput type="text" />
          <CardLabel Align>EXPIRY DATE</CardLabel>
          <CombinedCardField>
            <DatePickerField />
            <DatePickerField />
          </CombinedCardField>
          <CardLabel>NAME</CardLabel>
          <CardInput type="text" Padding />
        </CardOne>
        <CardTwo>
          <CombinedCardField>
            <CardLabel>CVV</CardLabel>
            <DateField>
              <input type={showCVV ? "text" : "password"} />
              <Img src={eye} alt="eye" onClick={() => setShowCVV(!showCVV)} />
            </DateField>
          </CombinedCardField>
        </CardTwo>
      </MemberCards>
      <PayButton>PAY</PayButton>
    </MemberCardContainer>
  );
};

export const MemberCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 110px;
`;

export const MemberCards = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  position: relative;
`;

export const CardOne = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  grid-gap: 10px;
  width: 90%;
  z-index: 1;
`;

export const CardTwo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background: #ffffff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 20px;
  position: absolute;
  top: 60px;
  right: 0;
  left: 50px;
  bottom: -90px;
`;

export const PayButton = styled.div`
  background: #53b72f;
  border-radius: 8px;
  width: 223px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.035em;
  color: #ffffff;
`;

export const CardLabel = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.035em;
  color: #656b86;
  align-self: ${({ Align }) => (Align ? "flex-end" : "")};
`;

export const CardInput = styled.input`
  background: #e8e8e8;
  box-shadow: 0px 4px 4px rgba(125, 125, 125, 0.25);
  border-radius: 8px;
  border: none;
  outline: none;
  padding: ${({ Padding }) => (Padding ? "12px" : "16px")};
`;

export const CombinedCardField = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  align-self: flex-end;
`;

export const DateField = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
  background: #e8e8e8;
  box-shadow: 0px 4px 4px rgba(125, 125, 125, 0.25);
  border-radius: 8px;
  padding: 14px;

  input {
    width: 70px;
    border: none;
    outline: none;
    background: none;
  }
`;
export default MemberCard;
