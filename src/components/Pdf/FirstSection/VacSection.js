import React from "react";
import styled from "styled-components";
import Vac from "../../../assets/images/Pdf/Vac.png";
import { Img } from "../../../GlobalStyles";

const VacSection = () => {
  return (
    <VSWrapper>
      <VSHead>
        <Img src={Vac} alt="vac" />
        <h5>Vaccinations</h5>
      </VSHead>
      <VacData>
        <VacItems>
          <h5>Rabies</h5>
          <VacInfo>
            <ul>
              <VacItem>
                <li>Date Vaccination Expiry: </li>
                <span>18/04/2021 </span>
              </VacItem>
              <VacItem>
                <li>Vacination Serial Number: </li> <span>253382162 </span>
              </VacItem>
            </ul>
          </VacInfo>
        </VacItems>
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
  padding-left: 80px;
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
    font-size: 15px;
    line-height: 95%;
    color: #b1933c;
  }
`;

export const VacData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 10px;
`;

export const VacItems = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
`;

export const VacInfo = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
`;

export const VacItem = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
`;
