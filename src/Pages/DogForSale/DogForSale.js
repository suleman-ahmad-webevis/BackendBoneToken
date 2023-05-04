import React, { useEffect } from "react";
import styled from "styled-components";
import DogForSaleComp from "../../components/DogForSale/DogForSaleComp";
import DogForSaleNav from "../../components/DogForSale/DogForSaleNav";
import useBreakpoint from "../../hooks/useBreakPoint";
import TabDFSComp from "../../components/DogForSale/Tab/TabDFSComp";

const DogForSale = () => {
  const { isDesktop, isTablet, isSmallMobile, isMobile } = useBreakpoint();

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <DogForSaleContainer>
      <DogForSaleWrapper>
        {isDesktop ? (
          <DogForSaleNav />
        ) : (
          (isTablet || isSmallMobile || isMobile) && <TabDFSComp />
        )}
        <DogForSaleComp />
      </DogForSaleWrapper>
    </DogForSaleContainer>
  );
};

export default DogForSale;

export const DogForSaleContainer = styled.div`
  display: flex;
  padding: 0px 20px;

  /* grid-gap: 65px; */
`;

export const DogForSaleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-gap: 40px;
  margin-top: 18px;
  padding: 20px;
`;
