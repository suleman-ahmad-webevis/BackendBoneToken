import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import createDogNftService from "./createDogNftService";
import { toast } from "react-toastify";

const initialState = {
  allDogNfts: [],
  singleDogNft: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  userNfts: [],
};

export const createDogNft = createAsyncThunk(
  "dogNft/createDogNft",
  async (obj, thunkAPI) => {
    const registerDog = sessionStorage.getItem("registerDog");
    const registerOwner = sessionStorage.getItem("registerOwner");
    const registerVeterinary = sessionStorage.getItem("registerVeterinary");
    const registerInsurance = sessionStorage.getItem("registerInsurance");
    const registerDogShow = sessionStorage.getItem("registerDogShow");
    const allFormsData = {
      registerDog,
      registerOwner,
      registerVeterinary,
      registerInsurance,
      registerDogShow,
      userId: obj.userId,
    };
    try {
      return await createDogNftService.createDogNft({ obj, allFormsData });
    } catch (err) {
      const message = err.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateDogNft = createAsyncThunk(
  "dogNft/updateDogNft",
  async (obj, thunkAPI) => {
    const registerDog = sessionStorage.getItem("registerDog");
    const registerOwner = sessionStorage.getItem("registerOwner");
    const registerVeterinary = sessionStorage.getItem("registerVeterinary");
    const registerInsurance = sessionStorage.getItem("registerInsurance");
    const registerDogShow = sessionStorage.getItem("registerDogShow");
    const allFormsData = {
      registerDog,
      registerOwner,
      registerVeterinary,
      registerInsurance,
      registerDogShow,
    };
    try {
      return await createDogNftService.updateDogNft({ obj, allFormsData });
    } catch (err) {
      const message = err.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getAllNfts = createAsyncThunk(
  "dogNft/getAllNfts",
  async (obj, thunkAPI) => {
    try {
      return await createDogNftService.getAllDogNft();
    } catch (err) {
      const message = err.response.data.message;
      // toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getDogNft = createAsyncThunk(
  "dogNft/getDogNft",
  async (obj, thunkAPI) => {
    try {
      return await createDogNftService.getDogNft(obj);
    } catch (err) {
      const message = err.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getDogNftByUser = createAsyncThunk(
  "dogNft/getDogNftByUser",
  async (obj, thunkAPI) => {
    try {
      return await createDogNftService.getDogNftByUser(obj);
    } catch (err) {
      const message = err.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const dogNFTSlice = createSlice({
  name: "dogNFTSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createDogNft.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createDogNft.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createDogNft.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(updateDogNft.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateDogNft.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(updateDogNft.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getAllNfts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllNfts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allDogNfts = action.payload.data;
      })
      .addCase(getAllNfts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getDogNft.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDogNft.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.singleDogNft = action.payload;
      })
      .addCase(getDogNft.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getDogNftByUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDogNftByUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userNfts = action.payload.data;
      })
      .addCase(getDogNftByUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset } = dogNFTSlice.actions;
export default dogNFTSlice.reducer;
