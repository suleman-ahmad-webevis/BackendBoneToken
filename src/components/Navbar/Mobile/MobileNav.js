import React, { useState } from "react";
import styled from "styled-components";
import { Img } from "../../../GlobalStyles";
import DogDataLogo from "../../../assets/images/Navbar/Tab/DogDataLogo.png";
import Hamburger from "../../../assets/images/Navbar/Tab/Hamburger.png";
import {  useNavigate } from "react-router-dom";
import { MenuBar, MenuItems, Menu, CloseIcon } from "../Tablet/TabletNav";
import Close from "../../../assets/images/Navbar/Tab/Close.png";
import { MenuData } from "../Tablet/MenuData";

const Mobile = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <MobNavContainer>
      <MobNavRight>
        <Img src={DogDataLogo} onClick={() => navigate("/")} />
      </MobNavRight>
      <MobNavLeft>
        <RegLoginSection>
          <h5 onClick={() => navigate("/register")}>Register</h5>
          <h5 onClick={() => navigate("/login")}>Sign In</h5>
        </RegLoginSection>
        <MenuSection>
          <Img src={Hamburger} alt="" onClick={() => setShowMenu(true)} />
        </MenuSection>
      </MobNavLeft>
      {showMenu && (
        <MenuBar>
          <CloseIcon>
            <Img src={Close} alt="close" onClick={() => setShowMenu(false)} />
          </CloseIcon>
          <MenuItems>
            {MenuData.map((value, index) => (
              <Menu key={index}>
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
    </MobNavContainer>
  );
};

export default Mobile;

export const MobNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #0e626d;
  position: relative;
`;

export const MobNavRight = styled.div``;

export const MobNavLeft = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 40px;
`;

export const RegLoginSection = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 50px;
  h5 {
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.03em;
    color: #ffffff;
  }
  @media screen and (max-width: 600px) {
    h5 {
      font-size: 14px;
    }
    grid-gap: 20px;
  }
`;

export const MenuSection = styled.div`
  display: flex;
  align-items: center;
`;
