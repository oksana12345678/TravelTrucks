import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Встановлюємо базову URL для axios
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

// Функція для отримання всіх кемперів з можливістю фільтрації
export const fetchAllCampers = createAsyncThunk(
  "campers/all",
  async ({ appliedFilters, page = 1 }, thunkAPI) => {
    // Додаємо параметр page з дефолтним значенням
    const filterParamsMap = appliedFilters?.reduce((acc, filterValue) => {
      const { fieldName, value } = filterValue;
      acc[fieldName] = value;
      return acc;
    }, {});

    const params = new URLSearchParams(filterParamsMap); // Створюємо URLSearchParams без page

    // Додаємо параметри пагінації
    params.append("page", page);
    params.append("limit", 5);

    try {
      const response = await axios.get(`/campers`, { params }); // Використовуємо params
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Функція для отримання одного кемпера за ID
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
