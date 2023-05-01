import React from "react";
import { useNavigate } from "react-router-dom";
import { Img } from "../../GlobalStyles";
import styled from "styled-components";
import { proNavData } from "./ProNavData";

const ProductNavComp = () => {
  const navigate = useNavigate();

  const prodNavHandler = (index) => {
    if (index === 0) {
      navigate("/shop", {
        state: {
          index: index,
        },
      });
    }
    if (index === 1) {
      navigate("/shop?new=true", {
        state: {
          index: index,
        },
      });
    }
    if (index === 2) {
      navigate("/shop?featured=true", {
        state: {
          index: index,
        },
      });
    }
    if (index === 4) {
      navigate("/shop/recently-viewed", {
        state: {
          index: index,
        },
      });
    }
    if (index === 5) {
      navigate("/shop?rated=true", {
        state: {
          index: index,
        },
      });
    }
  };
  return (
    <ProductListLinks>
      {proNavData.map(({ title, icon }, index) => (
        <ProductsLink onClick={() => prodNavHandler(index)} key={index}>
          <ProNavItem>
            <p>{title}</p>
            {icon && <Img src={icon} />}
          </ProNavItem>
        </ProductsLink>
      ))}
    </ProductListLinks>
  );
};
export const ProductListLinks = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 20px;
  padding: 20px 40px 0;
  @media screen and (max-width: 1250px) {
    grid-gap: 10px;
  }
`;
export const ProductsLink = styled.div`
  background: #0e626d;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 20px;
  height: 30px;
  cursor: pointer;
  background: ${({ activeIndex }) => (activeIndex ? " #19517D" : "")};
  p {
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.03em;
    color: #ffffff;
    text-align: center;
  }
  &.active {
    background: rgba(33, 150, 243, 1);
  }
  @media screen and (max-width: 1312px) {
    p {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 1190px) {
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 1140px) {
    p {
      font-size: 12px;
    }
  }
  @media screen and (max-width: 1090px) {
    p {
      font-size: 10px;
    }
  }
`;

const ProNavItem = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 7px;
  p {
    white-space: nowrap;
  }
`;
export default ProductNavComp;
