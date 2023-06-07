import React, { memo, useState } from "react";
import {
  ArrowDD,
  BottomSec,
  CTabContainer,
  CartCard,
  CartCounter,
  CartDetails,
  CartImg,
  CounterContainer,
  DDContainer,
  DDHead,
  DDItems,
  HeadingSec,
  TopSec,
} from "./CheckoutTab.style";
// import CommonMobNav from "../../CommonMTNav/CommonMobNav";
// import CommonTabNav from "../../CommonMTNav/CommonTabNav";
// import useBreakpoint from "../../../hooks/useBreakPoint";
import { Img } from "../../../GlobalStyles";
// import Agility from "../../../assets/images/Shop/TabCat/Agility.png";
import TabCheckArrow from "../../../assets/images/TabCheckArrow.png";
// import { useDispatch } from "react-redux";
// import { incDecQuantity } from "../../../redux/cart/cartSlice";

const CheckoutTab = ({ cartItems, cartQuantityIs }) => {
  // const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  // const { isSmallMobile, isMobile, isTablet } = useBreakpoint();
  console.log("The cartItems", cartItems);
  return (
    <>
      <CTabContainer>
        <HeadingSec>
          <h5>Cart</h5>
          <p>{cartQuantityIs} items</p>
        </HeadingSec>
        <CartDetails>
          {cartItems.length
            ? cartItems.map((cartItem, index) => (
                //       {/* {(isSmallMobile || isMobile) && <CommonMobNav />}
                // {(isTablet || isSmallMobile || isMobile) && <CommonTabNav />} */}
                <CartCard key={index}>
                  <TopSec>
                    <CartImg>
                      <Img
                        src={
                          cartItem?.productImages?.length &&
                          cartItem?.productImages[0]?.secureUrl
                        }
                        alt="cart"
                        style={{
                          width: "60%",
                          height: "150px",
                          objectFit: "cover",
                        }}
                      />
                      <DDContainer isOpen={isOpen}>
                        <DDHead>
                          <span>{cartItem?.size}</span>
                          <ArrowDD onClick={() => setIsOpen(true)}>
                            <Img src={TabCheckArrow} alt="TabCheckArrow" />
                          </ArrowDD>
                        </DDHead>
                        {isOpen && (
                          <DDItems>
                            <li>{cartItem?.size}</li>
                          </DDItems>
                        )}
                      </DDContainer>
                    </CartImg>
                    <CounterContainer>
                      <CartCounter>
                        <h5
                          onClick={() => {
                            // let type = "inc";
                            // dispatch(incDecQuantity({ cartItem.minRetailPrice, type }))
                          }}
                        >
                          +
                        </h5>
                        <h5>{cartItem?.quantity}</h5>
                        <h5
                          onClick={() => {
                            // let type = "dec";
                            // dispatch(incDecQuantity({ cartItem.minRetailPrice, type }))
                          }}
                        >
                          -
                        </h5>
                      </CartCounter>
                    </CounterContainer>
                  </TopSec>
                  <BottomSec>
                    <p>{cartItem?.name}</p>
                    <h5>{cartItem?.minRetailPrice}</h5>
                  </BottomSec>
                </CartCard>
              ))
            : null}
        </CartDetails>
      </CTabContainer>
    </>
  );
};

export default memo(CheckoutTab);
