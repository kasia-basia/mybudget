import { combineReducers } from "redux";
import { expenses, fixedCosts, currentMonth } from "reducers/monthOverview";
import categories from "reducers/categories";

export default combineReducers({
  currentMonth,
  expenses,
  fixedCosts,
  categories,
});
