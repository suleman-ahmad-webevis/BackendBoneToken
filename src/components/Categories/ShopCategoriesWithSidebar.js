import React, { useState } from "react";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";
import c1 from "../../assets/images/Categories/C1.png";
import c2 from "../../assets/images/Categories/C2.png";
import c3 from "../../assets/images/Categories/C3.png";
import c4 from "../../assets/images/Categories/C4.png";
import c5 from "../../assets/images/Categories/C5.png";
import c6 from "../../assets/images/Categories/C6.png";
import c7 from "../../assets/images/Categories/C7.png";
import c8 from "../../assets/images/Categories/C8.png";
import c9 from "../../assets/images/Categories/C9.png";
import c10 from "../../assets/images/Categories/C10.png";
import c11 from "../../assets/images/Categories/C11.png";
import c12 from "../../assets/images/Categories/C12.png";
import c13 from "../../assets/images/Categories/C13.png";
import c14 from "../../assets/images/Categories/C14.png";
import c15 from "../../assets/images/Categories/C15.png";
import c16 from "../../assets/images/Categories/C16.png";
import c17 from "../../assets/images/Categories/C17.png";
import c18 from "../../assets/images/Categories/C18.png";
import c19 from "../../assets/images/Categories/C19.png";
import c20 from "../../assets/images/Categories/C20.png";
import c21 from "../../assets/images/Categories/C21.png";
import c22 from "../../assets/images/Categories/C22.png";
import Cosmetics from "../../assets/images/Categories/Cosmetics.png";
import Drayer from "../../assets/images/Categories/Drayer.png";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { reset } from "../../redux/product/productSlice";
import CategorySelector from "./CategorySelector";
import { animateScroll as scroll } from "react-scroll";
import DynamicSidebar from "../Sidebar/DynamicSidebar";
import H1 from "../../assets/images/Categories/H1.png";
import H2 from "../../assets/images/Categories/H2.png";
import H3 from "../../assets/images/Categories/H3.png";
import H4 from "../../assets/images/Categories/H4.png";
import H5 from "../../assets/images/Categories/H5.png";
import H6 from "../../assets/images/Categories/H6.png";
import H7 from "../../assets/images/Categories/H7.png";
import H8 from "../../assets/images/Categories/H8.png";
import House from "../../assets/images/Categories/house.png";
import H9 from "../../assets/images/Categories/H9.png";
import toy from "../../assets/images/Categories/toy.png";
import H10 from "../../assets/images/Categories/H10.png";
import H11 from "../../assets/images/Categories/H11.png";
import H12 from "../../assets/images/Categories/H12.png";
import H13 from "../../assets/images/Categories/H13.png";
import H14 from "../../assets/images/Categories/H14.png";
import H15 from "../../assets/images/Categories/H15.png";
import H16 from "../../assets/images/Categories/H16.png";
import H17 from "../../assets/images/Categories/H17.png";
import H18 from "../../assets/images/Categories/H18.png";
import H19 from "../../assets/images/Categories/H19.png";
import H20 from "../../assets/images/Categories/H20.png";
import cosmetic from "../../assets/images/Categories/cosmetic.png";
import { SidebarToggler } from "../../Pages/Product/Products";
import { FaTimes, FaBars } from "react-icons/fa";
import SidebarStatic from "../Sidebar/SidebarStatic";

