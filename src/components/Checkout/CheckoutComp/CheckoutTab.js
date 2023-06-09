import React, { memo, useState } from "react";
import {
  ArrowDD,
  BottomSec,
  CTabContainer,
  CartCard,
  CartCounter,
  CartDetails,
  CartImg,
  CheckOut,
  CheckoutBtn,
  CounterContainer,
  DDContainer,
  DDHead,
  DDItems,
  HeadingSec,
  SubTotal,
  TopSec,
} from "./CheckoutTab.style";
import { Img } from "../../../GlobalStyles";
import TabCheckArrow from "../../../assets/images/TabCheckArrow.png";
import { useDispatch } from "react-redux";
import { incDecQuantity } from "../../../redux/cart/cartSlice";
import CommonTabNav from "../../CommonMTNav/CommonTabNav";
import CommonMobNav from "../../CommonMTNav/CommonMobNav";
import Back from "../../Back/Back";
import useBreakpoint from "../../../hooks/useBreakPoint";
import COutForm from "./CheckoutPages/COutForm";
import COutData from "./CheckoutPages/COutData";
import NextArrow from "../../../assets/images/NextArrow.png";

const CheckoutTab = ({
  cartItems,
  cartQuantityIs,
  cartAmountIs,
  cartTotalAmountIs,
}) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { isSmallMobile, isMobile } = useBreakpoint();
  return (
    <>
      <CTabContainer>
        <CommonTabNav />
        {(isMobile || isSmallMobile) && <CommonMobNav />}
        <Back />
        {page === 1 && (
          <>
            <HeadingSec>
              <h5>Cart</h5>
              <p>{cartQuantityIs} items</p>
            </HeadingSec>
            <CartDetails>
              {cartItems.length
                ? cartItems.map((cartItem, index) => (
                    <>
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
                                <ArrowDD onClick={() => setIsOpen(false)}>
                                  <Img
                                    src={TabCheckArrow}
                                    alt="TabCheckArrow"
                                  />
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
                                  let type = "inc";
                                  dispatch(
                                    incDecQuantity({
                                      minRetailPrice: cartItem?.minRetailPrice,
                                      type,
                                    })
                                  );
                                }}
                              >
                                +
                              </h5>
                              <h5>{cartItem?.quantity}</h5>
                              <h5
                                onClick={() => {
                                  let type = "dec";
                                  dispatch(
                                    incDecQuantity({
                                      minRetailPrice: cartItem?.minRetailPrice,
                                      type,
                                    })
                                  );
                                }}
                              >
                                -
                              </h5>
                            </CartCounter>
                          </CounterContainer>
                        </TopSec>
                        <BottomSec>
                          <p>{cartItem?.name}</p>
                          <h5>&euro; {cartItem?.itemTotalPrice?.toFixed(2)}</h5>
                        </BottomSec>
                      </CartCard>
                      <CheckoutBtn>
                        <SubTotal>
                          <span>Subtotal</span>
                          <h5>&euro; 000.00</h5>
                        </SubTotal>
                        <CheckOut onClick={() => setPage((page) => page + 1)}>
                          <h5>CHECK OUT</h5>
                          <Img src={NextArrow} alt="NextArrow" />
                        </CheckOut>
                      </CheckoutBtn>
                    </>
                  ))
                : null}
            </CartDetails>
          </>
        )}
        {page === 3 && <COutForm />}
        {page === 2 && (
          <COutData
            cartAmountIs={cartAmountIs}
            cartTotalAmountIs={cartTotalAmountIs}
          />
        )}
      </CTabContainer>
    </>
  );
};

export default memo(CheckoutTab);
