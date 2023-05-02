import React, { useState, useEffect } from "react";
import { Img } from "../../GlobalStyles";
import {
  Checkout,
  CheckoutColor,
  CheckOutSection,
  Label,
  Form,
  ShareProduct,
  CheckoutWrapper,
  CheckoutRight,
  CheckoutItems,
  CheckoutFooter,
  Title,
  CheckoutLink,
  TotalBill,
  CheckoutLeft,
  PayButton,
  CheckoutForm,
  Amount,
} from "./CheckoutStyle";
import ShareIcon from "../../assets/images/ProductDetail/ShareIcon.png";
import AddressIcon from "../../assets/images/AddressIcon.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AddressFieldIcon, FormField, FormInput } from "../Forms/UserStyles";
import Modal from "../modal/modal";
import PaymentMethod from "./PaymentMethod";
import { useSelector } from "react-redux";
import Heading from "../Heading/Heading";
import CheckoutCardCom from "./CheckoutCard";
import { useDispatch } from "react-redux";
import { getCartTotalAmount } from "../../redux/cart/cartSlice";

const CheckOut = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const { cartItems, cartQuantityIs, cartAmountIs, cartTotalAmountIs } =
    useSelector((state) => state.cart);

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    dispatch(getCartTotalAmount());
    // eslint-disable-next-line
  }, [cartQuantityIs]);

  return (
    <CheckoutWrapper>
      <Checkout>
        <CheckoutForm>
          <CheckoutRight>
            <CheckoutColor>
              <CheckOutSection>
                {cartItems.length ? (
                  cartItems?.map((cartItem, index) => (
                    <CheckoutCardCom cartItem={cartItem} index={index} />
                  ))
                ) : (
                  <Heading>No products in cart</Heading>
                )}
              </CheckOutSection>
            </CheckoutColor>
            <CheckoutColor>
              <CheckoutFooter>
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
                    Shopping Cart total: €{" "}
                    <span>{cartAmountIs?.toFixed(2)}</span>
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
              </CheckoutFooter>
            </CheckoutColor>
          </CheckoutRight>
          <CheckoutLeft>
            <CheckoutColor>
              <Form>
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
                    <ShareProduct>
                      <Img src={ShareIcon} alt="share Icon" />
                      Any Special Requirements
                    </ShareProduct>
                  </Label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="..."
                    style={{
                      background: "#ffffff",
                      padding: "16px 20px",
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
              </Form>
            </CheckoutColor>
          </CheckoutLeft>
        </CheckoutForm>
      </Checkout>
    </CheckoutWrapper>
  );
};

export default CheckOut;
