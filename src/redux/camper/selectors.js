import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filter/selectors";

export const selectCamperList = (state) => state.campers.items;
export const selectOneCamper = (state) => state.campers.item;

export const selectFilteredContacts = createSelector(
  [selectCamperList, selectFilter],
  (campers, selectFilter) => {
    if (!selectFilter || selectFilter.length === 0) {
      return campers;
    }

    return campers.filter((camper) => {
      const matchesAllFilters = selectFilter.every((filter) => {
        switch (
          filter.toLowerCase() // Перетворюємо на нижній регістр
        ) {
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

      const matchesAnyFilter = selectFilter.some((filter) => {
        switch (filter) {
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

      return matchesAllFilters || matchesAnyFilter;
    });
  }
);
