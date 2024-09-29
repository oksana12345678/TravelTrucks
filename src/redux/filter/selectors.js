export const selectFilter = (state) => {
  return state.filter.status || [];
};
export const selectStatusFilter = (state) => state.filter.status;

export const selectIsFavorite = (state, id) =>
  state.filter.favorites.includes(id);
