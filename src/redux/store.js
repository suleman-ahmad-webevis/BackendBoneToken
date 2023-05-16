import { configureStore } from "@reduxjs/toolkit";
//Products
import productReducer from "./product/productSlice";
//Cart
import cartReducer from "./cart/cartSlice";
//FavouritesList
import favouritesReducer from "./favourites/favouritesSlice";
//WalletConn
import walletConnect from "./walletConn/walletConnSlice";
//Recently Viewed Products
import recentlyViewedReducer from "./recentlyViewed/recentlySlice";
//Blog
import blogReducer from "./blog/blogSlice";
import userReducer from "./user/userSlice";
import categoryReducer from "./category/categorySlice";
//DogNFT
import dogNftReducer from "./createDogNft/createDogNftSlice";
//Payment
import paymentReducer from "./payment/paymentSlice";
//DogShow
import dogShowReducer from "./dogShow/dogShowSlice";

//Other configs
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["product", "blogs"],
};

const rootReducer = combineReducers({
  //Product
  product: productReducer,
  //Cart
  cart: cartReducer,
  //Favourites
  favourites: favouritesReducer,
  //Wallet
  wallet: walletConnect,
  //Recently Viewed Products
  recentlyViewedPro: recentlyViewedReducer,
  //Blog
  blog: blogReducer,
  //User
  user: userReducer,
  //Category
  categories: categoryReducer,
  //DogNFT
  dogNft: dogNftReducer,
  //Payment
  payment: paymentReducer,
  //DogShow
  dogShow: dogShowReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
