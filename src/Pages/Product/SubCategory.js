import React, { useEffect } from "react";
import SubCategoryListComponent from "../../components/ProductsComponent/SubCategoryComponent";
import ProductNavComp from "../../components/ProductsComponent/ProductNavComp";
import useBreakpoint from "../../hooks/useBreakPoint";
import ProductsFilterBar from "./Tablet/ProductsFilterBar";
import { PTabContainer } from "./Tablet/Tablet.style";

const SubCategory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { isDesktop, isTablet, isSmallMobile, isMobile } = useBreakpoint();
  return (
    <>
      {/* <ProductPageContainer>
       <ProductsListContainer> */}
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
      {/* </ProductsListContainer>
     </ProductPageContainer> */}
    </>
  );
};

// export const ProductPageContainer = styled.div`
//   display: flex;
//   padding: 20px 0;
//   grid-gap: 5px;
//   position: relative;
//   @media screen and (max-width: 900px) {
//     margin-top: 80px;
//   }
//   @media screen and (max-width: 760px) {
//     margin-top: 60px;
//   }
// `;

// export const ProductsListContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   grid-gap: 5px;
// `;

export default SubCategory;
