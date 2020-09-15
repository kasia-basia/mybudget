import * as constants from "constants/monthOverwiew";
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

const expensesLoading = createLoadingReducer(constants.FETCH_EXPENSES, false);
const fixedCostsLoading = createLoadingReducer(constants.FETCH_FIXED_COSTS, false);

const expensesData = (state = [], action) => {
  switch (action.type) {
  case constants.FETCH_EXPENSES:
    return [];
  case constants.FETCH_EXPENSES_SUCCESS:
    return action.payload;
  default: {
    return state;
  }
  }
};

const fixedCostsData = (state = [], action) => {
  switch (action.type) {
    case constants.FETCH_FIXED_COSTS:
      return [];
    case constants.FETCH_FIXED_COSTS_SUCCESS:
      return action.payload;
    case constants.SET_BILL_STATUS:
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
