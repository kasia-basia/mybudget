import * as c from "constants/monthOverwiew";
import { combineReducers } from "redux";
import { SET_MONTH } from "constants/monthOverwiew";
import { getMonthBoundary } from "utils/dateHelpers";

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

const loadingFinishedReducer = (prefix) => (state = false, action) => {
  switch (action.type) {
    case prefix:
      return false;
    case `${prefix}_ERROR`:
    case `${prefix}_SUCCESS`:
      return true;
    default:
      return state;
  }
};

const createLoadingReducer = (prefix, initialState) =>
  loadingReducer(prefix, initialState);

const createLoadingFinishedReducer = (prefix) => loadingFinishedReducer(prefix);

const expensesLoading = createLoadingReducer(c.FETCH_EXPENSES, false);
const expensesLoadingFinished = createLoadingFinishedReducer(c.FETCH_EXPENSES);

const billsLoading = createLoadingReducer(c.FETCH_BILLS, false);
const billsLoadingFinished = createLoadingFinishedReducer(c.FETCH_BILLS, false);

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
    case c.EDIT_EXPENSE_SUCCESS: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...newState[action.payload.id],
        [action.payload.newValue[0]]: action.payload.newValue[1],
      };
      return newState;
    }
    default:
      return state;
  }
};

const billsData = (state = [], action) => {
  switch (action.type) {
    case c.FETCH_BILLS:
      return [];
    case c.FETCH_BILLS_SUCCESS:
      return action.payload;
    case c.EDIT_BILL_SUCCESS:
      const newState = { ...state };
      newState[action.payload.id] = {
        ...state[action.payload.id],
        ...action.payload.newData,
      };
      return newState;
    default:
      return state;
  }
};

const initialMonth = getMonthBoundary(new Date());

export const currentMonth = (state = initialMonth, action) => {
  switch (action.type) {
    case SET_MONTH:
      return action.payload;
    default:
      return state;
  }
};

export const bills = combineReducers({
  data: billsData,
  isLoading: billsLoading,
  isLoadingFinished: billsLoadingFinished,
});

export const expenses = combineReducers({
  data: expensesData,
  isLoading: expensesLoading,
  isLoadingFinished: expensesLoadingFinished,
});
