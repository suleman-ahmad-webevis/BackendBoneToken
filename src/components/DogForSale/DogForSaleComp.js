import React from "react";
import styled from "styled-components";
// import DogForSaleCard from "./DogForSaleCard/DogForSaleCard";

const DogForSaleComp = () => {
  return (
    <DogSaleComContainer>
      {/* <DogForSaleCard /> */}
      <h5>No dog for sale found.</h5>
    </DogSaleComContainer>
  );
};

export const DogSaleComContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  grid-gap: 40px 30px;

  h5 {
    font-size: 24px;
  }
`;

export default DogForSaleComp;