const ShopCategoriesWithSidebar = ({
  pageTop,
  categoriesMarginTop,
  showSidebar,
  setShowSidebar,
  iconTop,
  extraGap,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [toggle, setToggle] = useState(false);

  const handleScroll = () => {
    scroll.scrollToTop();
  };

  const pathChecker = (path) => {
    if (path == "/shop" || path == "/shop/category") {
      return true;
    }
  };

  return (
    <>
      <SidebarToggler
        top={iconTop}
        extraGap={extraGap}
        left="0"
        onClick={() => {
          setToggle(!toggle);
          // setShowSidebar(!showSidebar);
        }}
      >
        <div className="hamburger">{toggle ? <FaTimes /> : <FaBars />}</div>
        {toggle && (
          <CategoriesContainer>
            <SidebarStatic
              width="320px"
              position="relative"
              top="-30px"
              left="-2px"
              respTop="-30px"
              respLeft="-2px"
            />
          </CategoriesContainer>
        )}
      </SidebarToggler>
      {!toggle && (
        <CategoriesSidebar toggle={toggle}>
          <CategoriesContainer>
            {!showSidebar ? (
              <CategoriesMainContainer
                categoriesMarginTop={categoriesMarginTop}
              >
                <CombineCategories>
                  <CategoryRight>
                    <HoverWrapper>
                      <Img src={c1} alt="Category-1" className="img1" />
                      {
                        <HoverButton
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop/category?name=vetBed");
                            // setSearchParams({ category: "vetBed" });
                            // dispatch(getTheProducts({ category: "vetBed", page, limit }));
                          }}
                        >
                          <img src={H1} alt="vetBed" />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryRight>
                  <CategoryLeft>
                    <HoverWrapper>
                      <Img src={c2} alt="Category-2" className="img1" />
                      {
                        <HoverButton
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop?category=crateCushions");
                          }}
                        >
                          <img src={H2} alt="crateCushions" />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryLeft>
                </CombineCategories>
                <CombineCategories>
                  <CategoryRight>
                    <HoverWrapper>
                      <Img src={c3} alt="Category-3" className="img1" />
                      {
                        <HoverButton
                          left
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop?category=metalCages");
                          }}
                        >
                          <img src={H3} alt="metalCages" />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryRight>
                  <CategoryLeft>
                    <HoverWrapper>
                      <Img src={c4} alt="Category-4" className="img1" />
                      {
                        <HoverButton
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop?category=softCrates");
                          }}
                        >
                          <img src={H4} alt="softCrates" />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryLeft>
                </CombineCategories>
                <CombineCategories>
                  <CategoryRight>
                    <HoverWrapper>
                      <Img src={c5} alt="Category-5" className="img1" />
                      {
                        <HoverButton
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop?category=iataBox");
                          }}
                        >
                          <img src={H5} alt="iataBox" />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryRight>
                  <CategoryLeft>
                    <HoverWrapper>
                      <Img src={c6} alt="Category-6" className="img1" />
                      {
                        <HoverButton
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop?category=carBox");
                          }}
                        >
                          <img src={H6} alt="carBox" />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryLeft>
                </CombineCategories>
                <CombineCategories>
                  <CategoryRight>
                    <HoverWrapper>
                      <Img src={c7} alt="Category-7" className="img1" />
                      {
                        <HoverButton
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop?category=beds");
                          }}
                        >
                          <img src={H7} alt="beds" />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryRight>
                  <CategoryLeft>
                    <HoverWrapper>
                      <Img src={c8} alt="Category-8" className="img1" />
                      {
                        <HoverButton
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop?category=puppyPens");
                          }}
                        >
                          <img src={H8} alt="puppyPens" />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryLeft>
                </CombineCategories>
                <CombineCategories>
                  <CategoryRight>
                    <HoverWrapper>
                      <Img src={c9} alt="Category-9" className="img1" />
                      {
                        <HoverButton
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop?category=houses");
                          }}
                        >
                          <img src={House} alt="houses" />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryRight>
                  <CategoryLeft>
                    <HoverWrapper>
                      <Img src={c10} alt="Category-10" className="img1" />
                      {
                        <HoverButton
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop/category?name=snacks");
                          }}
                        >
                          <img alt="snacks" src={H9} />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryLeft>
                </CombineCategories>
                <CombineCategories>
                  <CategoryRight>
                    <HoverWrapper>
                      <Img src={c11} alt="Category-11" className="img1" />
                      {
                        <HoverButton
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop/category?name=toys");
                          }}
                        >
                          <img alt="toys" src={toy} />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryRight>
                  <div>
                    <HoverWrapper>
                      <Img src={Cosmetics} alt="Category-11" className="img1" />
                      {
                        <HoverButton
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop/category?name=cosmetics");
                          }}
                        >
                          <img alt="cosmetics" src={cosmetic} />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </div>
                </CombineCategories>
                <CombineCategories>
                  <CategoryRight>
                    <HoverWrapper>
                      <Img src={Drayer} alt="Category-11" className="img1" />
                      {
                        <HoverButton
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop?category=dryer");
                          }}
                        >
                          <img alt="dryer" src={H10} />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryRight>
                  <CategoryRight>
                    <HoverWrapper>
                      <Img src={c12} alt="Category-12" className="img1" />
                      {
                        <HoverButton
                          left
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop/category?name=groomingTable");
                          }}
                        >
                          <img src={H11} alt="groomingTables" />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryRight>
                </CombineCategories>
                <CombineCategories>
                  <CategoryLeft>
                    <HoverWrapper>
                      <Img src={c13} alt="Category-13" className="img1" />
                      {
                        <HoverButton
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop?category=vehicleRamps");
                          }}
                        >
                          <img src={H12} alt="vehicleRamps" />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryLeft>
                  <CategoryRight>
                    <HoverWrapper>
                      <Img src={c14} alt="Category-14" className="img1" />
                      {
                        <HoverButton
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop?category=runningMachines");
                          }}
                        >
                          <img src={H13} alt="runningMachines" />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryRight>
                </CombineCategories>
                <CombineCategories>
                  <CategoryLeft>
                    <HoverWrapper>
                      <Img src={c15} alt="Category-15" className="img1" />
                      {
                        <HoverButton
                          left
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop?category=strollers");
                          }}
                        >
                          <img src={H15} alt="strollers" />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryLeft>
                  <CategoryRight>
                    <HoverWrapper>
                      <Img src={c16} alt="Category-16" className="img1" />
                      {
                        <HoverButton
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop?category=feedingBowls");
                          }}
                        >
                          <img src={H14} alt="feedingBowls" />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryRight>
                </CombineCategories>
                <CombineCategories>
                  <CategoryLeft>
                    <HoverWrapper>
                      <Img src={c18} alt="Category-18" className="img1" />
                      {
                        <HoverButton
                          left
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop?category=dogShowTrolley");
                          }}
                        >
                          <img src={H17} alt="dogShowTrolley" />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryLeft>
                  <CategoryRight>
                    <HoverWrapper>
                      <Img src={c17} alt="Category-17" className="img1" />
                      {
                        <HoverButton
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop?category=baths");
                          }}
                        >
                          <img src={H16} alt="baths" />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryRight>
                </CombineCategories>
                <CombineCategories>
                  <CategoryLeft>
                    <HoverWrapper>
                      <Img src={c19} alt="Category-18" className="img1" />
                      {
                        <HoverButton
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop?category=dogShowTent");
                          }}
                        >
                          <img src={H18} alt="dogShowTent" />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryLeft>
                  <CategoryRight>
                    <HoverWrapper>
                      <Img src={c21} alt="Category-21" className="img1" />
                      {
                        <HoverButton
                          onClick={() => {
                            dispatch(reset());
                            handleScroll();
                            navigate("/shop?category=whelpingBoxes");
                          }}
                        >
                          <img src={H19} alt="whelpingBoxes" />
                        </HoverButton>
                      }
                    </HoverWrapper>
                  </CategoryRight>
                </CombineCategories>
                <HoverWrapper>
                  <Img src={c22} alt="Category-22" className="img1" />
                  {
                    <HoverButton
                      onClick={() => {
                        dispatch(reset());
                        handleScroll();
                        navigate("/shop?category=agility");
                      }}
                    >
                      <img src={H20} alt="agility" />
                    </HoverButton>
                  }
                </HoverWrapper>
              </CategoriesMainContainer>
            ) : (
              <DynamicSidebar
                showSidebar={showSidebar}
                width="320px"
                position="relative"
                top={pageTop}
                left="0px"
                respTop="0px"
                respLeft="0px"
              />
            )}
          </CategoriesContainer>
        </CategoriesSidebar>
      )}
    </>
  );
};

