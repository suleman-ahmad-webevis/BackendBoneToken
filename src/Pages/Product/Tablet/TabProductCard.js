import React from "react";
import styled from "styled-components";
import { Img } from "../../../GlobalStyles";
import { useNavigate } from "react-router-dom";

const TabProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <>
      <TProCard key={product._id}>
        <Img
          src={product?.productImages[0]?.secureUrl}
          onClick={() => {
            navigate(`/shop/product-detail/${product._id}`);
          }}
        />
        <h5>{product?.name}</h5>
        <p>
          {product?.description.length > 50
            ? `${product.description.slice(0, 50)}...read more`
            : product.description}
        </p>
        <h4>
          {" "}
          €&nbsp;
          {product?.productInventory?.length &&
            product?.productInventory[0]?.minRetailPrice}
        </h4>
      </TProCard>
    </>
  );
};

export default TabProductCard;

export const TProCardWrapper = styled.div``;

export const TProCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 20px 35px rgba(23, 20, 57, 0.04);
  border-radius: 14px;
  width: 32%;
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  padding: 20px 10px;
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
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.24px;
    color: #9095a6;
  }
  h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.24px;
    color: #5b41ff;
  }
`;
