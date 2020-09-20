import { combineReducers } from "redux";
import { expenses, fixedCosts } from "reducers/monthOverview";
import categories from "reducers/categories";

export default combineReducers({ expenses, fixedCosts, categories });
