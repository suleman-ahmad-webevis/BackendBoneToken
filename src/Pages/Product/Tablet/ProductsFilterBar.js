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
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTheProducts, reset } from "../../../redux/product/productSlice";
import useBreakpoint from "../../../hooks/useBreakPoint";

const ProductsFilterBar = () => {
  console.log("I render");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //StatesForSearching
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(setSearchParams);
  //StoreData
  const { favouritesTotalQuantity } = useSelector((state) => state.favourites);
  const { cartQuantityIs } = useSelector((state) => state.cart);

  const category = searchParams.get("category");

  const searchHandler = () => {
    let obj = {
      search,
      category,
    };
    dispatch(getTheProducts(obj));
    dispatch(reset());
  };

  const [openFB, setOpenFB] = useState(false);
  const { isSmallMobile, isMobile } = useBreakpoint();

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
                }}
              >
                x
              </p>
              <FilterItems>
                <h5>All</h5>
                <h5>New </h5>
                <h5>Featured</h5>
                <h5>Popular</h5>
                <h5>Recently Viewed</h5>
                <h5>Rated</h5>
                <h5>Price</h5>
              </FilterItems>
            </Filters>
          )}
        </FilterDropDown>
        <SearchBar>
          <input
            type="text"
            placeholder="Search Product"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
        {categoriesData.map((value) => (
          <CategoriesNav to={value.path}>{value.title}</CategoriesNav>
        ))}
      </PTabCategories>
    </>
  );
};

export default ProductsFilterBar;