const CategoriesSidebar = styled.div`
  @media screen and (max-width: 760px) {
    display: ${({ toggle }) => (toggle ? "block" : "none")};
    width: 350px;
    position: absolute;
    top: -50px;
    left: 0;
    z-index: 1;
    background: ${(props) => props.theme.body};
  }
`;
const SelectCategories = styled.div`
  position: absolute;
  left: 10px;
  top: 35px;
  width: 325px;
  z-index: 999;
`;
const HoverButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  width: 121px;
  height: 81px;
  img {
    width: 121px;
    height: 81px;
  }
`;
const CombinedHoverButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  cursor: pointer;
  display: none;
  z-index: 10;
  width: 121px;
  height: 81px;
  img {
    width: 121px;
    height: 81px;
  }
`;
const HoverWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 121px;
  height: 81px;
  &:hover {
    .img1 {
      display: none;
    }
    ${HoverButton} {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 121px;
      height: 81px;
      img {
        width: 121px;
        height: 81px;
      }
    }
  }
`;
const CategoriesMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 10px;
  width: 350px;
  position: relative;
  /* overflow-y: scroll; */
  /* overflow-x: hidden; */
  height: 100%;
  /* margin-top: ${({ categoriesMarginTop }) => categoriesMarginTop};
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #000;
  }
  ::-webkit-scrollbar-thumb {
    background: #79999d;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #79999d;
  } */
`;
const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 350px;
  /* margin-top: 90px; */
  position: relative;
`;
const CombineCategories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: ${({ Margin }) => (Margin ? "-70px" : "0")};
  &:hover {
    ${CombinedHoverButton} {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
const CategoryRight = styled.div`
  align-self: flex-start;
  padding-top: ${({ Padding }) => (Padding ? "50px" : "0")};
`;
const CategoryLeft = styled.div`
  align-self: flex-end;
  padding-top: ${({ Padding }) => (Padding ? "50px" : "0")};
  margin-top: ${({ Margin }) => (Margin ? "100px" : "0")};
  margin-bottom: ${({ MarginB }) => (MarginB ? "30px" : "0")};
  @media screen and (max-width: 850px) {
    margin-top: ${({ Margin }) => (Margin ? "100px" : "0")};
  }
  @media screen and (max-width: 760px) {
    margin-top: ${({ Margin }) => (Margin ? "70px" : "0")};
  }
  @media screen and (max-width: 500px) {
    margin-top: ${({ Margin }) => (Margin ? "50px" : "0")};
  }
`;

export default ShopCategoriesWithSidebar;
