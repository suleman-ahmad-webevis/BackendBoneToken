import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  ProductPageContainer,
  ProductsListContainer,
} from "../../Pages/Product/Products";
import ProductCard from "../Cards/ProductsPageCard/ProductCard";
import { ProductsList } from "./ProductsComponent";
import Heading from "../Heading/Heading";
import ProductNavComp from "../../components/ProductsComponent/ProductNavComp";
import Tablet from "../../Pages/Product/Tablet/Tablet";
import useBreakpoint from "../../hooks/useBreakPoint";
// import useBreakpoint from "../../hooks/useBreakPoint";

const RecentlyViewedProducts = () => {
  const { recentlyViewedProducts } = useSelector(
    (state) => state.recentlyViewedPro
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isDesktop, isTablet, isSmallMobile, isMobile } = useBreakpoint();

  return (
    <>
      <ProductPageContainer>
        <ProductsListContainer>
          {isDesktop && (
            <>
              <ProductNavComp />
              <ProductsList id="ProductListContainer">
                {recentlyViewedProducts.length ? (
                  recentlyViewedProducts.map((product) => (
                    <ProductCard product={product} key={product._id} />
                  ))
                ) : (
                  <Heading level={10} Black>
                    No Products Found
                  </Heading>
                )}
              </ProductsList>
            </>
          )}
          {(isTablet || isMobile || isSmallMobile) && <Tablet />}
        </ProductsListContainer>
      </ProductPageContainer>
    </>
  );
};

export default RecentlyViewedProducts;
