import * as constants from "constants/fixedCosts";
import { combineReducers } from "redux";

const data = (state = [], action) => {
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

export default combineReducers({ data });
