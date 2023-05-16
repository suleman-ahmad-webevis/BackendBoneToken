import React from "react";
import {
  CheckoutColor,
  CheckOutSection,
  CheckoutFooter,
  CheckoutLink,
  TotalBill,
  OrderHistoryContainer,
  CheckoutWrapper,
  OrderHistoryWrapper,
} from "./CheckoutStyle";

const OrderHistory = () => {
  // const [quantity, setQuantity] = useState(0);
  return (
    <CheckoutWrapper>
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
    </CheckoutWrapper>
  );
};

export default OrderHistory;
