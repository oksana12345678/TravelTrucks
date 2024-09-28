import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCampers, fetchOneCamper } from "./operation";

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
    item: [],
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
      .addCase(fetchAllCampers.rejected, handleError)
      .addCase(fetchOneCamper.pending, handlePending)
      .addCase(fetchOneCamper.fulfilled, (state, action) => {
        console.log(action.payload);
        state.item = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOneCamper.rejected, handleError);
  },
});

export const camperReducer = camperSlice.reducer;
