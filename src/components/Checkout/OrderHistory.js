import React from "react";
import {
  CheckoutLink,
  TotalBill,
  OrderHistoryContainer,
  CheckoutContainer,
  OrderHistoryWrapper,
} from "./CheckoutStyle";

const OrderHistory = () => {
  // const [quantity, setQuantity] = useState(0);
  return (
    <CheckoutContainer>
      {/* <Img src={orderHistory} /> */}
      <OrderHistoryWrapper>
        <OrderHistoryContainer>
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
          <CheckoutLink>
            <TotalBill>
              <h3>No Order Made </h3>
            </TotalBill>
          </CheckoutLink>
          <TotalBill>
            <h3>{/* € <span>40.00</span> */}</h3>
          </TotalBill>
        </OrderHistoryContainer>
      </OrderHistoryWrapper>
    </CheckoutContainer>
  );
};

export default OrderHistory;
