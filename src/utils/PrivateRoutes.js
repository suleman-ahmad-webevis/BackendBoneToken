import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const { userInfo } = useSelector((state) => state.user);
  return userInfo?.token ? children : <Navigate to="/login" />;
};

export const PrivateRouteCheckout = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return cartItems?.length > 0 ? <Outlet /> : <Navigate to="/shop" />;
};
