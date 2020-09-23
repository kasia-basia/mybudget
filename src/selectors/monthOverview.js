import dayjs from "dayjs";
import { createSelector } from "reselect";
import { isEmpty } from "utils/utils";

const _getExpenses = (state) => state.expenses.data;
const _getFixedCosts = (state) => state.fixedCosts.data;

export const getCurrentMonth = (state) => state.currentMonth;
export const getLoadingState = (state, key) => state[key].isLoading;

export const getIsEmpty = (state, key) =>
  state[key].isLoadingFinished && isEmpty(state[key].data);

export const getCurrentMonthStart = (state) => state.currentMonth.start;

export const getSortedExpenses = createSelector(_getExpenses, (data) => {
  const arr = Object.entries(data).map(([id, details]) => ({
    id: id,
    ...details,
  }));
  return arr.sort((a, b) =>
    a.timestamp > b.timestamp ? 1 : b.timestamp > a.timestamp ? -1 : 0
  );
});

export const getExpensesByDay = createSelector(getSortedExpenses, (data) => {
  let result = {};
  data.forEach((el) => {
    const date = dayjs(el.timestamp).startOf("day");
    if (result[date]) {
      result[date].push(el);
    } else {
      result[date] = [el];
    }
  });
  return result;
});

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

export const getTotalExpenses = createSelector(_getExpenses, (data) => {
  if (!isEmpty(data)) {
    return Object.values(data)
      .map((el) => parseFloat(el["amount"].toString().replace(",", ".")))
      .reduce((a, b) => a + b)
      .toFixed(2);
  }
  return undefined;
});
