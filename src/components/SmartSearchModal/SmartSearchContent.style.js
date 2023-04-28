import styled from "styled-components";

export const ModalContentMainContainer = styled.div``;

export const ModalContentContainer = styled.div`
  display: flex;
  grid-gap: 20px;
  justify-content: center;
  color: #b7b7b7 !important;
  @media (max-width: 1530px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  grid-gap: 15px;
  margin-top: 14px;
  width: 50%;
  max-width: 50%;
`;

export const ModalField = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
`;

export const ModalDataField = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
  width: 100%;
`;

export const SearchNFTNumber = styled.div`
  position: relative;
  input {
    border: 2px solid rgba(121, 153, 157, 0.15);
    border-radius: 8px;
    height: 45px;
    padding: 0 10px;
    outline: none;
    background: none;
    width: 100%;
    color: #b7b7b7 !important;
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
    ::placeholder {
      font-size: 14px;
      line-height: 17px;
      color: #b7b7b7;
    }
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 10px;
`;

export const ModalIcons = styled.div`
  display: flex;
  grid-gap: 5px;
  font-weight: ${({ Weight }) => (Weight ? "700" : "")};
`;

export const ModalIcon = styled.div`
  background: #ffffff;
  border: 1px solid rgba(144, 202, 249, 0.5);
  border-radius: 8px;
  display: flex;
  grid-gap: 5px;
  align-items: center;
  padding: ${({ Padding }) => (Padding ? "10px 16px" : "10px 20px")};
`;
export const CoatColorField = styled.div`
  display: flex;
  grid-gap: 6px;
  flex-wrap: wrap;
`;

export const FCIField = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
`;

export const SmartSearchBtn = styled.div`
  display: flex;
  margin: 25px auto;
  justify-content: center;
`;

export const SmartSearchButton = styled.button`
  background: #79999d;
  border: 1px solid rgba(236, 239, 255, 0.5);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  justify-content: center;
  gap: 15px;
  width: 336px;
  height: 50px;
  padding: 16px;
`;
