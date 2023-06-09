import styled from "styled-components";

export const CTabContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  grid-gap: 30px;
  padding: 20px 0px 20px 30px;
  @media screen and (max-width: 1110px) {
    width: 95%;
    padding: 20px 0px 20px 25px;
  }
  @media screen and (max-width: 400px) {
    padding: 20px 5px 20px 15px;
  }
`;

export const HeadingSec = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  h5 {
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
    @media screen and (max-width: 600px) {
      font-size: 30px;
    }
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #585858;
  }
`;

export const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-gap: 30px;
`;

export const CartCard = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

export const TopSec = styled.div`
  display: flex;
`;

export const BottomSec = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 15px;
  h5 {
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    text-align: right;
    letter-spacing: 0.015em;
    color: #281f17;
  }
  p {
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.015em;
    color: #585858;
  }
`;

export const CartImg = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 90%;
`;

export const DDContainer = styled.div`
  position: absolute;
  bottom: 5px;
  left: 20px;
  background: #ffffff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.24);
  border-radius: 8px;
  padding: 5px 15px;
`;

export const DDHead = styled.div`
  display: flex;
  grid-gap: 10px;
  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #281f17;
  }
`;

export const ArrowDD = styled.div`
  display: flex;
  align-items: center;
`;

export const DDItems = styled.ul``;

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10%;
`;

export const CartCounter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 130px;
  background: #ffffff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  h5 {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #281f17;
    cursor: pointer;
  }
`;

export const CheckoutBtn = styled.div`
  background: rgba(14, 98, 109, 1);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const SubTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  span {
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    color: #ffffff;
  }
  h5 {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.02em;
    color: #ffffff;
    @media screen and (max-width: 400px) {
      font-size: 20px;
    }
  }
`;

export const CheckOut = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  padding: 20px 40px;
  box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  border: none;
  @media screen and (max-width: 400px) {
    padding: 15px;
  }
`;

export const SelectCard = styled.div`
  display: flex;
  grid-gap: 10px;
`;

export const CardOpt = styled.div`
  background: ${({ BG }) => BG};
  border-radius: 8.05466px;
  flex-grow: 1;
  cursor: pointer;
  width: 50%;
`;

export const CardOptBox = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 95.05px;
  h1 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.025em;
    color: #011b1f;
  }
  h5 {
    font-weight: 500;
    font-size: 9.46479px;
    line-height: 11px;
    color: ${({ Color }) => Color};
  }
  p {
    font-weight: 500;
    font-size: 6.98071px;
    line-height: 11px;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    color: ${({ Color }) => Color};
  }
`;

export const CryptoOpt = styled.div`
  height: 95.05px;
  background: linear-gradient(107.95deg, #fbfdb2 0%, #76ffa5 100%);
  border-radius: 8.87324px;
  flex-grow: 1;
  cursor: pointer;
  width: 50%;
`;
