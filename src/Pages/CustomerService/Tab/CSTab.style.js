import styled from "styled-components";

export const CSTabContainer = styled.div`
  padding: 20px 20px 10px 15px;
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
  width: 90%;
  padding: 20px 10px;
`;

export const ShippingCostHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CountriesSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

export const Country = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  align-items: flex-start;
  min-width: 33%;
  width: 33%;
  padding: 10px 0px;
`;

export const CountryName = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 12px;
  width: 80%;
  max-width: 80%;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 400;
  line-height: 18.78px;
  overflow-x: scroll;
`;

export const CSPolicySection = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 15px;
`;
