import styled from "styled-components";

export const TNPage = styled.div`
  padding: 20px;
`;

export const TNSidebar = styled.div`
  flex: 1;
`;

export const TNCardsSec = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 2rem;
  padding-top: 10px;
  margin-bottom: 1rem;
`;

export const Section = styled.div`
  flex: 1;
`;

export const Token = styled.div`
  display: flex;
  flex-direction: column;
  background: #345054;
  border-radius: 15px;
`;

export const TokenHeading = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bg }) => (bg ? bg : "#0E626D")};
  box-shadow: 0px 7px 11px #074d56;
  border-radius: 15px;
  grid-gap: 7px;
  padding: 10px 0px;
`;

export const TokenItems = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  padding: 20px 0;
  width: 100%;
  margin: auto;
`;
export const TokenText = styled.p`
  font-weight: ${({ FW }) => (FW ? FW : "300")};
  font-size: ${({ FZ }) => (FZ ? FZ : "20px")};
  line-height: ${({ LH }) => (LH ? LH : "105.02%")};
  color: ${({ color }) => (color ? color : "#7184a6")};
  @media screen and (max-width: 1440px) {
    font-size: ${({ RespFZ }) => (RespFZ ? RespFZ : "16px")};
  }
`;
export const TokenData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: auto;
`;

export const BuyToken = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  grid-gap: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;
export const BuyTokenText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 80%;
  margin: 0 auto;

  h2 {
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.035em;
    margin-top: 10px;
  }
  hr {
    background: #d9d9d9;
    border-radius: 7px;
  }
`;
export const CheckToken = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: 1rem;
  padding: 0 10px;
  /* img {
    width: 118px;
    height: 102px;
    border: 2px solid #252536;
    border-radius: 10px;
    cursor: pointer;
    @media screen and (max-width: 1440px) {
      width: 96px;
      height: 80px;
    }
  } */
`;

export const Deck = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const ExchangeWrapper = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  padding: 0 30px;
  @media screen and (max-width: 1350px) {
    flex-direction: column;
  }
`;

export const ExchangeSec = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  hr {
    border: 1px solid #d8d8d8;
    box-shadow: 0px 0px 30px #6898f4;
    margin-bottom: 10px;
    &:nth-child(3) {
      display: none;
    }
  }
  &:is(:active) {
    hr {
      border: 1px solid #50a7f8;
      border-radius: 10px;
    }
  }
`;
export const ExchangeText = styled.button`
  font-weight: ${({ FW }) => (FW ? FW : "700")};
  font-size: ${({ FZ }) => (FZ ? FZ : "22px")};
  line-height: ${({ Lh }) => (Lh ? Lh : "95%")};
  color: ${({ color }) => (color ? color : "#20388c")};
  text-align: ${({ align }) => (align ? "center" : "")};
  margin: ${({ M }) => (M ? "12px 0" : "")};
  background: none;
  border: none;
`;
export const Coinswap = styled.div`
  background-color: white;
  display: flex;
  flex-direction: ${({ D }) => (D ? "row" : "column")};
  border-right: ${({ left }) => (left ? "1px solid #2a3e4b" : "none")};
  justify-content: space-around;
  height: 100%;
  padding: 10px;
  gap: 1rem;
  opacity: ${({ opacity }) => (opacity ? "0.3" : "1")};
  @media screen and (max-width: 1350px) {
    border-right: none;
  }
`;
export const Coin = styled.div`
  display: flex;
  justify-content: ${({ align }) => (align ? "flex-end" : "flex-start")};
  padding: 10px 0;
`;
export const Cointext = styled.div`
  img {
    width: ${({ width }) => (width ? width : "91px")};
    height: ${({ height }) => (height ? height : "93px")};
    background-position: center;
    background-size: contain;
    @media screen and (max-width: 1440px) {
      /* width: 70px;
      height: 71px; */
    }
  }
  button {
    background: linear-gradient(180deg, #fab263 0%, #5f3a12 77.43%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    border: none;
    color: white;
    padding: 15px 30px;
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  gap: 3rem;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    color: #20388c;
    font-size: 20px;
    font-weight: 700px;
  }
`;
export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 15px;
    font-weight: 500;
    color: #2f3641;
  }
  span {
    font-size: ${({ FontSize }) => FontSize ?? "0px"};
    color: ${({ Color }) => Color ?? "#fff"};
    font-weight: ${({ FontWeight }) => FontWeight ?? "0"};
  }
`;

export const Button = styled.button`
  background: linear-gradient(180deg, #fab263 0%, #5f3a12 77.43%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  color: white;
  padding: 15px 30px;
  cursor: pointer;
  width: fit-content;
  margin: 0 auto;
`;

export const SwapImages = styled.div`
  display: flex;
  grid-gap: 105px;
  padding-left: 100px;
`;
