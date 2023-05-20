import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  getTheProdSubCategory,
} from "../../../redux/product/productSlice";
import Loader from "../../Loader/Loader";
import { Img } from "../../../GlobalStyles";
import styled from "styled-components";

const SubTab = () => {
  const dispatch = useDispatch();
  const { isLoading, subCategories } = useSelector((state) => state.product);
  const [searchParams] = useSearchParams();
  const subCategory = searchParams.get("name");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTheProdSubCategory(subCategory));
  }, [subCategory, dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {subCategories?.length ? (
        <SubTabContainer>
          {subCategories.map((value, index) => (
            <SubTabCard key={index}>
              <Img
                src={value?.subCategoryImg}
                onClick={() => {
                  navigate(`/shop?subCategory=${value.path}`, {
                    state: { subCategory: value._id },
                  });
                }}
              />
              <h5>{value?.title}</h5>
              <p>
                {value?.subCategoryDesc.length > 50
                  ? `${value.description.slice(0, 50)}...read more`
                  : value.description}
              </p>
            </SubTabCard>
          ))}
        </SubTabContainer>
      ) : null}
    </>
  );
};

export default SubTab;

export const SubTabContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  grid-gap: 10px;
  min-height: 505px;
  /* Minheight used above is temporary */
  /* max-height: 845px; */
  overflow-y: scroll;
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
`;

export const SubTabCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 20px 35px rgba(23, 20, 57, 0.04);
  border-radius: 14px;
  width: 31%;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px;
  padding: 20px 10px;
  min-height: 213px;
  @media screen and (max-width: 600px) {
    width: 48%;
  }
  h5 {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.24px;
    color: #1b153d;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.24px;
    color: #9095a6;
  }
`;
