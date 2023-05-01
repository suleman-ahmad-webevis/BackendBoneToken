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
import useBreakpoint from "../../hooks/useBreakPoint";
import TabProductCard from "../../Pages/Product/Tablet/TabProductCard";
import { PTabContainer, PTabProductList } from "../../Pages/Product/Tablet/Tablet.style";
import ProductsFilterBar from "../../Pages/Product/Tablet/ProductsFilterBar";

const RecentlyViewedProducts = () => {
  const { recentlyViewedProducts } = useSelector(
    (state) => state.recentlyViewedPro
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isDesktop, isTablet, isSmallMobile, isMobile } = useBreakpoint();

  return (
    <ProductPageContainer>
      {isDesktop && (
        <ProductsListContainer>
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
        </ProductsListContainer>
      )}
      {(isTablet || isMobile || isSmallMobile) && (
        <PTabContainer>
          <ProductsFilterBar />
          <PTabProductList id="ProductListContainer">
            {recentlyViewedProducts.length ? (
              recentlyViewedProducts.map((product) => (
                <TabProductCard product={product} key={product._id} />
              ))
            ) : (
              <Heading level={10} Black>
                No Products Found
              </Heading>
            )}
          </PTabProductList>
        </PTabContainer>
      )}
    </ProductPageContainer>
  );
};

export default RecentlyViewedProducts;
