export const selectFilter = (state) => state.filter.status;
export const selectQuery = (state) => state.filter.query;

export const selectIsFavorite = (state, id) =>
  state.filter.favorites.includes(id);
