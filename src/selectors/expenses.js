import { createSelector } from "reselect";

const _getExpenses = (state) => state.expenses.data;

export const getSortedExpenses = createSelector(_getExpenses, (data) => {
  return Object.keys(data)
    .sort()
    .reduce((result, key) => {
      result[key] = data[key];
      return result;
    }, {});
});
