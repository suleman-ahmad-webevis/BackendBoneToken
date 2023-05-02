import React, { useState } from "react";
import styled from "styled-components";
import { Img } from "../../../GlobalStyles";
import { useSelector } from "react-redux";
import DogDataLogo from "../../../assets/images/Navbar/Tab/DogDataLogo.png";
import CartIcon from "../../../assets/images/Navbar/Tab/CartIcon.png";
import FavIcon from "../../../assets/images/Navbar/Tab/FavIcon.png";
import ChatIcon from "../../../assets/images/Navbar/Tab/ChatIcon.png";
import Hamburger from "../../../assets/images/Navbar/Tab/Hamburger.png";
import { LangSelect } from "../NavbarStyles";
import Flags from "../../../assets/images/Navbar/Flags.png";
import FlagsDropDown from "../../../assets/images/Navbar/FlagsDropDown.png";
import Close from "../../../assets/images/Navbar/Tab/Close.png";
import { MenuData } from "./MenuData";
import { useNavigate } from "react-router-dom";

const Tablet = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  //StoreData
  const { favouritesTotalQuantity } = useSelector((state) => state.favourites);
  const { cartQuantityIs } = useSelector((state) => state.cart);

  return (
    <TabNavContainer>
      <TabNavRight>
        <Img src={DogDataLogo} onClick={() => navigate("/")} />
      </TabNavRight>
      <TabNavLeft>
        <RegLoginSection>
          <h5 onClick={() => navigate("/register")}>Register</h5>
          <h5 onClick={() => navigate("/login")}>Sign In</h5>
        </RegLoginSection>
        <IconsSection>
          <Item>
            <Img src={FavIcon} alt="" />
            <Counter>
              <p>{favouritesTotalQuantity ? favouritesTotalQuantity : 0}</p>
            </Counter>
          </Item>
          <Item>
            <Img src={CartIcon} alt="" />
            <Counter>
              <p>{cartQuantityIs ? cartQuantityIs : 0}</p>
            </Counter>
          </Item>
          <Item>
            <Img src={ChatIcon} alt="" />
          </Item>
          <LangSelect>
            <Img src={Flags} alt="Flags" />
            <Img src={FlagsDropDown} alt="FlagsDropDown" />
          </LangSelect>
        </IconsSection>
        <MenuSection>
          <Img
            style={{ cursor: "pointer" }}
            src={Hamburger}
            alt="Hamburger"
            onClick={() => setShowMenu(true)}
          />
        </MenuSection>
      </TabNavLeft>
      {showMenu && (
        <MenuBar>
          <CloseIcon>
            <Img src={Close} alt="Close" onClick={() => setShowMenu(false)} />
          </CloseIcon>
          <MenuItems>
            {MenuData.map((value) => (
              <Menu>
                <Img src={value.img} alt="Shop" />
                <h5
                  onClick={() => {
                    setShowMenu(false);
                    navigate(value.link);
                  }}
                  style={{ textDecoration: "none" }}
                >
                  {value.text}
                </h5>
              </Menu>
            ))}
          </MenuItems>
        </MenuBar>
      )}
    </TabNavContainer>
  );
};

export default Tablet;

export const TabNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #0e626d;
  position: relative;
`;

export const TabNavRight = styled.div``;

export const TabNavLeft = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 40px;
`;

export const RegLoginSection = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 40px;
  h5 {
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.03em;
    color: #ffffff;
  }
`;

export const IconsSection = styled.div`
  display: flex;
  grid-gap: 15px;
  align-items: center;
`;

export const MenuSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Item = styled.div`
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

//TabAndMob MenuBar
export const MenuBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  background: #0e626d;
  height: 100vh;
  transition: all 1s ease-in-out;
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 20px;
  grid-gap: 25px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  cursor: pointer;
  h5 {
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
  }
`;

export const CloseIcon = styled.div`
  transform: translate(200px, 30px);
  cursor: pointer;
`;
