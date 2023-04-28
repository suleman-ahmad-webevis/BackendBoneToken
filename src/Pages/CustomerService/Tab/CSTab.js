import React from "react";
import styled from "styled-components";
import { csFirstBox, csSecondBox } from "./CSData";
import { Img } from "../../../GlobalStyles";
import UpdateMe from "../../../assets/images/CustomerService/UpdateMe.png";
import Chat from "../../../assets/images/CustomerService/Chat.png";

const CSTab = () => {
  return (
    <CSTabContainer>
      <CSHeading>
        <h5>Customer Service</h5>
      </CSHeading>
      {csFirstBox.map((value) => (
        <CSCard>
          <h5>{value.title}</h5>
          {value.text}
        </CSCard>
      ))}
      {csSecondBox.map((value) => (
        <CSCard>
          <h5>{value.title}</h5>
          {value.text}
        </CSCard>
      ))}
      <OrderUpdateSection>
        <h5>Order Update Request</h5>
        <OInputSection>
          <p>Email *</p>
          <input placeholder="Email" />
        </OInputSection>
        <OInputSection>
          <p>Order Number *</p>
          <input placeholder="************" />
        </OInputSection>
        <UpdateSection>
          <Img src={UpdateMe} alt="UpdateMe" />
          <Img src={Chat} alt="Chat" />
        </UpdateSection>
      </OrderUpdateSection>
      <ShippingCostSection>
        <ShippingCostHeading>
          <h5>Shipping costs</h5>
          <h5>up to 5kg</h5>
          <h5>up to 30kg</h5>
        </ShippingCostHeading>
        {/* <CountriesSection>
        </CountriesSection> */}
      </ShippingCostSection>
    </CSTabContainer>
  );
};

export default CSTab;

export const CSTabContainer = styled.div`
  padding: 20px 20px 10px 10px;
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
`;

export const CSHeading = styled.div`
  h5 {
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
  }
`;

export const CSCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  border-radius: 10px;
  width: 90%;
  grid-gap: 15px;
  padding: 20px 10px;
  h5 {
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
  }
  p {
    font-size: 14px;
    line-height: 19px;
    font-weight: 400;
  }
`;

export const OrderUpdateSection = styled.div`
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  border-radius: 10px;
  width: 90%;
  grid-gap: 15px;
  padding: 20px 10px;
  h5 {
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
  }
`;

export const OInputSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  p {
    font-weight: 400;
    font-size: 12px;
  }
  input {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 20px 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 18.78px;
    width: 100%;
  }
`;

export const UpdateSection = styled.div`
  align-self: center;
  display: flex;
  grid-gap: 15px;
  align-items: center;
`;

export const ShippingCostSection = styled.div`
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  border-radius: 10px;
  width: 80%; //TemporaryWidth
`;

export const ShippingCostHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CountriesSection = styled.div`
  display: flex;
  grid-gap: 10px;
  width: 100%;
`;
