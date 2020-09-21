import dayjs from "dayjs";
import { createSelector } from "reselect";
import { isEmpty } from "utils/utils";

const _getExpenses = (state) => state.expenses.data;
const _getFixedCosts = (state) => state.fixedCosts.data;

export const getLoadingState = (state, key) => state[key].isLoading;

export const getIsEmpty = (state, key) =>
  state[key].isLoadingFinished && isEmpty(state[key].data);

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
  const result = {};
  if (!isEmpty(data)) {
    for (let i = 0; i < data.length - 1; i++) {
      const currDay = dayjs.unix(data[i].timestamp);
      const nextDay = dayjs.unix(data[i + 1].timestamp);
      if (currDay.isSame(nextDay, "day")) {
        result[data[i].timestamp] = [data[i], data[i + 1]];
        i++;
      } else {
        result[data[i].timestamp] = [data[i]];
        result[data[i + 1].timestamp] = [data[i + 1]];
      }
    }
  }
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
