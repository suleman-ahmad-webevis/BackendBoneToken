import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  allProducts: [],
  smartSearch: [],
  subCategories: [],
  total: 0,
  // page: 1,
  // pages: 1,
  singlePro: {},
  noProMsg: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const getTheProducts = createAsyncThunk(
  "product/getTheProducts",
  async (obj, thunkAPI) => {
    try {
      return await productService.getTheProductsService(obj);
    } catch (error) {
      const message = error.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getTheProductById = createAsyncThunk(
  "product/getTheProductById",
  async (obj, thunkAPI) => {
    try {
      return await productService.getProductByIdService(obj);
    } catch (error) {
      const message = error.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const rateTheProduct = createAsyncThunk(
  "product/rateTheProduct",
  async ({ quantityR, fitPurposeR, serviceR, priceR, total, id }, thunkAPI) => {
    try {
      const ratingTotal = (quantityR + fitPurposeR + serviceR + priceR) / total;
      return await productService.rateTheProductService({
        productId: id,
        ratingTotal,
      });
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.error) ||
        error.message ||
        error.toString();
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getTheProdSubCategory = createAsyncThunk(
  "subCategory/getAllSubCategory",
  async (obj, thunkAPI) => {
    try {
      return await productService.getTheSubCategoryService(obj);
    } catch (error) {
      const message = error.message;
      // toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => {
      state.products = [];
      state.allProducts = [];
      state.total = 0;
      state.page = 1;
      // state.pages= 1,
      state.singlePro = {};
      // state.isError = false;
      // state.isSuccess = false;
      // state.isLoading = false;
      state.smartSearch = [];
    },
    setRecentlyViewed: (state, action) => {
      state.products = [...action.payload];
    },
    setAllProducts: (state) => {
      //forInfiniteScroll
      state.allProducts = [
        ...state.allProducts,
        ...(state.products?.length ? state.products : []),
      ];
    },
    setSmartSearch: (state, action) => {
      state.smartSearch = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTheProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTheProducts.fulfilled, (state, action) => {
        state.noProMsg = action.payload.message;
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload.data;
        state.total = action.payload.count;
      })
      .addCase(getTheProducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getTheProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTheProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.singlePro = action.payload;
      })
      .addCase(getTheProductById.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getTheProdSubCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTheProdSubCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.subCategories = action.payload.data;
      })
      .addCase(getTheProdSubCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(rateTheProduct.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(rateTheProduct.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(rateTheProduct.rejected, (state) => {
        state.isError = true;
      });
  },
});

export const { reset, setAllProducts, setSmartSearch, setRecentlyViewed } =
  productSlice.actions;
export default productSlice.reducer;
