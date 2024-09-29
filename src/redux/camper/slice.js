import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllCampers,
  fetchAutomaticCampers,
  fetchOneCamper,
} from "./operation";

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
    total: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCampers.pending, handlePending)
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.total = action.payload.total;
        state.items = action.payload.items;
        state.isLoading = false;
      })
      .addCase(fetchAllCampers.rejected, handleError)
      .addCase(fetchOneCamper.pending, handlePending)
      .addCase(fetchOneCamper.fulfilled, (state, action) => {
        state.item = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOneCamper.rejected, handleError)
      .addCase(fetchAutomaticCampers.pending, handlePending)
      .addCase(fetchAutomaticCampers.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.isLoading = false;
      })
      .addCase(fetchAutomaticCampers.rejected, handleError);
  },
});

export const camperReducer = camperSlice.reducer;
