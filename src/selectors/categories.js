import { createSelector } from "reselect";

export const getCategories = (state) => state.categories;

export const getCategoriesOptions = createSelector(
  getCategories,
  (categories) => Object.values(categories).map((el) => el.name)
);
