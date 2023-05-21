import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  grid-gap: 5px;
  padding: 20px;
`;

export const CheckoutSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px;
  width: ${({ Width }) => Width};
  border-radius: 15px;
`;

export const CheckedOutItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px;
  border-radius: 15px;
  background: #f5f9fc;
  padding-bottom: 20px;
`;

export const CheckoutPrices = styled.div`
  background: #f5f9fc;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 10px 30px;
  width: 100%;
  border-radius: 15px;
`;

export const CheckoutCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 10px;
  width: 97%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  background: #fff;
  padding: 15px;
  margin-top: 20px;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    @media screen and (max-width: 1400px) {
      font-size: 12px;
    }
  }
  p {
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    color: #98a4af;
    @media screen and (max-width: 1400px) {
      font-size: 10px;
    }
  }
`;
export const Button = styled.button`
  padding: 8px;
  background-color: ${(props) => (props.bg ? props.bg : "white")};
  color: ${(props) => (props.color ? " #FFFFFF;" : "#434343")};
  border-radius: 8px;
  border: ${(props) => (props.bg ? "none" : "1px solid  #E1E9F0")};
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  @media screen and (max-width: 1400px) {
    font-size: 12px;
  }
`;
export const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #f5f8fd;
  gap: 10px;
  border-radius: 8px;
  padding: 7px 20px;
`;

export const MinMaxBtn = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 3px 10px;
  background: rgb(225, 233, 240);
  border-radius: 8px;
  cursor: pointer;
  border: none;
  h1 {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
  @media screen and (max-width: 1400px) {
    h1 {
      font-weight: 700;
      font-size: 12px;
      line-height: 19px;
    }
  }
`;

export const TotalPrice = styled.div`
  background: #0e626d;
  border-radius: 8px;
  color: #fff;
  padding: 12px;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 700;
  line-height: 10px;
  @media screen and (max-width: 1400px) {
    font-size: 12px;
  }
`;
export const Delete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #737373;
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
`;
export const CheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px;
  padding: 20px 20px 120px 20px;
  background: #f5f9fc;
  width: 100%;
  border-radius: 15px;
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
export const AnySpec = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
  cursor: pointer;
  h1 {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #000;
  }
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

export const CheckoutLink = styled.ul`
  list-style: none;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;

export const CheckoutItems = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
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
    @media screen and (max-width: 1400px) {
      font-size: 20px;
    }
  }
`;

export const CardLeftPart = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 50%;
`;
export const CardRightPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
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
    @media screen and (max-width: 1400px) {
      font-size: 14px;
    }
  }
`;

//OrderHistory
export const OrderHistoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
`;

export const OrderHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding: 20px 10px;
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
`;
