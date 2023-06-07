import React, { useState, useEffect } from "react";
import { Img } from "../../GlobalStyles";
import {
  CheckoutContainer,
  CheckoutSec,
  CheckoutLink,
  CheckoutItems,
  CheckoutPrices,
  Title,
  Amount,
  TotalBill,
  PayButton,
  CheckoutForm,
  Label,
  AnySpec,
  CheckedOutItems,
} from "./CheckoutStyle";
import { AddressFieldIcon, FormField, FormInput } from "../Forms/UserStyles";
import ShareIcon from "../../assets/images/ProductDetail/ShareIcon.png";
import AddressIcon from "../../assets/images/AddressIcon.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Modal from "../modal/modal";
import PaymentMethod from "./PaymentMethod";
import Heading from "../Heading/Heading";
import CheckoutCardCom from "./CheckoutCard";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotalAmount } from "../../redux/cart/cartSlice";
import useBreakpoint from "../../hooks/useBreakPoint";
import CheckoutTab from "./CheckoutComp/CheckoutTab";

const CheckOutComp = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const { cartItems, cartQuantityIs, cartAmountIs, cartTotalAmountIs } =
    useSelector((state) => state.cart);
  const { isDesktop, isSmallMobile, isMobile, isTablet } = useBreakpoint();
  useEffect(() => {
    dispatch(getCartTotalAmount());
    // eslint-disable-next-line
  }, [cartQuantityIs]);

  return (
    <>
      {isDesktop ? (
        <CheckoutContainer>
          <CheckoutSec Width="65%">
            {cartItems.length ? (
              <CheckedOutItems>
                {cartItems?.map((cartItem, index) => (
                  <CheckoutCardCom cartItem={cartItem} index={index} />
                ))}
              </CheckedOutItems>
            ) : (
              <Heading>No products in cart</Heading>
            )}
            <CheckoutPrices>
              <CheckoutLink>
                <CheckoutItems>
                  <Title> Cost</Title>
                  <Title> Delivery</Title>
                  <Title> VAT (18%)</Title>
                  <Title> Total</Title>
                </CheckoutItems>
                <CheckoutItems>
                  <Amount>{cartAmountIs?.toFixed(2)}</Amount>
                  <Amount>18 euro</Amount>
                  <Amount>10.44 euro</Amount>
                  <Amount>{cartTotalAmountIs.toFixed(2)}</Amount>
                </CheckoutItems>
              </CheckoutLink>
              <TotalBill>
                <h3>
                  {" "}
                  Shopping Cart total: € <span>{cartAmountIs?.toFixed(2)}</span>
                </h3>
                <PayButton onClick={() => setActive(true)}>
                  CHOOSE PAYMENT METHOD
                </PayButton>
                <Modal
                  title="Payment Methods"
                  active={active}
                  hideModal={() => setActive(false)}
                >
                  <PaymentMethod cartItems={cartItems} />
                </Modal>
              </TotalBill>
            </CheckoutPrices>
          </CheckoutSec>
          <CheckoutSec Width="34%">
            <CheckoutForm>
              <FormField>
                <Label>
                  Name<span> *</span>
                </Label>
                <FormInput placeholder="" />
              </FormField>
              <FormField>
                <Label>
                  Address<span> *</span>
                </Label>
                <FormInput placeholder="" style={{ paddingLeft: "35px" }} />
                <AddressFieldIcon>
                  <Img src={AddressIcon} alt="icon" />
                </AddressFieldIcon>
              </FormField>
              <FormField>
                <Label>
                  Email<span> *</span>
                </Label>
                <FormInput type="email" />
              </FormField>
              <FormField>
                <Label>
                  <AnySpec>
                    <Img src={ShareIcon} alt="share Icon" />
                    <h1>Any Special Requirements</h1>
                  </AnySpec>
                </Label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="..."
                  style={{
                    background: "#ffffff",
                    padding: "10px",
                    outline: "none",
                    color: "#b7b7b7",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "17px",
                    position: "relative",
                    border: "2px solid rgba(121, 153, 157, 0.15)",
                    borderRadius: "8px",
                    fontFamily: "Inter-Regular",
                  }}
                />
              </FormField>
              <FormField>
                <PhoneInput
                  international
                  country="gb"
                  countryCallingCodeEditable={true}
                  limitMaxLength={true}
                  placeholder="(+370) 00000000"
                  onlyCountries={[
                    "at",
                    "be",
                    "bg",
                    "hr",
                    "cy",
                    "cz",
                    "dk",
                    "ee",
                    "fi",
                    "fr",
                    "de",
                    "gr",
                    "hu",
                    "ie",
                    "it",
                    "lv",
                    "lt",
                    "lu",
                    "mt",
                    "nl",
                    "pl",
                    "pt",
                    "ro",
                    "sk",
                    "si",
                    "es",
                    "eu",
                    "is",
                    "li",
                    "no",
                    "ch",
                    "efta",
                    "al",
                    "me",
                    "mk",
                    "rs",
                    "tr",
                    "ad",
                    "by",
                    "ba",
                    "md",
                    "mc",
                    "ru",
                    "sm",
                    "ua",
                    "gb",
                    "va",
                  ]}
                />
              </FormField>
              <FormField>
                <Label>VAT Number</Label>
                <FormInput placeholder="Vat Number" />
              </FormField>
            </CheckoutForm>
          </CheckoutSec>
        </CheckoutContainer>
      ) : (
        (isTablet || isMobile || isSmallMobile) && (
          <CheckoutTab
            cartItems={cartItems}
            cartQuantityIs={cartQuantityIs}
            cartAmountIs={cartAmountIs}
            cartTotalAmountIs={cartTotalAmountIs}
          />
        )
      )}
    </>
  );
};

export default CheckOutComp;
