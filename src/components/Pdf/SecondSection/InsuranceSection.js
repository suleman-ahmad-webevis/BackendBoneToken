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
      {insurance?.insurances?.length ?
        insurance?.insurances?.map((val, idx) => (
          <ISDataWrapper key={idx}>
            <ISData>
              <ISItem> Contact Name</ISItem>
              <ISItem Colored>
                {val?.contactName ? val?.contactName : "-"}
              </ISItem>
            </ISData>
            <ISData>
              <ISItem>Certificate Number</ISItem>
              <ISItem Colored>
                {val?.certificateNo ? val?.certificateNo : "-"}{" "}
              </ISItem>
            </ISData>
            <ISData>
              <ISItem> Insurance Company Contact</ISItem>
              <ISItem Colored>{val?.phoneOne ? val?.phoneOne : "-"}</ISItem>
            </ISData>
            <ISData>
              <ISItem> Emergency Contact</ISItem>
              <ISItem Colored> {val?.phoneTwo ? val?.phoneTwo : "-"}</ISItem>
            </ISData>
            <ISData>
              <ISItem> Start Date</ISItem>
              <ISItem Colored> {val?.startDate ? val?.startDate : "-"} </ISItem>
            </ISData>
            <ISData>
              <ISItem> Expiry Date</ISItem>
              <ISItem Colored>{val?.endDate ? val?.endDate : "-"} </ISItem>
            </ISData>
          </ISDataWrapper>
        )) : null}
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
    font-size: 18px;
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
  width: 50%;
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
