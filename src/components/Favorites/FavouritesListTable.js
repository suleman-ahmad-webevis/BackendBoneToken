import React from "react";
import styled from "styled-components";
import Heading from "../Heading/Heading";
import { useSelector, useDispatch } from "react-redux";
import { Img } from "../../GlobalStyles";
import { removeFromFavourites } from "../../redux/favourites/favouritesSlice";
import {
  CheckoutCard,
  CheckoutContainer,
  CheckoutDesc,
  CheckoutItem,
  CheckoutPrice,
  CheckoutProImg,
  Price,
} from "./FavouriteTable.style";
import { Link, useNavigate } from "react-router-dom";

const FavouritesListTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { favouritesItems } = useSelector((state) => state.favourites);

  const handleRemoveFromFavourites = (cartItem) => {
    dispatch(removeFromFavourites(cartItem));
  };

  return (
    <>
      {favouritesItems?.length > 0 ? (
        <CheckoutContainer>
          <CheckoutCard>
            {favouritesItems?.map((item) => (
              <CheckoutItem>
                <CheckoutProImg>
                  <Img src={item?.productImages[0]?.secureUrl} alt="" />
                </CheckoutProImg>
                <CheckoutDesc>
                  <Heading level={3}>{item?.name}</Heading>
                </CheckoutDesc>
                <CheckoutPrice>
                  <Price>
                    <Heading level={3}>€</Heading>
                    <Heading level={3}>
                      {item?.productInventory[0]?.minRetailPrice}
                    </Heading>
                  </Price>
                </CheckoutPrice>
                <Price>
                  <Heading
                    level={1}
                    style={{ color: "Red", cursor: "pointer" }}
                    onClick={() => handleRemoveFromFavourites(item)}
                  >
                    X
                  </Heading>
                </Price>
              </CheckoutItem>
            ))}
          </CheckoutCard>
        </CheckoutContainer>
      ) : (
        <CheckoutContainer>
          <h5>
            Favourties is empty, &nbsp;
            <Link
              to="/"
              style={{
                fontSize: "20px",
                color: "#2979ff",
                textDecoration: "none",
              }}
            >
              Add Products
            </Link>
          </h5>
        </CheckoutContainer>
      )}
    </>
  );
};

export const FavouritesListItems = styled.div`
  @media screen and (max-width: 760px) {
    overflow-x: scroll;
  }
`;

export const TrashItem = styled.div`
  color: red;
  cursor: pointer;
  font-size: 18px;
`;

export const FavouritesListImages = styled.div`
  width: 100px;
  @media screen and (max-width: 500px) {
    width: 50px;
  }
`;

export default FavouritesListTable;
