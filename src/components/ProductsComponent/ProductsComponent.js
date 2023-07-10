import styled from "styled-components";
import ProductCard from "../Cards/ProductsPageCard/ProductCard";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTheProducts,
  reset,
  setAllProducts,
} from "../../redux/product/productSlice";
import Loader from "../Loader/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation, useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";

const ProductsListComponent = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const featured = searchParams.get("featured");
  const newParam = searchParams.get("new");
  const rated = searchParams.get("rated");
  const { products, total, allProducts, noProMsg, isLoading } = useSelector(
    (state) => state.product
  );
  //InfinteScroll
  const [pageInc, setPageInc] = useState(1);
  const [limit] = useState(10);
  useEffect(() => {
    dispatch(reset());
    dispatch(
      getTheProducts({
        featured,
        category,
        subCategory: location?.state?.subCategory,
        newParam,
        rated,
        page: pageInc,
        limit,
      })
    );
    // eslint-disable-next-line
  }, [location]);

  useEffect(() => {
    dispatch(setAllProducts());
    // eslint-disable-next-line
  }, [products]);

  const fetchMore = () => {
    setPageInc((pageInc) => pageInc + 1);
    if (allProducts.length < total) {
      dispatch(
        getTheProducts({
          newParam,
          featured,
          category,
          page: pageInc + 1,
          limit,
        })
      );
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      {allProducts?.length ? (
        <ProductsList id="ProductListContainer">
          {allProducts.map((product, idx) => (
            <ProductCard product={product} key={idx} />
          ))}
          <InfiniteScroll
            dataLength={allProducts?.length}
            next={fetchMore}
            hasMore={allProducts?.length < total ? true : false}
            scrollableTarget="ProductListContainer"
          />
        </ProductsList>
      ) : (
        <NoProducts>
          <Heading level={10} Black>
            {noProMsg}
          </Heading>
        </NoProducts>
      )}
    </>
  );
};

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 20px 40px;
  height: 100vh;
  overflow-y: auto;
  width: 100%;

  &::-webkit-scrollbar {
    display: block;
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.35);
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #314552;
    border-right: none;
    border-left: none;
    border-radius: 10px;
  }
  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    align-self: center;
  }
`;

const NoProducts = styled.div`
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
  margin: 20px 0 0 40px;
`;

export default ProductsListComponent;
