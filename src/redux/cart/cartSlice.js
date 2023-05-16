import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  cartQuantityIs: 0,
  cartTotalAmountIs: 0,
  clearSelectedPro: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //Used in Product Detail
    addToYourCart(state, action) {
      const { selectedPro } = action.payload;
      selectedPro.forEach((cartItem) => {
        state.cartItems.push(cartItem);
      });
      state.clearSelectedPro = !state.clearSelectedPro;
      toast.success("Product added to cart ", { theme: "colored" });
    },
    //Used in Navbar
    getCartTotal(state, action) {
      let totalQuantity = 0;
      totalQuantity = state.cartItems.reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0);
      state.cartQuantityIs = totalQuantity;
      // return state.cartQuantityIs;
    },
    //Used in Checkout
    incDecQuantity(state, action) {
      let itemIndex;
      itemIndex = state.cartItems.findIndex(
        (item) => item.minRetailPrice === action.payload.minRetailPrice
      );
      if (action.payload.type === "inc") {
        if (itemIndex >= 0) {
          state.cartItems[itemIndex].quantity += 1;
          state.cartItems[itemIndex].itemTotalPrice =
            state.cartItems[itemIndex].minRetailPrice *
            state.cartItems[itemIndex].quantity;
        }
      } else {
        if (itemIndex >= 0) {
          if (state.cartItems[itemIndex].quantity > 1) {
            state.cartItems[itemIndex].quantity -= 1;
            state.cartItems[itemIndex].itemTotalPrice =
              state.cartItems[itemIndex].minRetailPrice *
              state.cartItems[itemIndex].quantity;
          } else {
            let removedPro = state.cartItems.filter((value) => {
              return value.minRetailPrice !== action.payload.minRetailPrice;
            });
            state.cartItems = removedPro;
          }
        }
      }
    },
    removeFromYourCart(state, action) {
      const removedFromCart = state.cartItems.filter(
        (cartItem) => cartItem?.minRetailPrice !== action.payload
      );
      state.cartItems = removedFromCart;
      toast.info("Product removed from card", { theme: "colored" });
    },
    getCartTotalAmount(state, action) {
      let cartTotalPrice = 0;
      cartTotalPrice = state.cartItems.reduce((acc, curr) => {
        return acc + curr.itemTotalPrice;
      }, 0);
      state.cartAmountIs = cartTotalPrice;
      state.cartTotalAmountIs =
        cartTotalPrice > 0 ? cartTotalPrice + 18 + 10.44 : 0;
      // return state.cartQuantityIs;
    },
  },
});

export const {
  addToYourCart,
  getCartTotal,
  incDecQuantity,
  removeFromYourCart,
  getCartTotalAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
