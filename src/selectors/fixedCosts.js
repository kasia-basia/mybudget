import { createSelector } from "reselect";
import { isEmpty } from "utils/utils";

const _getFixedCosts = (state) => state.fixedCosts.data;

export const getSortedFixedCosts = createSelector(_getFixedCosts, (data) => {
  const arr = Object.entries(data).map(([id, details]) => {
    return { id, ...details };
  });
  return arr.sort((a, b) =>
    a.dueDate > b.dueDate ? 1 : b.dueDate > a.dueDate ? -1 : 0
  );
});

export const getFixedCostsTotal = createSelector(_getFixedCosts, (data) => {
  if (!isEmpty(data)) {
    return Object.values(data).reduce((a, b) => a + (b["amount"] || 0), 0);
  }
  return null;
});

export const getFixedCostsPaid = createSelector(_getFixedCosts, (data) => {
  if (!isEmpty(data)) {
    return Object.values(data)
      .filter((el) => el.paid)
      .reduce((a, b) => a + (b["amount"] || 0), 0);
  }
  return null;
});
