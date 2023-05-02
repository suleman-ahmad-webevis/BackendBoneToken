import styled from "styled-components";
import { FaMinus, FaPlus } from "react-icons/fa";

export const CheckoutForm = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin: auto;
  gap: 2rem;

  @media screen and (max-width: 1320px) {
    flex-direction: column;
    margin: 0;
  }
`;
export const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  padding: 32px 20px;
  width: 100%;
`;
export const OrderHistoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
`;
export const Checkout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  grid-gap: 10px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const CheckOutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  grid-gap: 20px;
`;
export const CheckoutColor = styled.div`
  background: #f5f9fc;
  border-radius: 15px;
  padding: 30px;
  gap: 10px;
  margin-bottom: 2rem;
  width: 100%;
`;
export const CheckoutCard = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  gap: 15px;
  padding: 15px;
  margin-top: 20px;
`;
export const CardAside = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  img {
    width: 90px;
    height: 90px;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  p {
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    color: #98a4af;
  }
`;
export const Button = styled.button`
  padding: 2px 5px;
  height: 39px;
  background-color: ${(props) => (props.bg ? props.bg : "white")};
  color: ${(props) => (props.color ? " #FFFFFF;" : "#434343")};
  border-radius: 8px;
  border: ${(props) => (props.bg ? "none" : "1px solid  #E1E9F0")};
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  width: 75px;
  max-width: 75px;
`;
export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #f5f8fd;
  gap: 10px;
  border-radius: 8px;
  width: 140px;
  padding: 5px 20px;
`;
export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: #e1e9f0;
  border-radius: 8px;
  &:hover {
    background: #3dbb8b;
  }
`;
export const AddButton = styled(FaPlus)`
  color: #a6b5bf;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
export const MinusButton = styled(FaMinus)`
  color: #a6b5bf;
  /* background: #e1e9f0; */
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
export const Delete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  background-color: #737373;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px;
  /* background: #FFFFFF; */
  /* box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05); */
  /* border-radius: 50px; */
  padding: 20px 20px 150px 20px;
  .react-tel-input .form-control {
    width: 100%;
    border: 2px solid rgba(144, 202, 249, 0.5);
    border-radius: 8px;
    outline: none;
    box-shadow: none;
    color: rgb(183, 183, 183);
    font-weight: 700;
  }
  .react-tel-input .selected-flag.open:before {
    background: none;
    outline: none;
    box-shadow: none;
    border: none;
    transition: none;
  }
  .react-tel-input .special-label {
    color: #2196f3;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
`;
export const ShareProduct = styled.div`
  display: flex;
  grid-gap: 10px;
  cursor: pointer;
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
  padding: 7px 0 7px 0;
  span {
    color: #ff0000;
  }
`;
export const CheckoutRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px;
  width: 900px;

  @media (max-width: 1750px) {
    width: 850px;
  }
  @media (max-width: 1520px) {
    width: 750px;
  }
  /* @media (max-width: 1400px) {
    width: 750px;
  } */
  @media (max-width: 1320px) {
    width: 850px;
  }
  @media (max-width: 1220px) {
    width: 90%;
  }
`;
export const CheckoutLeft = styled.div`
  width: 400px;
  @media (max-width: 1650px) {
    width: 300px;
  }
  @media (max-width: 1320px) {
    width: 850px;
  }
`;
export const CheckoutFooter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: ${({ Differ }) =>
    Differ ? "space-around" : "space-between"};
  /* width: 880px; */
  padding: 10px 30px;
  @media (max-width: 1300px) {
    width: 100%;
  }
`;
export const CheckoutItems = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
export const CheckoutLink = styled.ul`
  list-style: none;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;
export const Title = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #000000;
  padding: 10px 0;
`;
export const Amount = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #000000;
  opacity: 0.4;
  padding: 10px 0;
`;
export const TotalBill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  grid-gap: 8px;
  h3 {
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    color: #434343;
  }
  span {
    font-weight: 900;
    font-size: 26px;
    line-height: 25px;
    color: #434343;
  }
`;

export const OrderHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding: 20px 10px;
  @media screen and (max-width: 1020px) {
    width: 100%;
  }
`;

export const OrderHistoryCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  gap: 7.5rem;
  padding: 15px;
  width: 100%;

  @media screen and (max-width: 1020px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const CardLeftPart = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 50%;
  @media screen and (max-width: 1020px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
export const CardRightPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  @media screen and (max-width: 1020px) {
    width: 100%;
  }
`;

export const PayButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  border: 2px solid #e3e9ee;
  border-radius: 8px;
  padding: 10px 10px;
  height: 42px;
  font-size: 16px;
  line-height: 19px;
  color: #c1c1c1;
  cursor: pointer;

  h1 {
    font-size: 16px;
    line-height: 19px;
    color: #8c8c8c;
  }
`;
