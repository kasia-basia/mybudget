import * as constants from "constants/expenses";
import { combineReducers } from "redux";

const data = (state = [], action) => {
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

export default combineReducers({ data });
