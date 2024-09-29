import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchAllCampers = createAsyncThunk(
  "campers/all",
  async (appliedFilters, thunkAPI) => {
    const filterParamsMap = appliedFilters?.reduce((acc, filterValue) => {
      const { fieldName, value } = filterValue;
      acc[fieldName] = value;
      return acc;
    }, {});
    const params = new URLSearchParams(filterParamsMap);
    try {
      const response = await axios.get(`/campers`, {
        params,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOneCamper = createAsyncThunk(
  "campers/oneCamper",
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/${camperId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchAutomaticCampers = createAsyncThunk(
//   "campers/automatic",
//   async (appliedFilters, thunkAPI) => {
//     try {
//       const response = await axios.get(`/campers`, {
//         params: {
//           filter: appliedFilters,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
