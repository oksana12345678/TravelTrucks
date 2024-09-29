import { createSelector } from "@reduxjs/toolkit";
import { selectCamperList } from "../camper/selectors";

export const selectFilter = (state) => {
  return state.filter.status || [];
};
export const selectQuery = (state) => state.filter.query;
export const selectTemporaryStorage = (state) => state.filter.temporaryStorage;

export const selectIsFavorite = (state, id) =>
  state.filter.favorites.includes(id);

export const selectLocation = (state) => state.filter.location;

export const selectFilteredCampers = createSelector(
  [selectCamperList, selectFilter],
  (campers, selectFilter) => {
    if (!selectFilter || selectFilter.length === 0) {
      return campers;
    }

    return campers.filter((camper) => {
      const matchesAllFilters = selectFilter.every((filter) => {
        switch (filter.toLowerCase()) {
          case "tv":
            return camper.TV;
          case "bathroom":
            return camper.bathroom;
          case "kitchen":
            return camper.kitchen;
          case "ac":
            return camper.AC;
          case "radio":
            return camper.radio;
          default:
            return false;
        }
      });

      return matchesAllFilters;
    });
  }
);

export const selectFilteredLocation = createSelector(
  [selectFilteredCampers, selectLocation],
  (camper, selectLocation) => {
    return camper.filter((camper) => {
      const matchesLocation = camper.location
        .toLowerCase()
        .includes(selectLocation);
      return matchesLocation;
    });
  }
);
