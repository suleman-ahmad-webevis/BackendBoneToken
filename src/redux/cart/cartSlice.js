import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  singleItemQuantity: 0,
  cartQuantityIs: 0,
  cartAmountIs: 0,
  cartTotalAmountIs: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success("Product quantity increased", { theme: "colored" });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success("Product added to cart ", { theme: "colored" });
      }
    },
    removeFromCart(state, action) {
      // const filteredCartItems = state.cartItems.filter(
      //   (cartItem) => cartItem._id !== action.payload._id
      // );
      // state.cartItems = filteredCartItems;
      // if (state.cartItems.length) {
      //   toast.success("Product removed from cart ", { theme: "colored" });
      // }
      //  else {
      //   state.itemFromDeliverySlider = {};
      // }
    },
    decreaseCart(state, action) {
      // const itemIndex = state.cartItems.findIndex(
      //   (cartItem) => cartItem._id === action.payload
      // );
      // if (state.cartItems[itemIndex]?.cartQuantity > 1) {
      //   state.cartItems[itemIndex].cartQuantity -= 1;
      //   toast.success("Product quantity decreased", { theme: "colored" });
      // } else if (state.cartItems[itemIndex]?.cartQuantity === 1) {
      //   const nextCartItems = state.cartItems.filter(
      //     (cartItem) => cartItem._id !== action.payload
      //   );
      //   toast.success("Product removed ", { theme: "colored" });
      //   state.cartItems = nextCartItems;
      // }
    },
    clearCart(state) {
      if (state.cartItems.length) {
        state.cartItems = [];
      } else toast.info("No product in cart", { theme: "colored" });
    },
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { minRetailPrice, cartQuantity } = cartItem;
          const itemTotal = minRetailPrice * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        { total: 0, quantity: 0 }
      );
      total = parseFloat(total?.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    getItemQuantity(state, action) {
      let cartItemQuantity =
        state.cartItems.length &&
        state.cartItems.find((cartItem) => cartItem._id === action.payload);
      state.singleItemQuantity = cartItemQuantity?.cartQuantity;
    },
    incQuantity(state, action) {
      //This function is for product detail
      const { singlePro, selectedPro, navigate } = action.payload;
      const newSinglePro = { ...singlePro };
      newSinglePro.selectedProDetail = selectedPro;
      // eslint-disable-next-line
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === newSinglePro._id
      );
      console.log("The itemIndex", itemIndex);
      // if (itemIndex >= 0) {
      //   state.cartItems[itemIndex].cartQuantity += quantity > 0 ? quantity : 1;
      //   toast.success("Product added to cart ", { theme: "colored" });
      //   navigate("/checkout");
      // } else {
      // const tempProduct = {
      //   newSinglePro,
      // cartQuantity: quantity > 0 ? quantity : 1,
      // };
      state.cartItems.push(newSinglePro);
      toast.success("Product added to cart ", { theme: "colored" });
      navigate("/checkout");
    },
    addToYourCart(state, action) {
      const { selectedPro } = action.payload;
      selectedPro.forEach((cartItem) => {
        state.cartItems.push(cartItem);
      });
      toast.success("Product added to cart ", { theme: "colored" });
    },
    getCartTotal(state, action) {
      let totalQuantity = 0;
      totalQuantity = state.cartItems.reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0);
      state.cartQuantityIs = totalQuantity;
      // return state.cartQuantityIs;
    },
    removeFromYourCart(state, action) {
      const removedFromCart = state.cartItems.filter(
        (cartItem) => cartItem?.minRetailPrice !== action.payload
      );
      state.cartItems = removedFromCart;
      toast.info("Product removed from card", { theme: "colored" });
      // if (state.cartItems[itemIndex]?.cartItem.quantity > 1) {
      //   state.cartItems[itemIndex].quantity -= 1;
      //   toast.success("Product quantity decreased", { theme: "colored" });
      // } else if (state.cartItems[itemIndex]?.quantity === 1) {
      //   const nextCartItems = state.cartItems.filter(
      //     (cartItem) => cartItem._id !== action.payload
      //   );
      //   toast.success("Product removed ", { theme: "colored" });
      //   state.cartItems = nextCartItems;
      // }
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
  },
  // },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  increaseCart,
  clearCart,
  getTotals,
  getItemQuantity,
  saveItemFromDeliverySlider,
  incQuantity,
  addToYourCart,
  getCartTotal,
  removeFromYourCart,
  getCartTotalAmount,
  incDecQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
