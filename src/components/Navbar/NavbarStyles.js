import styled from "styled-components";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0e626d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 20px;
  width: 100%;
`;

export const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const NavbarRight = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const SearchFields = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const NavbarButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #000000;
  border: none;
  border-radius: 8px;
  height: 40px;
  padding: 8px 15px;
  cursor: pointer;
  font-weight: 900;
  font-size: 14px;
  line-height: 24px;
  color: #a6ccea;
  white-space: nowrap;
  @media (max-width: 1390px) {
    padding: 8px 10px;
    font-size: 12px;
  }
  @media (max-width: 1290px) {
    padding: 8px 8px;
    font-size: 10px;
    height: 35px;
  }
`;

export const SearchFieldWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  width: 200px;
  height: 40px;
  background: #000000;
  border: 1px solid #d1ebff;
  border-radius: 8px;
  input {
    background: none;
    border: none;
    outline: none;
    font-weight: 900;
    font-size: 14px;
    line-height: 24px;
    color: #a6ccea;
    width: 100%;
    font-family: Inter-Regular;
    ::placeholder {
      font-weight: 900;
      font-size: 14px;
      line-height: 24px;
      color: #a6ccea;
    }
  }
  @media screen and (max-width: 1350px) {
    width: 200px;
  }
  @media screen and (max-width: 1290px) {
    width: 190px;
    height: 38px;
  }
  @media screen and (max-width: 1200px) {
    width: 150px;
  }
  @media screen and (max-width: 1160px) {
    width: 130px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: #000;
  border-radius: 8px;
  height: 40px;
  padding: 8px 15px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: #a6ccea;
  @media (max-width: 1650px) {
    font-size: 12px;
  }
`;

export const Token = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 25px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: #19517d;
  @media (max-width: 1650px) {
    font-size: 12px;
  }
`;

export const NavbarRightBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const NavbarIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 10px;

  .new-logo {
    width: 28px;
    height: 28px;
    border-radius: 50px;
    background: rgb(0, 0, 0);
    padding: 3px;
  }
`;

export const Items = styled.div`
  position: relative;
  margin: 0 5px;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e7e7e7;
  border: 0.7px solid #000;
  border-radius: 70px;
  position: absolute;
  top: -10px;
  right: -8px;
  width: 16.8px;
  height: 16.1px;
  p {
    font-weight: bold;
    font-size: 8.4px;
    line-height: 10px;
    color: #00183c;
  }
`;

export const NavIcon = styled.div`
  cursor: pointer;
`;

export const ToggleOff = styled(BsToggle2Off)`
  color: #19517d;
  font-size: 35px;
  display: ${({ isToggle }) => (isToggle ? "none" : "block")};
`;

export const ToggleOn = styled(BsToggle2On)`
  color: #19517d;
  font-size: 35px;
  display: ${({ isToggle }) => (isToggle ? "none" : "block")};
`;

export const BrandLogo = styled.div``;

export const LangSelect = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
`;
