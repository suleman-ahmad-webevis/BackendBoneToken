import React, { useState, useRef } from "react";
import {
  Address,
  AmountIs,
  AmountSec,
  CInfoHeader,
  CInfoWrapper,
  CardData,
  CardHeader,
  CardInfo,
  CardWrapper,
  CheckoutData,
  CourierInfo,
  CryptoWrapper,
  LocationImg,
  POBtn,
  PaymentHeader,
  PaymentWrapper,
  Price,
  SInfoHeader,
  SInfoWrapper,
  SNameAddress,
  SummarySec,
  TitleIs,
} from "../../CheckoutStyle";
import { Img } from "../../../../GlobalStyles";
import Copy from "../../../../assets/images/Copy.png";
import Location from "../../../../assets/images/Location.png";
import RightArrow from "../../../../assets/images/RightArrow.png";
import MasterCardLogo from "../../../../assets/images/PayMethod/MasterCardLogo.png";
import Tick from "../../../../assets/images/PayMethod/Tick.png";
import SmallTick from "../../../../assets/images/PayMethod/SmallTick.png";
import { CardOpt, CardOptBox, SelectCard } from "../CheckoutTab.style";

const COutData = ({ cartAmountIs, cartTotalAmountIs }) => {
  const [PM, setPM] = useState(null);
  const nameRef = useRef(null);
  const copyName = () => {
    const name = nameRef.current.textContent;
    navigator.clipboard
      .writeText(name)
      .then(() => {
        console.log("The ", name);
      })
      .catch((error) => {
        console.log("The error", error);
      });
  };
  return (
    <CheckoutData>
      <h2>Checkout</h2>
      {/* ShippingSection */}
      <SInfoWrapper>
        <SInfoHeader>
          <p>Shipping Information</p>
          <Img src={Copy} alt="Copy" onClick={copyName} />
        </SInfoHeader>
        <SNameAddress>
          <h5 ref={nameRef}>Name</h5>
          <Address>
            <LocationImg>
              <Img src={Location} alt="location" />
            </LocationImg>
            <p>608 Rodney Street, Harvester MO Missouri Missouri</p>
          </Address>
        </SNameAddress>
      </SInfoWrapper>
      {/* CourierSection */}
      <CInfoWrapper>
        <p>Courier Service</p>
        <CourierInfo>
          <CInfoHeader>
            <h3>Service Name</h3>
            <Img src={RightArrow} alt="RightArrow" />
          </CInfoHeader>
          <p>Delivered on Next Possible Day</p>
        </CourierInfo>
      </CInfoWrapper>
      {/* SelectPaymentMethod */}
      <PaymentWrapper>
        <PaymentHeader>
          <span>Select Payment Method</span>
          <span>Add new card</span>
        </PaymentHeader>
        {PM === null && (
          <SelectCard>
            <CardOpt
              BG="linear-gradient(108.03deg, #FFB199 0%, #FF84BB 69.75%, #FDB2E8 108.34%);"
              onClick={() => {
                setPM("Card");
              }}
            >
              <CardOptBox Color="#FFFFFF">
                <div style={{ alignSelf: "flex-end" }}>
                  <Img src={SmallTick} alt="SmallTick" />
                </div>
                <div>
                  <h5>5135 2159 3169 1231</h5>
                  <p>Gustavo Septimus</p>
                </div>
              </CardOptBox>
            </CardOpt>
            <CardOpt
              onClick={() => {
                setPM("Crypto");
              }}
              BG="linear-gradient(107.95deg, #FBFDB2 0%, #76FFA5 100%);"
            >
              <CardOptBox Color="#7C7C7C">
                <div style={{ alignSelf: "flex-start" }}>
                  <h1>Cryptocurrency</h1>
                </div>
                <div>
                  <h5>Wallet address</h5>
                  <p>000000000000000000000</p>
                </div>
              </CardOptBox>
            </CardOpt>
          </SelectCard>
        )}
        {PM === "Card" && (
          <CardWrapper>
            <CardData>
              <CardHeader>
                <Img src={MasterCardLogo} alt="MasterCardLogo" />
                <Img src={Tick} alt="Tick" />
              </CardHeader>
              <CardInfo>
                <h5>0000 0000 0000 0000</h5>
                <p>Cardholder name</p>
              </CardInfo>
            </CardData>
          </CardWrapper>
        )}
        {PM === "Crypto" && (
          <CryptoWrapper>
            <CardData>
              <CardHeader>
                <h2>Cryptocurrency</h2>
              </CardHeader>
              <CardInfo Color="rgba(124, 124, 124, 1)">
                <h5>Wallet address</h5>
                <p>000000000000000000000</p>
              </CardInfo>
            </CardData>
          </CryptoWrapper>
        )}
      </PaymentWrapper>
      {/* SummarySection */}
      <SummarySec>
        <h5>Summary</h5>
        <AmountSec>
          <AmountIs>
            <TitleIs>Subtotal</TitleIs>
            <Price>&euro; {cartAmountIs?.toFixed(2)}</Price>
          </AmountIs>
          <AmountIs>
            <TitleIs>Delivery</TitleIs>
            <Price>&euro; 18</Price>
          </AmountIs>
          <AmountIs>
            <TitleIs>VAT (18%)</TitleIs>
            <Price>&euro; 10.44</Price>
          </AmountIs>
          <hr />
          <AmountIs>
            <TitleIs>Shopping Cart Total:</TitleIs>
            <Price>&euro; {cartTotalAmountIs?.toFixed(2)}</Price>
          </AmountIs>
        </AmountSec>
      </SummarySec>
      {/* PlaceOrderBtn */}
      <POBtn>
        <button>PLACE ORDER</button>
      </POBtn>
    </CheckoutData>
  );
};

export default COutData;
