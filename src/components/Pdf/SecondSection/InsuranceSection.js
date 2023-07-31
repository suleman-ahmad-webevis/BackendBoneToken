import React from "react";
import Insurance from "../../../assets/images/Pdf/Insurance.png";
import styled from "styled-components";
import { Img } from "../../../GlobalStyles";

const InsuranceSection = ({ insurance }) => {
  return (
    <ISWrapper>
      <ISHead>
        <Img src={Insurance} alt="Insurance" />
        <h5>Insurance Certificate</h5>
      </ISHead>
      <ISDataWrapper>
        <ISData>
          <ISItem> Contact Name</ISItem>
          <ISItem Colored>
            {insurance?.contactName ? insurance?.contactName : "-"}
          </ISItem>
        </ISData>
        <ISData>
          <ISItem>Certificate Number</ISItem>
          <ISItem Colored>
            {insurance?.certificateNo ? insurance?.certificateNo : "-"}{" "}
          </ISItem>
        </ISData>
        <ISData>
          <ISItem> Insurance Company Contact</ISItem>
          <ISItem Colored>
            {insurance?.phoneOne ? insurance?.phoneOne : "-"}
          </ISItem>
        </ISData>
        <ISData>
          <ISItem> Emergency Contact</ISItem>
          <ISItem Colored>
            {" "}
            {insurance?.phoneTwo ? insurance?.phoneTwo : "-"}
          </ISItem>
        </ISData>
        <ISData>
          <ISItem> Start Date</ISItem>
          <ISItem Colored>
            {" "}
            {insurance?.startDate ? insurance?.startDate : "-"}{" "}
          </ISItem>
        </ISData>
        <ISData>
          <ISItem> Expiry Date</ISItem>
          <ISItem Colored>
            {insurance?.endDate ? insurance?.endDate : "-"}{" "}
          </ISItem>
        </ISData>
      </ISDataWrapper>
    </ISWrapper>
  );
};

export default InsuranceSection;

export const ISWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
`;

export const ISHead = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  grid-gap: 20px;
  img {
    border-radius: 20px;
    width: 15%;
  }
  h5 {
    font-weight: 900;
    font-size: 25px;

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
  align-items: flex-start;
`;

export const ISItem = styled.div`
  color: ${({ Colored }) => (Colored ? "#455B96" : "#000")};
  width: 50%;
`;

export const ISDataWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
  padding-left: 80px;
  font-size: 20px;
`;
