import styled from "styled-components";

export const CTabContainer = styled.div`
  width: 70%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-left: 30px;
  @media screen and (max-width: 950px) {
    width: 90%;
    padding-left: 15px;
  }
  @media screen and (max-width: 820px) {
    width: 98%;
    padding-left: 15px;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
    margin: auto;
  }
  @media screen and (max-width: 600px) {
    width: 70%;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
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
  }
`;
