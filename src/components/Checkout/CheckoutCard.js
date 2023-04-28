import React, { useState } from "react";
import {
  CheckoutCard,
  Text,
  CardAside,
  Button,
  CartItem,
  IconDiv,
  AddButton,
  MinusButton,
  Delete,
} from "./CheckoutStyle";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import {
  incDecQuantity,
  removeFromCart,
  removeFromYourCart,
} from "../../redux/cart/cartSlice";
import ProductInfo from "./ProductInfoModal";
import { Img } from "../../GlobalStyles";
import { useDispatch } from "react-redux";
import Modal from "../modal/modal";

const CheckoutCardCom = ({ cartItem, cartItem: { minRetailPrice } }) => {
  const dispatch = useDispatch();
  const [infoActive, setInfoActive] = useState(false);
  return (
    <>
      <CheckoutCard>
        <CardAside>
          <Img
            src={
              cartItem?.productImages?.length &&
              cartItem?.productImages[0]?.secureUrl
            }
            alt="img"
          />
          <Text>
            <h3>{cartItem?.name}</h3>
            <p>
              {cartItem?.description?.length > 50
                ? `${cartItem?.description.slice(0, 50)}...`
                : cartItem?.description}
            </p>
          </Text>
        </CardAside>
        <CardAside>
          <Button onClick={() => setInfoActive(true)}>INFO</Button>
          <Modal
            title="Product Details"
            active={infoActive}
            hideModal={() => setInfoActive(false)}
          >
            <ProductInfo selectedProDetail={cartItem} />
          </Modal>
          <CartItem>
            <IconDiv
              icon={FaMinus}
              onClick={() => {
                let type = "dec";
                dispatch(incDecQuantity({ minRetailPrice, type }));
              }}
            >
              <MinusButton />
            </IconDiv>
            <h3 readOnly>{cartItem?.quantity}</h3>
            <IconDiv
              icon={FaPlus}
              onClick={() => {
                let type = "inc";
                dispatch(incDecQuantity({ minRetailPrice, type }));
              }}
            >
              <AddButton />
            </IconDiv>
          </CartItem>
          <Button bg="#79999d" color>
            {cartItem?.itemTotalPrice?.toFixed(2)} &euro;
          </Button>
          <Delete
            onClick={() =>
              dispatch(removeFromYourCart(cartItem?.minRetailPrice))
            }
          >
            <FaTrashAlt color="white" />
          </Delete>
        </CardAside>
      </CheckoutCard>
    </>
  );
};

export default CheckoutCardCom;
