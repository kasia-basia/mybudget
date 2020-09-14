import { createSelector } from "reselect";

const _getExpenses = (state) => state.expenses.data;

export const getSortedExpenses = createSelector(_getExpenses, (data) => {
  const arr = Object.entries(data).map(([id, details]) => ({
    id: id,
    ...details,
  }));
  return arr.sort((a, b) =>
    a.timestamp > b.timestamp ? 1 : b.timestamp > a.timestamp ? -1 : 0
  );
});
