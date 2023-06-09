import styled from "styled-components";

export const TokenTabNav = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;

export const TTabContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  grid-gap: 20px;
  width: 80%;
  @media screen and (max-width: 1110px) {
    width: 85%;
    padding: 20px 25px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    padding: 20px 40px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 20px 35px;
  }
  @media screen and (max-width: 400px) {
    padding: 20px 5px;
  }
`;

export const TTabHeading = styled.h5`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
`;

export const TTabCards = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
`;

export const TTabCard = styled.div`
  background: ${({ bgColor }) => bgColor};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  padding: 20px 20px;
`;

export const TTCardHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ headBgColor }) => headBgColor};
  border-radius: 8px;
  padding: 10px;
`;

export const ImgText = styled.div`
  display: flex;
  grid-gap: 10px;
  align-items: center;
  h5 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }
`;

export const TTData = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
`;

export const DataCol = styled.div`
  width: 50%;
  padding: 8px 0px;
  h5 {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #1e535a;
  }
`;

export const ChooseSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  padding-top: ${({ paddingTop }) => paddingTop};
  h5 {
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: #0e626d;
    padding-left: 15px;
  }
`;

export const ChooseImg = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 20px;
`;

export const Buy = styled.div`
  background: linear-gradient(179.91deg, #beead2 0.08%, #9dfdb2 112.77%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  grid-gap: 7px;
  padding: 7px 10px;
  width: 141px;
  h5 {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
  }
  input {
    width: 100%;
    height: 50px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 10px;
  }
  button {
    background: #95cc82;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    border: none;
    padding: 10px;
    h5 {
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
    }
  }
`;

export const SwapSection = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  padding: 20px;
  background: #ffffff;
  border: 1px solid #e6fafd;
  box-shadow: 0px 2px 4px #c4e9ee;
  border-radius: 12px;
`;

export const SwapTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 10px;
  h5 {
    font-weight: 900;
    font-size: 18px;
    line-height: 95%;
    color: #0e626d;
    text-align: center;
  }
  img {
    width: 200px;
  }
`;

export const SwapWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 10px;
`;

export const FromTo = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;

export const From = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
  h5 {
    color: #637592;
    font-weight: 800;
    font-size: 12px;
    line-height: 95%;
  }
`;

export const Price = styled.h5`
  color: #0e626d;
  font-weight: 800;
  font-size: 20px;
  line-height: 95%;
`;

export const BalanceWrapper = styled.div`
  display: flex;
  grid-gap: 5px;
  h5 {
    font-weight: 800;
    font-size: 12px;
    line-height: 95%;
  }
`;

export const SwapBtn = styled.button`
  background: #93d27c;
  border-radius: 12px;
  height: 34px;
  width: 40%;
  align-self: center;
  border: none;
  h5 {
    font-weight: 400;
    font-size: 15px;
    line-height: 95%;
    color: #ffffff;
  }
`;
