import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";
import ShareIcon from "../../assets/images/ProductDetail/ShareIcon.png";
import Facebook from "../../assets/images/ProductDetail/Facebook.png";
import Instagram from "../../assets/images/ProductDetail/Instagram.png";
import Heading from "../Heading/Heading";
import Rating from "@mui/material/Rating";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getTheProductById,
  rateTheProduct,
} from "../../redux/product/productSlice";
import { addToYourCart } from "../../redux/cart/cartSlice";
import { FacebookShareButton } from "react-share";
import { recentlyViewPro } from "../../redux/recentlyViewed/recentlySlice";
import LoadingBar from "../Loader/LoadingBar";
import ReactImageZoom from "react-image-zoom";
// import ShopCategoriesWithSidebar from "../Categories/ShopCategoriesWithSidebar";
// import SlideOne from "../../assets/images/Blogs/SlideOne.png";
import useBreakpoint from "../../hooks/useBreakPoint";
import TabProDetail from "./Tab/TabProDetail";

const ProductDetail = () => {
  const { isDesktop, isTablet, isSmallMobile, isMobile } = useBreakpoint();

  const [imageUrl, setImageUrl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [newProInventory, setNewProInventory] = useState([]);
  const { singlePro, isLoading } = useSelector((state) => state.product);
  const { userInfo } = useSelector((state) => state.user);

  //AllRatings
  const [quantityR, setQuantityR] = useState(0);
  const [fitPurposeR, setFitPurposeR] = useState(0);
  const [serviceR, setServiceR] = useState(0);
  const [priceR, setPriceR] = useState(0);
  const [total, setTotal] = useState(0);
  //AddToCart
  const [selectedPro, setSelectedPro] = useState([]);
  const [checkIndex, setCheckIndex] = useState("");

  useEffect(() => {
    dispatch(getTheProductById(id));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setNewProInventory(
      singlePro?.productInventory?.map((value) => ({
        ...value,
        checked: false,
        quantity: 0,
      }))
    );
    dispatch(recentlyViewPro(singlePro));
    setImageUrl(
      singlePro?.productImages?.length && singlePro?.productImages[0]?.secureUrl
    );
    // eslint-disable-next-line
  }, [singlePro]);

  useEffect(() => {
    if (total === 4) {
      dispatch(
        rateTheProduct({ quantityR, fitPurposeR, serviceR, priceR, total, id })
      );
    }
    // eslint-disable-next-line
  }, [total]);

  if (isLoading) {
    return <LoadingBar />;
  }

  const props = {
    zoomPosition: "original",
    width: 273,
    height: 273,
    zoomWidth: 273,
    img: imageUrl,
  };

  let dogDataPrice = 0;
  const priceFinder = () => {
    if (singlePro?.productInventory?.length) {
      if (checkIndex) {
        dogDataPrice =
          newProInventory[Number(checkIndex)]?.minRetailPrice *
          newProInventory[Number(checkIndex)]?.quantity *
          (1 - 0.05);
        return (
          newProInventory[Number(checkIndex)]?.minRetailPrice *
          newProInventory[Number(checkIndex)]?.quantity
        );
      } else return 0;
    }
  };

  const ItemSelector = (value, index) => {
    let tempInventory = [...newProInventory];
    // tempInventory = tempInventory.map((elem) => {
    //   return {
    //     ...elem,
    //     checked: false,
    //   };
    // });
    tempInventory[index].checked = value;
    tempInventory[index].name = singlePro?.name;
    tempInventory[index].description = singlePro?.description;
    tempInventory[index].productImages = singlePro?.productImages;
    if (tempInventory[index].quantity) {
      // eslint-disable-next-line
      tempInventory[index].quantity = tempInventory[index].quantity;
    } else {
      tempInventory[index].quantity = 1;
    }
    let selectedIndex = `${index}`;
    if (!value) {
      selectedIndex = "";
    }
    tempInventory[index].itemTotalPrice =
      tempInventory[index].minRetailPrice * tempInventory[index].quantity;
    setCheckIndex(selectedIndex);
    setNewProInventory(tempInventory);
    if (selectedIndex) {
      setSelectedPro(newProInventory.filter((e) => e.quantity !== 0));
    }
  };

  const handleQuantity = (type) => {
    const tempInventory = [...newProInventory];
    if (checkIndex) {
      tempInventory[checkIndex].quantity =
        type === "inc"
          ? tempInventory[checkIndex].quantity + 1
          : tempInventory[checkIndex].quantity - 1;
      tempInventory[checkIndex].itemTotalPrice =
        tempInventory[checkIndex].minRetailPrice *
        tempInventory[checkIndex].quantity;
      setNewProInventory(tempInventory);
    }
    setSelectedPro(newProInventory.filter((e) => e.quantity !== 0));
  };

  return (
    <>
      {isDesktop ? (
        <ProductDetailContainer>
          <ColumnOneTwo>
            <DetailMainImage>
              {imageUrl ? <ReactImageZoom {...props} /> : null}
            </DetailMainImage>
            <Heading level={6}>Photos of product</Heading>
            <ProductPhotoContainer>
              {singlePro?.productImages?.length &&
                singlePro?.productImages.map((proImage) => (
                  <DetailImages
                    onClick={() => setImageUrl(proImage?.secureUrl)}
                    key={proImage?.secureUrl}
                  >
                    <Img src={proImage?.secureUrl} alt="productImage" />
                  </DetailImages>
                ))}
            </ProductPhotoContainer>
          </ColumnOneTwo>
          <ColumnOneTwo>
            <ProductForm>
              <ProductField>
                <FieldLabel>Product Name</FieldLabel>
                <input type="text" value={singlePro?.name} disabled />
              </ProductField>
              <DescriptionField>
                <FieldLabel>
                  <ShareProduct>
                    <Img src={ShareIcon} alt="ShareIcon" />
                    <Heading level={6}>Description</Heading>
                  </ShareProduct>
                </FieldLabel>
                <textarea
                  value={singlePro?.description}
                  readOnly
                  disabled
                  row={10}
                  cols={50}
                  style={{ resize: "none" }}
                />
              </DescriptionField>
            </ProductForm>
            {/* <ProductField>
            <FieldLabel>Color</FieldLabel>
            <DetailColorSelector />
          </ProductField> */}
            <RatingField>
              <ProductField>
                <FieldLabel>Quality</FieldLabel>
                <Rating
                  name="half-rating"
                  value={quantityR}
                  size="large"
                  precision={1}
                  disabled={userInfo ? false : true}
                  onChange={(event, ratingVal) => {
                    setQuantityR(ratingVal);
                    setTotal((prev) => prev + 1);
                  }}
                />
                <FieldLabel>Service</FieldLabel>
                <Rating
                  name="half-rating"
                  value={serviceR}
                  size="large"
                  precision={1}
                  disabled={userInfo ? false : true}
                  onChange={(event, ratingVal) => {
                    setServiceR(ratingVal);
                    setTotal((prev) => prev + 1);
                  }}
                />
              </ProductField>
              <ProductField>
                <FieldLabel>Fit for purpose</FieldLabel>
                <Rating
                  name="half-rating"
                  value={fitPurposeR}
                  size="large"
                  precision={1}
                  disabled={userInfo ? false : true}
                  onChange={(event, ratingVal) => {
                    setFitPurposeR(ratingVal);
                    setTotal((prev) => prev + 1);
                  }}
                />
                <FieldLabel>Price</FieldLabel>
                <Rating
                  name="half-rating"
                  value={priceR}
                  size="large"
                  precision={1}
                  disabled={userInfo ? false : true}
                  onChange={(event, ratingVal) => {
                    setPriceR(ratingVal);
                    setTotal((prev) => prev + 1);
                  }}
                />
              </ProductField>
            </RatingField>
          </ColumnOneTwo>
          <ColumnThree>
            <ProductMeasurementList>
              <FieldLabel>Details</FieldLabel>
              {newProInventory?.map((value, index) => (
                <ProductMeasurement key={value?._id}>
                  <ProductSizeField>
                    <ProductSize>{value?.size}</ProductSize>
                    <ProductCode>{value?.productCode}</ProductCode>
                  </ProductSizeField>
                  <ProductWeight>
                    {value?.weight === "0 kg" ? "" : value?.weight}
                  </ProductWeight>
                  <ProductWeight>{value?.minRetailPrice} &euro;</ProductWeight>
                  <CheckBox
                    type="checkbox"
                    checked={value?.checked && index == checkIndex}
                    onChange={(e) => ItemSelector(e.target.checked, index)}
                  />
                </ProductMeasurement>
              ))}
            </ProductMeasurementList>
            <PriceContainer>
              <FieldLabel>Quantity</FieldLabel>
              <CartItem>
                <IconBtn
                  disabled={
                    checkIndex &&
                    newProInventory?.length &&
                    newProInventory[checkIndex]?.quantity > 1
                      ? false
                      : true
                  }
                  onClick={() => handleQuantity("dec")}
                >
                  -
                </IconBtn>
                <h3 readOnly>
                  {checkIndex && newProInventory && newProInventory?.length
                    ? newProInventory[checkIndex]?.quantity
                    : 0}
                </h3>
                <IconBtn
                  disabled={checkIndex ? false : true}
                  onClick={() => handleQuantity("inc")}
                >
                  +
                </IconBtn>
              </CartItem>
              <PriceSection>
                <p>Price</p>
                {/* <Img src={price} alt="price" /> */}
                <Price>{priceFinder()?.toFixed(2)} &euro;</Price>
              </PriceSection>
              <PriceSection>
                DogData Price
                {/* <Img src={dogprice} alt="dogprice" /> */}
                <Price>{dogDataPrice?.toFixed(2)} &euro;</Price>
              </PriceSection>
              <AddCart
                disabled={!selectedPro?.length && true}
                onClick={() => {
                  dispatch(
                    addToYourCart({
                      selectedPro,
                    })
                  );
                }}
              >
                Add to Cart
                {/* <Img src={addCart} title="Add To Cart" /> */}
              </AddCart>
            </PriceContainer>
            <SocialIcons>
              <ShareProduct>
                <Img src={ShareIcon} alt="ShareIcon" />
                <Heading level={6}>Share product</Heading>
              </ShareProduct>
              <SocialIcon>
                <FacebookShareButton
                // url={window.location.href}
                // style={{ marginLeft: "4px" }}
                // quote={"New Product Launched, Have a Look!"}
                >
                  <Img src={Facebook} alt="Facebook" />
                </FacebookShareButton>
                <Img
                  src={Instagram}
                  onClick={() => navigate("/instagram-handler")}
                  alt="Instagram"
                />
              </SocialIcon>
            </SocialIcons>
          </ColumnThree>
        </ProductDetailContainer>
      ) : (
        (isTablet || isMobile || isSmallMobile) && (
          <TabProDetail
            singlePro={singlePro}
            newProInventory={newProInventory}
            priceFinder={priceFinder}
          />
        )
      )}
    </>
  );
};

export const ProductDetailContainer = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
`;

export const ProductField = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  position: relative;
  width: 100%;

  input {
    background: #f5f5f5;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 12px;
    font-size: 16px;
  }
`;
export const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 13px;
  align-self: flex-end;
`;

export const ColumnOneTwo = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ColumnThree = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  grid-gap: 12px;
  @media screen and (max-width: 1500px) {
    width: 28%;
  }
`;

export const FieldLabel = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #000000;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 13px;
  align-self: flex-start;
  width: 100%;
`;

export const CombinedProductFields = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;
export const CombinedProduct = styled.div`
  display: flex;
  grid-gap: 20px;
  FieldLabel {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #000000;
  }

  input {
    background: #f5f5f5;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 12px;
  }

  ::placeholder {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #000000;
  }
`;
export const ProductForm = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
`;
export const ProductPhotos = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;
export const ShareProduct = styled.div`
  display: flex;
  grid-gap: 10px;
  cursor: pointer;
`;
export const DescriptionField = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;

  textarea {
    background: #f5f5f5;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    width: 100%;
    height: 136px;
    outline: none;
    padding: 10px;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #000;
    }
    ::-webkit-scrollbar-thumb {
      background: #79999d;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #79999d;
    }
  }
