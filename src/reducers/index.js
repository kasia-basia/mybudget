import { combineReducers } from "redux";
import { expenses, fixedCosts } from "reducers/monthOverview";

export default combineReducers({ expenses, fixedCosts });
