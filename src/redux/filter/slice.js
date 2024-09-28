import { createSlice } from "@reduxjs/toolkit";

const getFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    status: "",
    query: "",
    favorites: getFavoritesFromLocalStorage(),
  },
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
    setFilterQuery: (state, action) => {
      state.query = action.payload;
    },
    setFavorite(state, action) {
      const index = state.favorites.indexOf(action.payload);
      if (index === -1) {
        // If not present, add to favorites
        state.favorites.push(action.payload);
      } else {
        // If present, remove from favorites
        state.favorites.splice(index, 1);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { setStatusFilter, setFilterQuery, setFavorite } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
