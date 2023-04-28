import styled from "styled-components";

export const CSContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  position: relative;
  gap: 3rem;
  padding: 20px;
`;

export const CSContentWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`;

export const CSLine = styled("div")`
  border-bottom: 2px solid #0e626d;
  width: 95%;
  margin: 10px 0px 10px 0px;
`;

export const CSBoxesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  grid-gap: 40px;
  padding-bottom: 20px;
`;

export const CSBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  justify-content: space-between;
  width: 46%;
  @media screen and (max-width: 1110px) {
    width: 100%;
  }
`;

export const CSBox = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 12px;
  h5 {
    color: #0e626d;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const CSBoxContent = styled.div`
  background-color: #bbccce;
  border: 1px solid #90caf9;
  border-radius: 8px;
  padding: 20px;
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "158px")};
  h5 {
    color: #565656;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const CSPolicy = styled("div")`
  display: flex;
  align-items: center;
  padding-top: 20px;
  flex-wrap: wrap;
  grid-gap: 80px;
`;

export const OrderUpdateSection = styled("div")`
  display: flex;
  align-items: flex-end;
  grid-gap: 30px;
`;

export const OrderUpdateInputs = styled("div")`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  width: 50%;
  h5 {
    color: #98a4af;
    font-size: 16px;
  }
`;

export const UpdateButton = styled.div`
  display: flex;
  grid-gap: 30px;
  width: 70%;
`;

export const UpdateBtn = styled.div`
  background: #0e626d;
  border: 1px solid rgba(130, 151, 255, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  font-family: "Inter-Regular";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  width: 228px;
  cursor: pointer;
`;

export const ShippingContainer = styled.div`
  display: flex;
  width: 100%;
  grid-gap: 5px;
  padding-top: 20px;
`;

export const ShippingSec = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  width: 45%;
`;

export const ShippingSecHeading = styled.div`
  display: flex;
  grid-gap: 10px;
  color: #0e626d;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  div:nth-child(1) {
    width: 32%;
  }
  div:nth-child(2) {
    width: 27%;
  }
  div:nth-child(3) {
    width: 27%;
  }
`;

export const ShippingSecContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 10px;
  div:nth-child(1) {
    width: 32%;
    background: #bbccce;
    border: 1px solid #565656;
    border-radius: 8px;
    padding: 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    border: 1px solid #565656;
    color: #565656;
  }
  div:nth-child(2) {
    width: 27%;
    background: #bbccce;
    border: 1px solid #565656;
    border-radius: 8px;
    padding: 16px;
    font-weight: 700;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
    line-height: 19px;
    color: #565656;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  div:nth-child(3) {
    width: 27%;
    background: #bbccce;
    border: 1px solid #565656;
    border-radius: 8px;
    padding: 16px;
    font-weight: 700;
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
    line-height: 19px;
    color: #565656;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
