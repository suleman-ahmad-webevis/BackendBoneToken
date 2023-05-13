import React, { useState } from "react";
import {
  PTabHeader,
  PTabTitle,
  SearchBar,
  MobileComIcon,
  FilterDropDown,
  PTabCategories,
  CategoriesNav,
  LangSelect,
  Filters,
  FilterItems,
} from "./Tablet.style";
import Search from "../../../assets/images/LandingPage/Search.png";
import { Img } from "../../../GlobalStyles";
import { Counter, Items } from "../../../components/Navbar/NavbarStyles";
import { categoriesData } from "./CategoriesData";
//ImagesImport
import mobCart from "../../../assets/images/LandingPage/MobCart.png";
import mobFav from "../../../assets/images/LandingPage/MobFav.png";
import mobChat from "../../../assets/images/LandingPage/MobChat.png";
import Flags from "../../../assets/images/Navbar/Flags.png";
import FlagsDropDown from "../../../assets/images/Navbar/FlagsDropDown.png";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTheProducts, reset } from "../../../redux/product/productSlice";
import useBreakpoint from "../../../hooks/useBreakPoint";
import { proNavData } from "./ProNavData";

const ProductsFilterBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //StatesForSearching
  const [searchPro, setSearchPro] = useState("");

  const [searchParams] = useSearchParams();

  //StoreData
  const { favouritesTotalQuantity } = useSelector((state) => state.favourites);
  const { cartQuantityIs } = useSelector((state) => state.cart);

  const category = searchParams.get("category");

  const searchHandler = () => {
    let obj = {
      search: searchPro,
      category,
    };
    dispatch(getTheProducts(obj));
    dispatch(reset());
  };

  const [openFB, setOpenFB] = useState(false);
  const { isSmallMobile, isMobile } = useBreakpoint();

  //WhichRouteActive
  const [activeCat, setActiveCat] = useState(false);
  const [activeIdx, setActiveIndex] = useState(0);
  const activeRoute = (path, index) => {
    switch (path) {
      case path:
        setActiveCat(true);
        setActiveIndex(index);
        navigate(path);
        break;
      default:
        setActiveCat(false);
        setActiveIndex(0);
    }
  };

  const prodNavHandler = (index) => {
    if (index === 0) {
      navigate("/shop", {
        state: {
          index: index,
        },
      });
    }
    if (index === 1) {
      navigate("/shop?new=true", {
        state: {
          index: index,
        },
      });
    }
    if (index === 2) {
      navigate("/shop?featured=true", {
        state: {
          index: index,
        },
      });
    }
    if (index === 4) {
      navigate("/shop/recently-viewed", {
        state: {
          index: index,
        },
      });
    }
    if (index === 5) {
      navigate("/shop?rated=true", {
        state: {
          index: index,
        },
      });
    }
  };

  return (
    <>
      {(isMobile || isSmallMobile) && (
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
          <LangSelect>
            <Img src={Flags} alt="Flags" />
            <Img src={FlagsDropDown} alt="FlagsDropDown" />
          </LangSelect>
        </MobileComIcon>
      )}
      <PTabHeader>
        <FilterDropDown onClick={() => setOpenFB(!openFB)}>
          {!openFB ? (
            <h5>Filter</h5>
          ) : (
            <Filters>
              <p
                onClick={() => setOpenFB(!openFB)}
                style={{
                  transform: "translate(90%,10%)",
                  cursor: "pointer",
                  color: "#fff",
                }}
              >
                x
              </p>
              <FilterItems>
                {proNavData.map(({ title }, index) => (
                  <h5 key={index} onClick={() => prodNavHandler(index)}>
                    {title}
                  </h5>
                ))}
              </FilterItems>
            </Filters>
          )}
        </FilterDropDown>
        <SearchBar>
          <input
            type="text"
            placeholder="Search Product"
            value={searchPro}
            onChange={(e) => setSearchPro(e.target.value)}
          />
          <Img
            src={Search}
            alt="Search"
            style={{ position: "absolute", top: "14px", left: "15px" }}
            onClick={searchHandler}
          />
        </SearchBar>
      </PTabHeader>
      <PTabTitle>Find your suitable product now.</PTabTitle>
      <PTabCategories>
        {categoriesData.map((value, index) => (
          <CategoriesNav
            key={index}
            onClick={() => activeRoute(value.path, index)}
            activeIdx={activeIdx}
            activeCat={activeCat}
            keyIs={index}
          >
            {value.title}
          </CategoriesNav>
        ))}
      </PTabCategories>
    </>
  );
};

export default ProductsFilterBar;
