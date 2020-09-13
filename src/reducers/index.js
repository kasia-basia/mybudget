import { combineReducers } from "redux";
import expenses from "reducers/expenses";
import fixedCosts from "reducers/fixedCosts";

export default combineReducers({ expenses, fixedCosts });
