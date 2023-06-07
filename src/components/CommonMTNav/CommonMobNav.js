import React from "react";
import Flags from "../../assets/images/Navbar/Flags.png";
import FlagsDropDown from "../../assets/images/RegisterLogin/FlagsDropDown.png";
import { MobileComIcon } from "../../Pages/Product/Tablet/Tablet.style";
import { Counter, Items } from "../Navbar/NavbarStyles";
//ImagesImport
import mobCart from "../../assets/images/LandingPage/MobCart.png";
import mobFav from "../../assets/images/LandingPage/MobFav.png";
import mobChat from "../../assets/images/Navbar/Tab/ChatIcon.png";
import Settings from "../../assets/images/Navbar/Tab/Settings.png";

import { useNavigate } from "react-router-dom";
import { Img } from "../../GlobalStyles";
import { useSelector } from "react-redux";
import { FlagSection } from "./CommonTabNav";
import styled from "styled-components";

const CommonMobNav = () => {
  //StoreData
  const { favouritesTotalQuantity } = useSelector((state) => state.favourites);
  const { cartQuantityIs } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  return (
    <CMNWrapper>
      <FlagSection>
        <Img src={Flags} alt="Flags" />
        <Img src={FlagsDropDown} alt="DropDown" />
      </FlagSection>
      <MobileComIcon>
        <Items>
          <Img
            src={mobFav}
            alt="mobFav"
            onClick={() => navigate("/favourites")}
          />
          <Counter>
            <p>{favouritesTotalQuantity ? favouritesTotalQuantity : 0}</p>
          </Counter>
        </Items>
        <Items>
          <Img
            src={mobCart}
            alt="mobCart"
            onClick={() => navigate("/checkout")}
          />
          <Counter>
            <p>{cartQuantityIs ? cartQuantityIs : 0}</p>
          </Counter>
        </Items>
        <Img src={mobChat} alt="mobChat" />
        <Img src={Settings} alt="settings" />
      </MobileComIcon>
    </CMNWrapper>
  );
};

export default CommonMobNav;

export const CMNWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
