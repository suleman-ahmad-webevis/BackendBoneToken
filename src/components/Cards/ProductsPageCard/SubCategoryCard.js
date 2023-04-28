import React from "react";
import styled from "styled-components";
import { Img } from "../../../GlobalStyles";
import { useNavigate } from "react-router-dom";

const SubCategoryCard = ({ subCategory }) => {
  const navigate = useNavigate();
  return (
    <SubCategoryCardContainer>
      <CardData
        key={subCategory?._id}
        onClick={() =>
          navigate(`/shop?subCategory=${subCategory.path}`, {
            state: { subCategory: subCategory._id },
          })
        }
      >
        <ProductImage>
          <Img
            src={subCategory.subCategoryImg}
            alt="ProductImage"
            style={{ cursor: "pointer", objectFit: "contain" }}
          />
        </ProductImage>
        <ProductCategory>{subCategory.title}</ProductCategory>
        <ProductDescription>
          {subCategory.subCategoryDesc.length > 50
            ? `${subCategory.subCategoryDesc.slice(0, 50)}...read more`
            : subCategory.subCategoryDesc}
        </ProductDescription>
      </CardData>
    </SubCategoryCardContainer>
  );
};

const SubCategoryCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  grid-gap: 30px;
  padding: 10px;
  border: 1px solid #e7eaf3;
  border-radius: 8px;
  max-width: 345px;
`;

export const ProductCategory = styled.div`
  color: ${(props) => props.theme.ProductCategory};
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;

const CardData = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

const ProductDescription = styled.div`
  height: 55px;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #98a4af;
`;

export const PriceValue = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
`;

const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 326px;
    width: 326px;
  }
`;

export default SubCategoryCard;
