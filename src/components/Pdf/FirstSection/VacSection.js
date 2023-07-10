import React from "react";
import styled from "styled-components";
import Vac from "../../../assets/images/Pdf/Vac.png";
import { Img } from "../../../GlobalStyles";

const VacSection = ({ veterinary }) => {
  return (
    <VSWrapper>
      <VSHead>
        <Img src={Vac} alt="vac" />
        <h5>Vaccinations</h5>
      </VSHead>
      <VacData>
        {veterinary?.vaccines?.length
          ? veterinary?.vaccines.map((val, idx) => (
              <VacItems key={idx}>
                <h5>{val?.vacType}</h5>
                <VacInfo>
                  <ul>
                    <VacItem>
                      <li>Date Vaccination Expiry: </li>
                      <span>
                        {" "}
                        {new Date(val?.vacExpiryDate)
                          .toLocaleString()
                          .substring(0, 9)}{" "}
                      </span>
                    </VacItem>
                    <VacItem>
                      <li>Vacination Serial Number: </li>{" "}
                      <span>{val?.vacSerialNo} </span>
                    </VacItem>
                  </ul>
                </VacInfo>
              </VacItems>
            ))
          : null}
      </VacData>
    </VSWrapper>
  );
};

export default VacSection;

export const VSWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
`;

export const VSHead = styled.div`
  display: flex;
  grid-gap: 10px;
  align-items: center;
  width: 30%;
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

export const VacData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 10px;
  padding-left: 80px;
  font-size: 20px;
`;

export const VacItems = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
`;

export const VacInfo = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 15px;
  padding-left: 15px;
`;

export const VacItem = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
`;
