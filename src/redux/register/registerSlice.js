import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import registerService from "./registerService";
import { toast } from "react-toastify";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const registerTheDog = createAsyncThunk(
  "register/registerTheDog",
  async (obj, thunkAPI) => {
    try {
      return await registerService.registerTheDog(obj);
    } catch (error) {
      const message = error.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const registerTheOwner = createAsyncThunk(
  "register/registerTheOwner",
  async (obj, thunkAPI) => {
    try {
      return await registerService.registerTheOwner(obj);
    } catch (error) {
      const message = error.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const registerTheVeterinary = createAsyncThunk(
  "register/registerTheVeterinary",
  async (obj, thunkAPI) => {
    try {
    } catch (error) {
      const message = error.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const registerTheDogShow = createAsyncThunk(
  "register/registerTheDogShow",
  async (obj, thunkAPI) => {
    try {
    } catch (error) {
      const message = error.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    reset: (state) => {
      // state.isLoading = false;
      // state.isSuccess = false;
      // state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerTheDog.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerTheDog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(registerTheDog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(registerTheOwner.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerTheOwner.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(registerTheOwner.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(registerTheVeterinary.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerTheVeterinary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(registerTheVeterinary.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(registerTheDogShow.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerTheDogShow.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(registerTheDogShow.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default registerSlice.reducer;
