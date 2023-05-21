import React, { useState } from "react";
import {
  CheckoutCard,
  Text,
  Button,
  ItemQuantity,
  MinMaxBtn,
  Delete,
  TotalPrice,
} from "./CheckoutStyle";
import { FaTrashAlt } from "react-icons/fa";
import { incDecQuantity, removeFromYourCart } from "../../redux/cart/cartSlice";
import ProductInfo from "./ProductInfoModal";
import { Img } from "../../GlobalStyles";
import { useDispatch } from "react-redux";
import Modal from "../modal/modal";

const CheckoutCardCom = ({ cartItem, cartItem: { minRetailPrice }, index }) => {
  const dispatch = useDispatch();
  const [infoActive, setInfoActive] = useState(false);
  return (
    <CheckoutCard key={index}>
      <Img
        src={
          cartItem?.productImages?.length &&
          cartItem?.productImages[0]?.secureUrl
        }
        style={{ width: "12%" }}
        alt="img"
      />
      <Text>
        <h1>{cartItem?.name}</h1>
        <p>
          {cartItem?.description?.length > 50
            ? `${cartItem?.description.slice(0, 50)}...`
            : cartItem?.description}
        </p>
      </Text>
      <Button onClick={() => setInfoActive(true)}>INFO</Button>
      <Modal
        title="Product Details"
        active={infoActive}
        hideModal={() => setInfoActive(false)}
      >
        <ProductInfo selectedProDetail={cartItem} />
      </Modal>
      <ItemQuantity>
        <MinMaxBtn
          style={{ background: "#E1E9F0" }}
          onClick={() => {
            let type = "dec";
            dispatch(incDecQuantity({ minRetailPrice, type }));
          }}
        >
          <h1 style={{ color: "#A6B5BF" }}>-</h1>
        </MinMaxBtn>
        <h3 readOnly>{cartItem?.quantity}</h3>
        <MinMaxBtn
          style={{ background: "#3DBB8B" }}
          onClick={() => {
            let type = "inc";
            dispatch(incDecQuantity({ minRetailPrice, type }));
          }}
        >
          <h1 style={{ color: "#FFFFFF" }}>+</h1>
        </MinMaxBtn>
      </ItemQuantity>
      <TotalPrice>{cartItem?.itemTotalPrice?.toFixed(2)} &euro;</TotalPrice>
      <Delete
        onClick={() => dispatch(removeFromYourCart(cartItem?.minRetailPrice))}
      >
        <FaTrashAlt color="white" />
      </Delete>
    </CheckoutCard>
  );
};

export default CheckoutCardCom;
