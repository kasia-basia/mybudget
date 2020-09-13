import { createSelector } from "reselect";
import {isEmpty} from "utils/utils";

export const getFixedCosts = (state) => state.fixedCosts.data;

export const getFixedCostsTotal = createSelector(getFixedCosts, (data) => {
  if (!isEmpty(data)) {
      return data.reduce((a, b) => a + (b['amount'] || 0), 0);
  }
  return null
});

export const getFixedCostsPaid = createSelector(getFixedCosts, (data) => {
    if (!isEmpty(data)) {
        return data.filter(el => el.paid).reduce((a, b) => a + (b['amount'] || 0), 0);
    }
    return null
});

