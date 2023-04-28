import React, { useState, useEffect } from "react";
import Search from "../../../assets/images/LandingPage/Search.png";
import { Img } from "../../../GlobalStyles";
import {
  PTabContainer,
  PTabHeader,
  PTabTitle,
  SearchBar,
  PTabProductList,
  MobileComIcon,
  FilterDropDown,
  PTabCategories,
  CategoriesNav,
  LangSelect,
} from "./Tablet.style";
import TabProductCard from "./TabProductCard";
import { useLocation, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getTheProducts,
  reset,
  setAllProducts,
} from "../../../redux/product/productSlice";
import Loader from "../../../components/Loader/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import { Counter, Items } from "../../../components/Navbar/NavbarStyles";
import useBreakpoint from "../../../hooks/useBreakPoint";
import Modal from "../../../components/modal/modal";
import { categoriesData } from "./CategoriesData";
//ImagesImport
import mobCart from "../../../assets/images/LandingPage/MobCart.png";
import mobFav from "../../../assets/images/LandingPage/MobFav.png";
import mobChat from "../../../assets/images/LandingPage/MobChat.png";
import Flags from "../../../assets/images/Navbar/Flags.png";
import FlagsDropDown from "../../../assets/images/Navbar/FlagsDropDown.png";

const Tablet = () => {
  const { isSmallMobile, isMobile } = useBreakpoint();

  //StatesForSearching
  const [search, setSearch] = useState("");

  //StoreData
  const { favouritesTotalQuantity } = useSelector((state) => state.favourites);
  const { cartQuantityIs } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const featured = searchParams.get("featured");
  const newParam = searchParams.get("new");
  const rated = searchParams.get("rated");
  const { products, total, allProducts, isLoading } = useSelector(
    (state) => state.product
  );
  const [pageInc, setPageInc] = useState(1);
  const [limit] = useState(10);
  useEffect(() => {
    dispatch(reset());
    dispatch(
      getTheProducts({
        featured,
        category,
        subCategory: location?.state?.subCategory,
        newParam,
        rated,
        page: pageInc,
        limit,
      })
    );
    // eslint-disable-next-line
  }, [location]);

  useEffect(() => {
    dispatch(setAllProducts());
    // eslint-disable-next-line
  }, [products]);

  const fetchMore = () => {
    setPageInc((pageInc) => pageInc + 1);
    if (allProducts.length < total) {
      dispatch(
        getTheProducts({
          newParam,
          featured,
          category,
          page: pageInc + 1,
          limit,
        })
      );
    }
  };

  const searchHandler = () => {
    let obj = {
      search,
      category,
    };
    dispatch(getTheProducts(obj));
    dispatch(reset());
  };

  const [openFB, setOpenFB] = useState(true);

  return (
    <PTabContainer>
      {(isSmallMobile || isMobile) && (
        <>
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
        </>
      )}
      <PTabHeader>
        <FilterDropDown onClick={() => setOpenFB(!openFB)}>
          {openFB ? (
            <h5>Filter</h5>
          ) : (
            <Modal
              title="Payment Methods"
              active={openFB}
              hideModal={() => setOpenFB(!openFB)}
            >
              <h5>Filter</h5>
            </Modal>
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
      {isLoading && <Loader />}
      {allProducts?.length ? (
        <PTabProductList id="ProductListContainer">
          {allProducts.map((product) => (
            <TabProductCard product={product} />
          ))}
          <InfiniteScroll
            dataLength={allProducts?.length}
            next={fetchMore}
            hasMore={allProducts?.length < total ? true : false}
            scrollableTarget="ProductListContainer"
          ></InfiniteScroll>
        </PTabProductList>
      ) : (
        <h2>No Products</h2>
      )}
    </PTabContainer>
  );
};
export default Tablet;
