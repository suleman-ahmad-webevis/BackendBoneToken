import styled from "styled-components";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTheProdSubCategory } from "../../redux/product/productSlice";
import Loader from "../Loader/Loader";
import Heading from "../Heading/Heading";
import SubCategoryCard from "../Cards/ProductsPageCard/SubCategoryCard";
import { useSearchParams } from "react-router-dom";

const SubCategoryListComponent = () => {
  const dispatch = useDispatch();
  const { isLoading, subCategories } = useSelector((state) => state.product);
  const [searchParams] = useSearchParams();
  const subCategory = searchParams.get("name");

  useEffect(() => {
    dispatch(getTheProdSubCategory(subCategory));
  }, [subCategory, dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {subCategories?.length ? (
        <ProductsList id="ProductListContainer">
          {subCategories.map((subCategory) => (
            <SubCategoryCard subCategory={subCategory} key={subCategory._id} />
          ))}
        </ProductsList>
      ) : (
        <NoProducts>
          <Heading level={10} Black>
            No SubCategory Found
          </Heading>
        </NoProducts>
      )}
    </>
  );
};

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 20px 40px;
  max-height: 1500px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: white;
  }

  ::-webkit-scrollbar-thumb {
    background: white;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: none;
  }
  @media screen and (max-width: 1350px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 990px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    align-self: center;
  }
`;

const NoProducts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SubCategoryListComponent;
