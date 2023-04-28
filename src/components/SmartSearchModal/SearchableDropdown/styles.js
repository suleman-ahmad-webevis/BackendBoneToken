import styled from "styled-components";

export const Dropdown = styled.div`
  position: relative;
  color: #b7b7b7;
  cursor: pointer;
`;
export const ArrowDownIcon = styled.div`
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  align-items: center;
  position: absolute;
  right: 15px;
  top: 17px;
  z-index: -1;
`;

export const ArrowUpIcon = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  position: absolute;
  right: 15px;
  top: 17px;
`;

export const OptionList = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  background: #ffffff;
  left: 0;
  right: 0;
  z-index: 1;
  margin-top: 4px;
  color: "#b7b7b7";
  height: 135px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f2f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #79999d;
  }
`;

export const DropDownHeader = styled("div")`
  input {
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
    color: #b7b7b7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid rgba(121, 153, 157, 0.15);
    border-radius: 8px;
    padding: 16px;
    outline: none;
    width: 100%;
    height: 45px;
    background: none;
    cursor: pointer;
  }
`;
export const DropDownOption = styled("div")`
  font-weight: 900;
  font-size: 14px;
  color: #b7b7b7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid rgba(121, 153, 157, 0.15);
  border-radius: 8px;
  padding: 16px;
  height: 45px;
`;
