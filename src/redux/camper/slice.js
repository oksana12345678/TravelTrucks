import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCampers } from "./operation";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.isError = action.payload;
};

const camperSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCampers.pending, handlePending)
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        console.log(action.payload.items);
        state.items = action.payload.items;
        state.isLoading = false;
      })
      .addCase(fetchAllCampers.rejected, handleError);
  },
});

export const camperReducer = camperSlice.reducer;
