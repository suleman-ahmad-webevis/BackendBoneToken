import React from "react";
import styled from "styled-components";
import { Img } from "../../../GlobalStyles";
import { TCD } from "./TabCategoryData";
import { reset } from "../../../redux/product/productSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const TabAllCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <TACContainer>
      {TCD.map((value) => (
        <CategoryCard key={value.title}>
          <CardContent
            onClick={() => {
              dispatch(reset());
              navigate(value.path);
            }}
          >
            <CardImg>
              <Img src={value.img} alt="Category" />
            </CardImg>
            <CategoryName>
              <h5>{value.title}</h5>
            </CategoryName>
          </CardContent>
        </CategoryCard>
      ))}
    </TACContainer>
  );
};

export default TabAllCategory;

export const TACContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  grid-gap: 10px;
  height: 450px;
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

export const CategoryCard = styled.div`
  width: 31%;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    #ffffff 71.34%,
    #0e626d 71.35%,
    #0e626d 100%
  );
  box-shadow: 0px 20px 35px rgba(23, 20, 57, 0.04);
  border-radius: 14px;
  @media screen and (max-width: 600px) {
    width: 48%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 10px;
`;

export const CardImg = styled.div`
  padding: 10px;
`;

export const CategoryName = styled.div`
  h5 {
    font-weight: 800;
    font-size: 16px;
    line-height: 25px;
    color: #fff;
    text-align: center;
    line-height: 65px;
  }
`;
