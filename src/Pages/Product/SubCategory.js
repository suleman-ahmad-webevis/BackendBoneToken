import React, { useEffect } from "react";
import styled from "styled-components";
import SubCategoryListComponent from "../../components/ProductsComponent/SubCategoryComponent";
import ProductNavComp from "../../components/ProductsComponent/ProductNavComp";

const SubCategory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProductPageContainer>
      <ProductsListContainer>
        <ProductNavComp /> <SubCategoryListComponent />
      </ProductsListContainer>
    </ProductPageContainer>
  );
};

export const ProductPageContainer = styled.div`
  display: flex;
  padding: 20px 0;
  grid-gap: 5px;
  position: relative;
  @media screen and (max-width: 900px) {
    margin-top: 80px;
  }
  @media screen and (max-width: 760px) {
    margin-top: 60px;
  }
`;

export const ProductsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
  /* width: 80%; */
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;
export const CategoriesButton = styled.div`
  background: #64baff;
  border-radius: 8px;
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;

  @media (max-width: 500px) {
    display: flex;
    position: absolute;
    top: -50px;
    right: 10px;
    left: 10px;
    z-index: 1;
    height: 40px;
    img {
      height: 30px;
    }
  }
`;
export const ProductListLinks = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 20px;
  padding: 20px 40px 0;

  @media screen and (max-width: 1250px) {
    grid-gap: 10px;
  }
  @media screen and (max-width: 900px) {
    position: absolute;
    right: 0;
    left: 0;
    top: -90px;
  }
  @media screen and (max-width: 760px) {
    top: -70px;
  }
  @media (max-width: 500px) {
    overflow: hidden;
    flex-direction: column;
    align-items: flex-start;
    max-height: ${({ open }) => (open ? "100vh" : "0vh")};
    transition: max-height 0.3s ease-in;
    position: absolute;
    top: 0;
    right: 10px;
    left: 10px;
    padding: 0;
    z-index: 900;
    background: #fff;
  }
`;
export const ProductsLink = styled.div`
  background: rgba(33, 150, 243, 0.3);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 5px 20px;
  height: 40px;
  cursor: pointer;
  background: ${({ activeIndex }) =>
    activeIndex ? "rgba(33, 150, 243, 1)" : ""};

  &.active {
    background: rgba(33, 150, 243, 1);
  }

  @media screen and (max-width: 1200px) {
    height: 30px;
  }
  @media screen and (max-width: 1020px) {
    height: 30px;
    padding: 10px 15px 5px 15px;
  }
  @media screen and (max-width: 900px) {
    height: 40px;
    padding: 10px 20px 5px 20px;
  }
  @media screen and (max-width: 760px) {
    height: 35px;
    padding: 10px 15px 5px 15px;
  }
  @media screen and (max-width: 620px) {
    height: 30px;
    padding: 10px 10px 5px 10px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const ShopList = styled.div`
  display: none;
  cursor: pointer;
  font-size: 20px;
  margin-top: 5px;

  @media (max-width: 500px) {
    display: block;
  }
`;

export default SubCategory;
