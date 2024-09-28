import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchAllCampers = createAsyncThunk(
  "campers/all",
  async (selectedQuery, thunkAPI) => {
    try {
      console.log("Vehicle Type in API Call:", selectedQuery);
      const response = await axios.get(`/campers`, {
        params: {
          filter: selectedQuery,
        },
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
      console.log("Vehicle Type in API Call:", camperId);
      const response = await axios.get(`/campers/1`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
