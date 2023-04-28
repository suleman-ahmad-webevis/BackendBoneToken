import React, { useState, useEffect } from "react";
import { Img } from "../../GlobalStyles";
import { FaTrashAlt } from "react-icons/fa";
import {
  Button,
  CardAside,
  CheckoutColor,
  CheckOutSection,
  Delete,
  OrderHistoryCard,
  CheckoutFooter,
  CheckoutLink,
  TotalBill,
  OrderHistoryContainer,
  Text,
  Wrapper,
  CardRightPart,
  CardLeftPart,
  OrderHistoryWrapper,
} from "./CheckoutStyle";

const OrderHistory = () => {
  // const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      {/* <Img src={orderHistory} /> */}
      <OrderHistoryWrapper>
        <OrderHistoryContainer>
          <CheckoutColor>
            <CheckOutSection>
              {/* <OrderHistoryCard>
                <CardLeftPart>
                  <Img src={checkoutPro} />
                  <Text>
                    <h3>Veterinary Bed (non-slip 2 color)</h3>
                    <p>Description for Product</p>
                  </Text>
                </CardLeftPart>
                <CardRightPart>
                  <Button>INFO</Button>
                  <CardAside>
                    <Button bg="#F5F8FD">10€</Button>
                    <Delete>
                      <FaTrashAlt color="white" />
                    </Delete>
                  </CardAside>
                </CardRightPart>
              </OrderHistoryCard> */}
            </CheckOutSection>
          </CheckoutColor>
          <CheckoutColor>
            <CheckoutFooter Differ>
              <CheckoutLink>
                <TotalBill>
                  <h3>Shopping Cart Total Expenses: </h3>
                </TotalBill>
              </CheckoutLink>
              <TotalBill>
                <h3>{/* € <span>40.00</span> */}</h3>
              </TotalBill>
            </CheckoutFooter>
          </CheckoutColor>
        </OrderHistoryContainer>
      </OrderHistoryWrapper>
    </Wrapper>
  );
};

export default OrderHistory;
