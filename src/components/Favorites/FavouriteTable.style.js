import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  grid-gap: 40px;
  padding: 0px 20px;
  width: 100%;
  h5 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;
export const CheckoutCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  padding: 0px 20px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    padding: 0;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const CheckoutItems = styled.div``;

export const CheckoutItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #e7eaf3;
  border-radius: 8px;
  position: relative;
  padding: 0 50px 0 10px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    grid-gap: 20px;
    align-items: center;
    padding: 10px;
  }
`;

export const CheckoutProImg = styled.div`
  display: flex;
  align-items: center;
  border-right: 2px solid #e7eaf3;
  border-radius: 8px;
  height: 120px;
  img {
    width: 100px;
  }
`;

export const CheckoutDesc = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  grid-gap: 20px;
  @media screen and (max-width: 800px) {
    text-align: left;
    grid-gap: 10px;
  }
`;

export const CheckoutPrice = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  @media screen and (max-width: 800px) {
    flex-direction: row;
  }
`;

export const Price = styled.div`
  display: flex;
  /* hello */
  grid-gap: 5px;
`;