`;

export const ProductPhotoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const Counter = styled.div`
  background: #f5f8fd;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  /* padding: 12px; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* grid-gap: 10px; */

  input {
    outline: none;
    background: none;
    border: none;
    box-shadow: none;
    border-radius: none;
    text-align: center;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    ::placeholder {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
    }
  }
`;
export const AddToCartButton = styled.div`
  background: #2979ff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-family: "DM Sans";
  font-style: normal;
  font-size: 21px;
  line-height: 27px;
  letter-spacing: 0.035em;
  color: #ffffff;
  align-self: flex-end;
  cursor: pointer;
  width: 360px;
  margin-top: 20px;

  &:hover {
    background: #000000;
  }
`;
export const ProductRating = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1500px) {
    flex-direction: column;
  }
`;

export const RatingField = styled.div`
  display: flex;
  grid-gap: 10px;
  margin-top: 20px;
  .css-jue3ft-MuiRating-root {
    font-size: 34px;
  }
  @media screen and (max-width: 1500px) {
    .css-jue3ft-MuiRating-root {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 1300px) {
    .css-jue3ft-MuiRating-root {
      font-size: 28px;
    }
  }
  @media screen and (max-width: 1300px) {
    .css-jue3ft-MuiRating-root {
      font-size: 26px;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 25px;
`;

