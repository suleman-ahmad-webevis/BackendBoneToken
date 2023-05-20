import React from "react";
import SubCategoryListComponent from "../../components/ProductsComponent/SubCategoryComponent";
import ProductNavComp from "../../components/ProductsComponent/ProductNavComp";
import useBreakpoint from "../../hooks/useBreakPoint";
import ProductsFilterBar from "./Tablet/ProductsFilterBar";
import { PTabContainer } from "./Tablet/Tablet.style";

const SubCategory = () => {
  const { isDesktop, isTablet, isSmallMobile, isMobile } = useBreakpoint();
  return (
    <>
      {isDesktop && (
        <>
          <ProductNavComp /> <SubCategoryListComponent />
        </>
      )}
      {(isTablet || isMobile || isSmallMobile) && (
        <PTabContainer>
          <ProductsFilterBar />
          <SubCategoryListComponent />
        </PTabContainer>
      )}
    </>
  );
};


export default SubCategory;
