import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import TabNav from "../components/Navbar/Tablet/TabletNav";
import MobileNav from "../components/Navbar/Mobile/MobileNav";
import LandingPageSidebar from "../components/Sidebar/LandingPageSidebar";
import useBreakpoint from "../hooks/useBreakPoint";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../redux/cart/cartSlice";
import { getTotalsFavourites } from "../redux/favourites/favouritesSlice";

const ContainerWrapper = styled("div")`
  position: relative;
  .container {
    width: 100%;
    height: 100%;
  }

  .wrapper-main {
    position: relative;
    /* padding-left: 343px; */
    padding-left: ${(props) => props.pageNotFoundedPad};
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    align-items: center;
  }

  .left-sidebar {
    position: fixed;
    top: 91px; /* the height of the header (60px) + its bottom margin (20px) */
    bottom: 0;
    left: 0;
    z-index: 99;
    /* width: 343px; */
    width: ${(props) => props.pageNotFoundedWid};
    overflow: auto;
    padding: 0 0 20px;
    background: ${(props) => props.purpleLeftSidebar};
    overflow-x: hidden;

    &::-webkit-scrollbar {
      display: block;
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.35);
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #314552;
      border-right: none;
      border-left: none;
      border-radius: 10px;
    }
  }

  .main-content {
    background: ${(props) => props.purpleBackground};
    width: 100%;
    position: relative;
    flex-grow: 1;
    height: ${(props) => props.pageNotFoundedHei};
    padding: 0;
    overflow-y: ${(props) => props.removeBodyScroll};
    overflow-x: hidden;
    z-index: 9;
    top: ${(props) => props.pageNotFoundedTop};

    &::-webkit-scrollbar {
      display: block;
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.35);
      -webkit-border-radius: 10px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #314552;
      border-right: none;
      border-left: none;
      border-radius: 10px;
    }
  }

  @media screen and (max-width: 768px) {
    .left-sidebar {
      display: none;
    }
    .wrapper-main {
      padding: 0;
    }
  }
`;

const Dashboard = () => {
  const { isDesktop, isTablet, isSmallMobile, isMobile } = useBreakpoint();
  const [toggle] = useState(false);
  const { pathname } = useLocation();
  const isNotFoundPage = pathname === "/404";
  const screenSize = window?.screen?.availWidth;

  //Cart
  const dispatch = useDispatch();
  const { cartQuantityIs } = useSelector((state) => state.cart);
  const { favouritesTotalQuantity } = useSelector((state) => state.favourites);

  useEffect(() => {
    dispatch(getCartTotal());
    dispatch(getTotalsFavourites());
    // eslint-disable-next-line
  }, [cartQuantityIs, favouritesTotalQuantity]);

  return (
    <>
      <ContainerWrapper
        pageNotFoundedPad={
          !isNotFoundPage || screenSize < 768 ? "343px" : "0px"
        }
        pageNotFoundedTop={!isNotFoundPage ? "91px" : "0px"}
        pageNotFoundedHei={!isNotFoundPage ? "calc(100vh - 70px)" : "100vh"}
        pageNotFoundedWid={!isNotFoundPage ? "352px" : "0px"}
        removeBodyScroll={
          pathname === "/" || pathname === "/shop" ? "hidden" : "auto"
        }
      >
        <div className="container">
          {!isNotFoundPage && (
            <header>
              {isDesktop && (
                <Navbar
                  cartQuantityIs={cartQuantityIs}
                  favouritesTotalQuantity={favouritesTotalQuantity}
                />
              )}
              {isTablet && (
                <TabNav
                  cartQuantityIs={cartQuantityIs}
                  favouritesTotalQuantity={favouritesTotalQuantity}
                />
              )}
              {(isMobile || isSmallMobile) && (
                <MobileNav
                  cartQuantityIs={cartQuantityIs}
                  favouritesTotalQuantity={favouritesTotalQuantity}
                />
              )}
            </header>
          )}
          <div className="wrapper-main">
            {!isNotFoundPage && (
              <div className="left-sidebar">
                <LandingPageSidebar toggle={toggle} />
              </div>
            )}
            <div className="main-content" id="detail">
              <Outlet />
              <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </>
  );
};

export default Dashboard;
