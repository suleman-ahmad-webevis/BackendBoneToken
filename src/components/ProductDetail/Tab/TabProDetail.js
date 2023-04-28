import React, { useState } from "react";
import {
  DRData,
  DRHeading,
  DetailItem,
  DetailReviewSection,
  NameDesc,
  NamePriceSection,
  ProDetailImg,
  ProductDetailSection,
  TabProDetailContainer,
  ProductDetail,
  ProDetailText,
  QuantitySection,
  CounterSection,
  Counter,
  PriceSection,
  Price,
  BtnSection,
  ShareProSection,
  ShareIcons,
  PriceSec,
} from "./TabProDetail.style";
import { Img } from "../../../GlobalStyles";
import { MobileComIcon } from "../../../Pages/Product/Tablet/Tablet.style";
import {
  Items,
  LangSelect,
  Counter as NavCounter,
} from "../../Navbar/NavbarStyles";
import { useSelector } from "react-redux";
//ImagesImport
import mobCart from "../../../assets/images/LandingPage/MobCart.png";
import mobFav from "../../../assets/images/LandingPage/MobFav.png";
import mobChat from "../../../assets/images/LandingPage/MobChat.png";
import Flags from "../../../assets/images/Navbar/Flags.png";
import FlagsDropDown from "../../../assets/images/RegisterLogin/FlagsDropDown.png";
import Product from "../../../assets/images/ProductDetail/Tab/Product.png";
import Min from "../../../assets/images/ProductDetail/Tab/Min.png";
import Max from "../../../assets/images/ProductDetail/Tab/Max.png";
import FB from "../../../assets/images/ProductDetail/Tab/FB.png";
import Insta from "../../../assets/images/ProductDetail/Tab/Insta.png";
import useBreakpoint from "../../../hooks/useBreakPoint";
import { useNavigate } from "react-router-dom";

const TabProDetail = ({ singlePro, newProInventory, priceFinder }) => {
  const { isSmallMobile, isMobile } = useBreakpoint();
  const navigate = useNavigate();
  //StoreData
  const { favouritesTotalQuantity } = useSelector((state) => state.favourites);
  const { cartQuantityIs } = useSelector((state) => state.cart);
  const [showReviews, setShowReview] = useState(false);

  return (
    <TabProDetailContainer>
      {(isSmallMobile || isMobile) && (
        <>
          <MobileComIcon>
            <Items>
              <Img
                src={mobFav}
                alt="mobFav"
                onClick={() => navigate("/favourites")}
              />
              <NavCounter>
                <p>{favouritesTotalQuantity ? favouritesTotalQuantity : 0}</p>
              </NavCounter>
            </Items>
            <Items>
              <Img
                src={mobCart}
                alt="mobCart"
                onClick={() => navigate("/checkout")}
              />
              <NavCounter>
                <p>{cartQuantityIs ? cartQuantityIs : 0}</p>
              </NavCounter>
            </Items>
            <Img src={mobChat} alt="mobChat" />
            <LangSelect>
              <Img src={Flags} alt="Flags" />
              <Img src={FlagsDropDown} alt="FlagsDropDown" />
            </LangSelect>
          </MobileComIcon>
        </>
      )}

      <ProDetailImg>
        <Img
          src={
            singlePro?.productImages?.length &&
            singlePro?.productImages[0].secureUrl
          }
          alt="product-image"
        />
      </ProDetailImg>
      <ProDetailText>
        <NamePriceSection>
          <NameDesc>
            <h5>{singlePro?.name}</h5>
            <h5>( Description of product )</h5>
          </NameDesc>
          <PriceSec>
            <h5>&euro; </h5>
            <h5>0</h5>
          </PriceSec>
        </NamePriceSection>
        <DetailReviewSection>
          <DRHeading>
            <h5
              onClick={() => setShowReview(false)}
              style={{
                color: showReviews ? "rgba(144, 149, 166, 0.65)" : "#5B41FF",
              }}
            >
              Detail{" "}
            </h5>
            <h5
              style={{
                color: !showReviews ? "rgba(144, 149, 166, 0.65)" : "#5B41FF",
              }}
              onClick={() => setShowReview(true)}
            >
              Reviews{" "}
            </h5>
          </DRHeading>
          <DRData>
            <p>{singlePro?.description}</p>
          </DRData>
        </DetailReviewSection>
        <ProductDetailSection>
          <h5>Details </h5>
          <ProductDetail>
            {newProInventory?.length &&
              newProInventory?.map((value, index) => (
                <DetailItem key={index}>
                  <h5>{value?.productCode}</h5>
                  <h5>{value?.size}(kg)</h5>
                  <h5>{value?.minRetailPrice} &euro</h5>
                </DetailItem>
              ))}
          </ProductDetail>
        </ProductDetailSection>
        <QuantitySection>
          <h5>Quantity </h5>
          <CounterSection>
            <Counter>
              <Img src={Min} />
              <h5>1</h5>
              <Img src={Max} />
            </Counter>
          </CounterSection>
        </QuantitySection>
        <PriceSection>
          <Price>
            <h5>Price</h5>
            <h5>{priceFinder()?.toFixed(2)} &euro;</h5>
          </Price>
          <Price>
            <h5>Retail Price</h5>
            <h5>$0</h5>
          </Price>
          <Price></Price>
        </PriceSection>
        <BtnSection>
          <button>Add to cart</button>
        </BtnSection>
        <ShareProSection>
          <h5>Share Product</h5>
          <ShareIcons>
            <Img src={FB} alt="Fb" />
            <Img src={Insta} alt="Insta" />
          </ShareIcons>
        </ShareProSection>
      </ProDetailText>
    </TabProDetailContainer>
  );
};

export default TabProDetail;
