import React, { useState, useEffect } from "react";
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
import {
  AddCart,
  CartItem,
  CheckBox,
  ColumnOneTwo,
  ColumnThree,
  DescriptionField,
  DetailImages,
  DetailMainImage,
  FieldLabel,
  IconBtn,
  Price,
  PriceContainer,
  PriceSection,
  ProductCode,
  ProductDetailContainer,
  ProductField,
  ProductForm,
  ProductMeasurement,
  ProductMeasurementList,
  ProductPhotoContainer,
  ProductSize,
  ProductSizeField,
  ProductWeight,
  RatingField,
  ShareProduct,
  SocialIcon,
  SocialIcons,
} from "./ProductDetail.styles";

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
                    checked={value?.checked && index === checkIndex}
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

export default ProductDetail;
