import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import { Img } from "../../../GlobalStyles";
import Heading from "../../Heading/Heading";
import Heart from "../../../assets/images/Heart.png";
import RedHeart from "../../../assets/images/RedHeart.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../../redux/favourites/favouritesSlice";
import ReactImageZoom from "react-image-zoom";

const ProductCard = ({ product }) => {
  const { favouritesItems } = useSelector((state) => state.favourites);
  const [isFav, setIsFav] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    setIsFav(favouritesItems.find((item) => item._id === product._id));
    // eslint-disable-next-line
  }, []);

  const handleFavClick = (item) => {
    if (isFav) {
      dispatch(removeFromFavourites(item));
      setIsFav(!isFav);
    } else {
      dispatch(addToFavourites(item));
      setIsFav(!isFav);
    }
  };

  const props = {
    zoomPosition: "original",
    width: '100%',
    height: 319,
    zoomWidth: '100%',
    img: imageUrl,
  };

  return (
    <ProductCardContainer key={product?._id}>
      <CardData
        onMouseLeave={() => {
          setImageUrl(null);
        }}
      >
        {/* <ProductImage> */}
        {imageUrl ? (
          <ReactImageZoom {...props} />
        ) : (
          <Img
            src={product?.productImages[0]?.secureUrl}
            alt="ProductImage"
            onMouseEnter={() => {
              setImageUrl(product?.productImages[0]?.secureUrl);
            }}
          />
        )}
        {/* </ProductImage> */}
        <ItemName>
          <ProductCategory
            onClick={() => {
              navigate(`/shop/product-detail/${product._id}`, {
                state: {
                  productImages: product.productImages,
                },
              });
            }}
          >
            {product.name}
          </ProductCategory>
          <Img
            onClick={() => {
              handleFavClick(product);
            }}
            src={isFav ? RedHeart : Heart}
            alt="Heart"
          />
        </ItemName>
        <ProductDescription
          onClick={() => {
            navigate(`/shop/product-detail/${product._id}`, {
              state: {
                productImages: product.productImages,
              },
            });
          }}
        >
          <Heading level={4}>
            {product.description.length > 50
              ? `${product.description.slice(0, 50)}...read more`
              : product.description}
          </Heading>
        </ProductDescription>
      </CardData>
      <ProductRating>
        <PriceValue>
          <Heading level={4} Color LineHeight>
            €
          </Heading>
          <Heading level={4} Color LineHeight>
            {product?.productInventory?.length &&
              product?.productInventory[0]?.minRetailPrice}
          </Heading>
        </PriceValue>
        <Rating
          name="half-rating"
          precision={1}
          value={product.ratingAvg}
          readOnly
        />
      </ProductRating>
    </ProductCardContainer>
  );
};

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  grid-gap: 30px;
  padding: 10px;
  border: 1px solid #e7eaf3;
  border-radius: 8px;
  max-width: 345px;
  max-height: 550px;
`;
export const ProductCategory = styled.div`
  color: ${(props) => props.theme.ProductCategory};
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;
const CardData = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

// const ProductImage = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   img {
//     height: 326px;
//     width: 326px;
//     cursor: pointer;
//   }
// `;

const ItemName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    cursor: pointer;
  }
`;
const ProductDescription = styled.div`
  height: 55px;
`;
const ProductRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PriceValue = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
`;

export default ProductCard;
