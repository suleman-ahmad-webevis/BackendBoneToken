import styled from "styled-components";

export const Dropdown=styled.div`
position: relative;
color: #333;
cursor: pointer;
`;
export const ArrowDownIcon = styled.div`
display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
align-items: center;
position: absolute;
right: 15px;
top: 20px;
z-index: -1;
`;

export const ArrowUpIcon = styled.div`
display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
align-items: center;
position: absolute;
right: 15px;
top: 20px;
`;
  
export const OptionList=styled.div`
    display: ${({isOpen}) => isOpen ? "block" : "none"};
    position: absolute;
  background: #ffffff;
  left: 0;
  right: 0;
  margin-top: 4px;
  color: rgba(144, 202, 249, 0.5);
  height: 135px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(144, 202, 249, 0.5);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(144, 202, 249, 1);
  }
`;

export const DropDownHeader = styled("div")`
input{
  font-weight: 900;
  font-size: 14px;
  color: rgba(144, 202, 249, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(144, 202, 249, 0.5);
  border-radius: 8px;
  padding: 16px;
  outline: none;
  width: 100%;
  background: none;
  cursor: pointer;
}
`;
export const DropDownOption = styled("div")`
  font-weight: 900;
  font-size: 14px;
  color: rgba(144, 202, 249, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(144, 202, 249, 0.5);
  border-radius: 8px;
  padding: 16px;
`;