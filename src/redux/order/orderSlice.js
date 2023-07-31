import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./orderService";
import { toast } from "react-toastify";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  myOrder: [],
  isOrder: false,
};

export const getUserOrders = createAsyncThunk(
  "order/getUserOrders",
  async (obj, thunkAPI) => {
    try {
      return await orderService.getUserOrders(obj);
    } catch (error) {
      const message = error.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const removeOrderItem = createAsyncThunk(
  "order/deleteOrder",
  async (obj, thunkAPI) => {
    try {
      return await orderService.deleteOrderById(obj);
    } catch (error) {
      const message = error.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    reset: (state) => {
      state.myOrder = [];
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserOrders.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.myOrder = action?.payload?.data;
      })
      .addCase(getUserOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(removeOrderItem.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(removeOrderItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isOrder = !state.isOrder;
      })
      .addCase(removeOrderItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default orderSlice.reducer;
