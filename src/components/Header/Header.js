// import React, { useEffect } from "react";
// import styled from "styled-components";
// import { getCartTotal } from "../../redux/cart/cartSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { getTotalsFavourites } from "../../redux/favourites/favouritesSlice";
// import Navbar from "../Navbar/Navbar"; //DesktopNavbar

// const Header = ({ theme, setTheme }) => {
//   const dispatch = useDispatch();
//   const { cartQuantityIs } = useSelector((state) => state.cart);
//   const { favouritesTotalQuantity } = useSelector((state) => state.favourites);

//   useEffect(() => {
//     dispatch(getCartTotal());
//     dispatch(getTotalsFavourites());
//     // eslint-disable-next-line
//   }, [cartQuantityIs, favouritesTotalQuantity]);

//   return (
//     <HeaderContainer>
//       <Navbar
//         theme={theme}
//         setTheme={setTheme}
//         cartQuantityIs={cartQuantityIs}
//         favouritesTotalQuantity={favouritesTotalQuantity}
//       />
//     </HeaderContainer>
//   );
// };

// const HeaderContainer = styled.div`
//   position: sticky;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: 1000;
// `;

// export default Header;
