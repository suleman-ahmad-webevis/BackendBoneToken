import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import FavouritesListTable from "../../components/Favorites/FavouritesListTable";
import CommonMobNav from "../../components/CommonMTNav/CommonMobNav";
import CommonTabNav from "../../components/CommonMTNav/CommonTabNav";
import useBreakpoint from "../../hooks/useBreakPoint";

const FavouritesList = () => {
  const { isTablet, isSmallMobile, isMobile } = useBreakpoint();

  return (
    <FavouritesListContainer>
      {(isSmallMobile || isMobile) && <CommonMobNav />}
      {(isTablet || isSmallMobile || isMobile) && <CommonTabNav />}
      <Heading level={1} FontBig>
        Favourites List
      </Heading>
      <FavouritesSidebar>
        <FavouritesListTable />
      </FavouritesSidebar>
    </FavouritesListContainer>
  );
};

export const FavouritesListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px;
  padding: 20px;
  width: 100%;
  margin: auto;
`;
export const FavouritesSidebar = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;

export default FavouritesList;
