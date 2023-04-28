import React from "react";
import styled from "styled-components";
import DogForSaleCard from "./DogForSaleCard/DogForSaleCard";

const DogForSaleComp = () => {
  return (
    <DogSaleComContainer>
      <DogForSaleCard />
      <DogForSaleCard />
      <DogForSaleCard />
      <DogForSaleCard />
      <DogForSaleCard />
    </DogSaleComContainer>
  );
};

export const DogSaleComContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  grid-gap: 40px 30px;
`;

export default DogForSaleComp;
