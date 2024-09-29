import { createSlice } from "@reduxjs/toolkit";

const getFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    status: [],
    query: [],
    temporaryStorage: [],
    location: "",
    favorites: getFavoritesFromLocalStorage(),
  },
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
    setFilterQuery: (state, action) => {
      state.query = action.payload;
    },
    setTemporaryStorage: (state, action) => {
      state.temporaryStorage = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },

    setFavorite(state, action) {
      const index = state.favorites.indexOf(action.payload);
      if (index === -1) {
        state.favorites.push(action.payload);
      } else {
        state.favorites.splice(index, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const {
  setStatusFilter,
  setFilterQuery,
  setFavorite,
  setTemporaryStorage,
  setLocation,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
