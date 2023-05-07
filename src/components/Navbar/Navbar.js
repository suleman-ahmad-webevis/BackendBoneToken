import React, { useState, useEffect } from "react";
import { Img } from "../../GlobalStyles";
import youtube from "../../assets/images/Navbar/youtube.png";
import facebook from "../../assets/images/Navbar/facebook.png";
import twitter from "../../assets/images/Navbar/twitter.png";
import instagram from "../../assets/images/Navbar/instagram.png";
import dogProfile from "../../assets/images/Navbar/dogProfile.png";
import heart from "../../assets/images/Navbar/heart.png";
import cart from "../../assets/images/Navbar/cart.png";
import dogData from "../../assets/images/Navbar/dogData.png";
import iC from "../../assets/images/Navbar/iC.png";
import pawDollar from "../../assets/images/Navbar/pawDollar.png";
import connectWallet from "../../assets/images/Navbar/connectWallet.png";
import SmartSearch from "../../assets/images/Navbar/smartSearch.png";
import Flags from "../../assets/images/Navbar/Flags.png";
import FlagsDropDown from "../../assets/images/Navbar/FlagsDropDown.png";
import searchIcon from "../../assets/images/Navbar/search.png";
import SmartSearchContent from "../SmartSearchModal/SmartSearchContent";
import {
  NavbarContainer,
  NavbarLeft,
  NavbarRight,
  SearchFields,
  NavbarButton,
  SearchFieldWithIcon,
  ProfileContainer,
  NavbarIcons,
  Items,
  Counter,
  NavbarRightBlock,
  BrandLogo,
  LangSelect,
} from "./NavbarStyles";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTotalsFavourites } from "../../redux/favourites/favouritesSlice";
// import { debounce } from "lodash";
import { getTheProducts, reset } from "../../redux/product/productSlice";
import { metaMaskConnection } from "../../redux/walletConn/walletConnSlice";
import { getCartTotal } from "../../redux/cart/cartSlice";
import SSModal from "../modal/SSModal/SSModal";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const url = useLocation()?.pathname?.slice(20);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log("The setSearchParams", setSearchParams);
  //StatesForSearching
  const [search, setSearch] = useState("");
  const category = searchParams.get("category");
  //StoreData
  const { favouritesTotalQuantity } = useSelector((state) => state.favourites);
  const { cartItems, cartQuantityIs } = useSelector((state) => state.cart);
  //ForDynamicNavbar
  const [active, setActive] = useState(false);
  const [simpleNav, setSimpleNav] = useState(false);
  // const [isToggle, setIsToggle] = useState(false);
  useEffect(() => {
    if (locations.includes(location?.pathname)) {
      setSimpleNav(true);
    } else {
      setSimpleNav(false);
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  const locations = [
    "/",
    "/shop",
    "/shop/category",
    "/shop/recently-viewed",
    `/shop/product-detail/${url}`,
    "/checkout",
    "/favourites",
    "/customerDelivery",
  ];

  useEffect(() => {
    dispatch(getTotalsFavourites());
    dispatch(getCartTotal());
    // eslint-disable-next-line
  }, [cartItems]);

  const searchHandler = () => {
    let obj = {
      search,
      category,
    };
    dispatch(getTheProducts(obj));
    dispatch(reset());
  };

  return (
    <>
      <NavbarContainer>
        <NavbarLeft>
          <BrandLogo
            onClick={() => {
              navigate("/");
            }}
          >
            <Img src={dogData} alt="dogData" />
          </BrandLogo>
          {simpleNav && (
            <SearchFields>
              <NavbarButton
                onClick={() => setActive(true)}
                style={{ border: "1px solid #D1EBFF" }}
              >
                Smart Search
                <Img src={SmartSearch} alt="SmartSearch" />
              </NavbarButton>
              <SearchFieldWithIcon>
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Img src={searchIcon} alt="icon" onClick={searchHandler} />
              </SearchFieldWithIcon>
            </SearchFields>
          )}
        </NavbarLeft>
        <NavbarRight>
          <NavbarRightBlock>
            <NavbarIcons>
              <Items>
                <Img
                  src={heart}
                  alt="heart"
                  onClick={() => navigate("/favourites")}
                />
                <Counter>
                  <p>{favouritesTotalQuantity ? favouritesTotalQuantity : 0}</p>
                </Counter>
              </Items>
              <Items>
                <Img
                  src={cart}
                  alt="cart"
                  onClick={() => navigate("/checkout")}
                />
                <Counter>
                  <p>{cartQuantityIs ? cartQuantityIs : 0}</p>
                </Counter>
              </Items>
              <a
                href="https://www.youtube.com/@streetdogbonedrop4651"
                target="_blank"
                rel="noreferrer"
              >
                <Img src={youtube} alt="youtube" />
              </a>
              <Img src={twitter} alt="twitter" />
              <a
                href="https://www.facebook.com/DogsData"
                target="_blank"
                rel="noreferrer"
              >
                <Img src={facebook} alt="facebook" />
              </a>
              <Img src={instagram} alt="instagram" />
              <Img src={dogProfile} alt="dogProfile" />
              <LangSelect>
                <Img src={Flags} alt="Flags" />
                <Img src={FlagsDropDown} alt="FlagsDropDown" />
              </LangSelect>
            </NavbarIcons>
          </NavbarRightBlock>
          <NavbarRightBlock>
            <NavbarButton onClick={() => navigate("/register")}>
              Register
            </NavbarButton>
            <NavbarButton onClick={() => navigate("/login")}>
              Sign in
            </NavbarButton>
            <NavbarButton>
              <Img src={pawDollar} />
              <h3>0</h3>
            </NavbarButton>
            <NavbarButton>
              <Img src={iC} />
              <h3>$0</h3>
            </NavbarButton>
            <ProfileContainer>
              <Img
                src={connectWallet}
                alt="connectWallet"
                onClick={() => dispatch(metaMaskConnection())}
              />
              <span onClick={() => dispatch(metaMaskConnection())}>
                Connect
              </span>
            </ProfileContainer>
          </NavbarRightBlock>
        </NavbarRight>
      </NavbarContainer>
      <SSModal active={active} hideModal={() => setActive(false)}>
        <SmartSearchContent setActive={setActive} />
      </SSModal>
    </>
  );
};

export default Navbar;
