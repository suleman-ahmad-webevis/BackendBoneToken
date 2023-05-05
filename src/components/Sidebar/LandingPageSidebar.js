import React, { useEffect } from "react";
import styled from "styled-components";
import CategorySelector from "../Categories/CategorySelector";
import SidebarStatic from "./SidebarStatic";
import ShopCategoriesWithSidebar from "../Categories/ShopCategoriesWithSidebar";
import { useParams } from "react-router-dom";

const LandingPageSidebar = ({ toggle, setShowSidebar, showSidebar }) => {
  const pathname = window?.location?.pathname;
  const { id, name } = useParams();
  useEffect(() => {}, [pathname]);
  return (
    <CategoriesSidebar toggle={toggle}>
      {(pathname === "/" ||
        pathname === "/shop" ||
        pathname === "/shop/category" ||
        pathname === "/shop/recently-viewed") && (
        <SelectCategories>
          <CategorySelector />
        </SelectCategories>
      )}
      {pathname === "/shop" ||
      pathname === `/shop/product-detail/${id}` ||
      pathname === `/shop/category` ||
      pathname === "/shop/recently-viewed" ? (
        <ShopCategoriesWithSidebar
          //WithItsOwnSidebar
          pageTop="15px"
          categoriesMarginTop="70px"
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          iconTop={
            pathname === `/shop/product-detail/${id}` ||
            pathname === `/shop/category?${name}`
              ? "10px"
              : "85px"
          }
          extraGap={
            pathname === `/shop/product-detail/${id}` ||
            pathname === `/shop/category?${name}`
              ? "0px"
              : "30px"
          }
        />
      ) : (
        <CategoriesContainer>
          <SidebarStatic
            width="320px"
            position="relative"
            top="-30px"
            left="-2px"
            respTop="0px"
            respLeft="-2px"
          />
        </CategoriesContainer>
      )}
    </CategoriesSidebar>
  );
};

const CategoriesSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
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
  width: 100%;
  margin: 18px auto;
  max-width: 320px;
  z-index: 999;
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 350px;
  position: relative;
`;

export default LandingPageSidebar;
