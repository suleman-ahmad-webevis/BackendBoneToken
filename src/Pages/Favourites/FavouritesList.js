import React, { useEffect } from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import FavouritesListTable from "../../components/Favorites/FavouritesListTable";

const FavouritesList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <FavouritesListContainer>
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
