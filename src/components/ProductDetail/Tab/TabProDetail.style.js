import styled from "styled-components";

export const TabProDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  grid-gap: 10px;
`;

export const ProDetailText = styled.div`
  padding: 20px 45px;
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
`;

export const ProDetailImg = styled.div`
  width: 50%;
  margin: 10px auto;
  display: flex;
  justify-content: center;
`;

export const NamePriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 10px;
`;

export const NameDesc = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 3px;
  h5:nth-child(1) {
    font-weight: 700;
    font-size: 20px;
    color: #1b153d;
  }
  h5:nth-child(2) {
    color: #9095a6;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const PriceSec = styled.div`
  display: flex;
  grid-gap: 5px;
  h5 {
    color: #5b41ff;
    font-size: 24px;
    font-weight: 500;
    line-height: 19px;
  }
`;

export const DetailReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
`;

export const DRHeading = styled.div`
  display: flex;
  grid-gap: 15px;
  h5 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* ::before {
      content: "";
      display: block;
      border-top: 0px solid black;
       margin-bottom: 10px; 
    } */
    /* ::after {
      content: "";
      display: block;
      border-top: 1px solid #5b41ff;
      margin-top: 10px;
      width: 50px;
    } */
  }
`;

export const DRData = styled.div`
  p {
    color: #9095a6;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const ProductDetailSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 12px;
`;

export const DetailItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 48%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid #9095a6;
  border-radius: 8px;
  h5 {
    font-size: 12px;
    color: #9095a6;
    font-weight: 500;
    white-space: nowrap;
  }

  @media screen and (max-width: 850px) {
    width: 99%;
  }
`;

export const QuantitySection = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

export const CounterSection = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(144, 149, 166, 0.1);
  border-radius: 8px;
  padding: 3px 0px;
`;

export const Counter = styled.div`
  display: flex;
  grid-gap: 35px;
  align-items: center;

  h5 {
    font-weight: 700;
    font-size: 20px;
    color: #434343;
  }
`;

export const IncDecBtn = styled.button`
  background: ${({ BG }) => BG};
  width: 34px;
  height: 34px;
  border-radius: 8px;
  padding: 10px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  h5 {
    color: ${({ FC }) => FC};
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 18px;
`;
export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  h5:nth-child(1) {
    font-weight: 700;
    font-size: 16px;
    color: #000000;
    line-height: 19px;
  }
  h5:nth-child(2) {
    color: #5b41ff;
    font-size: 24px;
    font-weight: 500;
  }
`;

export const BtnSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(225deg, #43ff6c 0%, #0e626d 100%);
  border-radius: 10px;
  padding: 23px 115px;
  button {
    border: none;
    background: none;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
    white-space: nowrap;
  }
`;

export const ShareProSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

export const ShareIcons = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 12px;
`;
