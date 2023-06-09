import React from "react";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";
import MethodOne from "../../assets/images/PayMethod/MethodOne.png";
import MethodTwo from "../../assets/images/PayMethod/MethodTwo.png";
import MethodThree from "../../assets/images/PayMethod/MethodThree.png";
import MethodFour from "../../assets/images/PayMethod/MethodFour.png";
import MethodFive from "../../assets/images/PayMethod/MethodFive.png";
import { useDispatch, useSelector } from "react-redux";
import { createCheckoutSession } from "../../redux/payment/paymentSlice";

const PaymentMethod = ({ cartItems }) => {
  const { userInfo } = useSelector((state) => state.user);
  const user = userInfo ? userInfo.user : null;
  const dispatch = useDispatch();
  return (
    <>
      <PaymentMethodContainer>
        <Title>Choose Payment Method</Title>
        <Divider />
        <PaymentMethodContent>
          <DefaultMethod>
            <Img
              src={MethodOne}
              alt="MethodOne"
              onClick={() =>
                dispatch(
                  createCheckoutSession({ cartItems, userId: user?._id })
                )
              }
            />
            <Img src={MethodTwo} alt="MethodTwo" />
          </DefaultMethod>
          <OtherMethods>
            <Img src={MethodThree} alt="MethodThree" />
            <Img src={MethodFour} alt="MethodFour" />
            <Img src={MethodFive} alt="MethodFive" />
          </OtherMethods>
        </PaymentMethodContent>
      </PaymentMethodContainer>
    </>
  );
};

const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.035em;
  color: #000000;
  text-align: center;
`;

const Divider = styled.div`
  width: 428px;
  height: 2px;
  background: #d9d9d9;
  border-radius: 7px;
  align-self: center;
  margin-bottom: 10px;
`;

const PaymentMethodContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-self: center;
`;

const DefaultMethod = styled.div`
  display: flex;
  gap: 20px;
`;

const OtherMethods = styled.div`
  display: flex;
  gap: 20px;
`;

export default PaymentMethod;