const SocialIcon = styled.div`
  display: flex;
  grid-gap: 10px;
  cursor: pointer;
  img {
    width: 30px;
    height: 30px;
  }
`;

const DetailMainImage = styled.div`
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 273px;
  height: 273px;
  position: relative;
  z-index: 100;
  img {
    width: 273px;
    height: 273px;
  }
`;

const DetailImages = styled.div`
  border-radius: 8px;
  img {
    width: 82px;
    height: 82px;
  }
`;
const AddCart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    123.41deg,
    #65f753 28.58%,
    #92fa86 55.2%,
    #51dd40 76.63%,
    #1de407 117.51%
  );
  box-shadow: 0px 0px 30px #aeecd4, inset 0px 0px 20px #6be7b7;
  border-radius: 5px;
  margin-top: 30px;
  /* width: 296px; */
  height: 44px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  color: #000000;
`;

const PriceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  height: 46px;
  padding: 0 10px;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
`;

const Price = styled.div`
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  color: #000000;
  font-weight: 700;
`;

const IconBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: #e1e9f0;
  border-radius: 8px;
  font-size: 24px;
  line-height: 29px;
  border: none;
  color: #a6b5bf;
  &:hover {
    background: #3dbb8b;
    color: #ffffff;
  }
`;

export const SizeInput = styled.input`
  background: #fff !important;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  /* padding: 12px; */
  width: 100%;
  height: 55px;
`;
export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f8fd;
  border-radius: 8px;
  gap: 30px;
  border-radius: 8px;
  width: 100%;
  padding: 10px 20px;
`;

export const ProductMeasurementList = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  height: 372px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.35);
    -webkit-border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #314552;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #314552;
  }
`;

export const ProductMeasurement = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 10px;
`;

export const ProductSizeField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ProductSize = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #000000;
`;

export const ProductCode = styled.div`
  font-size: 10px;
  line-height: 13px;
  color: #868686;
`;

export const ProductWeight = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #000000;
`;

export const CheckBox = styled.input`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  outline: none;
  width: 31px;
  height: 31px;
  cursor: pointer;
`;
export default ProductDetail;
