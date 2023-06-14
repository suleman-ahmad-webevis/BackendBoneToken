import React from "react";
import Insurance from "../../../assets/images/Pdf/Insurance.png";
import styled from "styled-components";
import { Img } from "../../../GlobalStyles";

const InsuranceSection = () => {
  return (
    <ISWrapper>
      <ISHead>
        <Img src={Insurance} alt="Insurance" />
        <h5>Insurance Certificate</h5>
      </ISHead>
      <ISDataWrapper>
        <ISData>
          <ISItem> Contact Name</ISItem>
          <ISItem>2y8463467267</ISItem>
        </ISData>
        <ISData>
          <ISItem>Certificate Number</ISItem>
          <ISItem>2y8463467267 </ISItem>
        </ISData>
        <ISData>
          <ISItem> Insurance Company Contact</ISItem>
          <ISItem>+46000000000</ISItem>
        </ISData>
        <ISData>
          <ISItem> Emergency Contact</ISItem>
          <ISItem> +46 000000000</ISItem>
        </ISData>
        <ISData>
          <ISItem> Start Date</ISItem>
          <ISItem> DD/MM/YY </ISItem>
        </ISData>
        <ISData>
          <ISItem> Expiry Date</ISItem>
          <ISItem> DD/MM/YY </ISItem>
        </ISData>
      </ISDataWrapper>
    </ISWrapper>
  );
};

export default InsuranceSection;

export const ISWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
`;

export const ISHead = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  grid-gap: 20px;
  img {
    border-radius: 20px;
  }
  h5 {
    font-weight: 900;
    font-size: 15px;
    line-height: 95%;
    color: #b1933c;
  }
`;

export const IBasicInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
`;

export const ISData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

export const ISItem = styled.div``;

export const ISDataWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
  padding-left: 80px;
`;
