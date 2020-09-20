import * as c from "constants/monthOverwiew";
import { combineReducers } from "redux";

const loadingReducer = (prefix, initialState) => (
  state = initialState,
  action
) => {
  switch (action.type) {
    case prefix:
      return true;
    case `${prefix}_ERROR`:
    case `${prefix}_SUCCESS`:
      return false;
    default:
      return state;
  }
};

const createLoadingReducer = (prefix, initialState) =>
  loadingReducer(prefix, initialState);

const expensesLoading = createLoadingReducer(c.FETCH_EXPENSES, false);
const fixedCostsLoading = createLoadingReducer(c.FETCH_FIXED_COSTS, false);

const expensesData = (state = {}, action) => {
  switch (action.type) {
    case c.FETCH_EXPENSES:
      return [];
    case c.FETCH_EXPENSES_SUCCESS:
      return action.payload;
    case c.ADD_EXPENSE_SUCCESS: {
      const newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    }
    case c.DELETE_EXPENSE_SUCCESS: {
      const newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    }
    default: {
      return state;
    }
  }
};

const fixedCostsData = (state = [], action) => {
  switch (action.type) {
    case c.FETCH_FIXED_COSTS:
      return [];
    case c.FETCH_FIXED_COSTS_SUCCESS:
      return action.payload;
    case c.SET_BILL_STATUS:
      const newState = { ...state };
      newState[action.id] = {
        ...state[action.id],
        paid: !state[action.id].paid,
      };
      return newState;
    default: {
      return state;
    }
  }
};

export const fixedCosts = combineReducers({
  data: fixedCostsData,
  isLoading: fixedCostsLoading,
});

export const expenses = combineReducers({
  data: expensesData,
  isLoading: expensesLoading,
});
