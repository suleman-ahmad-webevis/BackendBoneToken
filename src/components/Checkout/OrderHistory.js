import React from "react";
import {
  CheckoutLink,
  TotalBill,
  OrderHistoryContainer,
  CheckoutContainer,
  OrderHistoryWrapper,
  OrderHistoryCard,
  CardLeftPart,
  Text,
  CardRightPart,
  OrderTotal,
  Button,
  Delete,
} from "./CheckoutStyle";
import { Img } from "../../GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders, removeOrderItem } from "../../redux/order/orderSlice";
import { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";

const OrderHistory = () => {
  // const [quantity, setQuantity] = useState(0);
  const { userInfo } = useSelector((state) => state.user);
  const { myOrder, isOrder } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  let totalAmountSum = 0;

  // Use reduce to calculate the sum of all total amounts
  myOrder?.forEach((order) => {
    totalAmountSum += order?.orderItems?.reduce(
      (acc, val) => acc + val?.itemTotalPrice,
      0
    );
  });

  useEffect(() => {
    dispatch(getUserOrders({ userId: userInfo?.user?._id }));
  }, [isOrder]);

  return (
    <OHMain>
      {" "}
      {myOrder?.length ? (
        myOrder?.map((order, idx) => (
          <OrderHistoryContainer key={idx}>
            {order?.orderItems?.length
              ? order?.orderItems?.map((val, idx) => (
                  <OrderHistoryCard key={idx}>
                    <CardLeftPart>
                      <Img
                        src={val?.productImages[0]?.secureUrl}
                        style={{ width: "15%", borderRadius: "20px" }}
                      />
                      <Text>
                        <h3>{val?.name}</h3>
                        <p style={{ marginTop: "10px" }}>
                          Bought on{" "}
                          {new Date(order?.orderMadeAt)
                            .toLocaleString("en-GB", {
                              day: "numeric",
                              month: "numeric",
                              year: "numeric",
                              hour: "numeric",
                              minute: "numeric",
                              timeZoneName: "short",
                            })
                            .slice(0, 21)}
                        </p>
                      </Text>
                    </CardLeftPart>
                    <CardRightPart>
                      <Button>INFO</Button>
                      <div
                        style={{
                          display: "flex",
                          gridGap: "20px",
                          alignItems: "center",
                        }}
                      >
                        <Button bg="#F5F8FD">
                          {" "}
                          {val?.itemTotalPrice.toFixed(2)} €
                        </Button>
                        <Delete>
                          <FaTrashAlt
                            color="white"
                            onClick={() =>
                              dispatch(removeOrderItem({ id: val._id }))
                            }
                          />
                        </Delete>
                      </div>
                    </CardRightPart>
                  </OrderHistoryCard>
                ))
              : null}
          </OrderHistoryContainer>
        ))
      ) : (
        <>
          <CheckoutLink>
            <TotalBill>
              <h3>No Order Made </h3>
            </TotalBill>
          </CheckoutLink>
        </>
      )}
      {myOrder?.length ? (
        <OrderTotal>
          <p>Shopping Cart Total Expenses:</p>
          <div
            style={{
              display: "flex",
              gridGap: "5px",
            }}
          >
            <p style={{ alignSelf: "flex-end" }}>€ </p>
            <p style={{ fontSize: "22px" }}>
              {myOrder.length ? totalAmountSum : 0}
            </p>
          </div>
        </OrderTotal>
      ) : null}
    </OHMain>
  );
};

export default OrderHistory;

export const OHMain = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
`;
