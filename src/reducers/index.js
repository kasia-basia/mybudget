import { combineReducers } from "redux";
import { expenses, bills, currentMonth } from "reducers/monthOverview";
import categories from "reducers/categories";

export default combineReducers({
  currentMonth,
  expenses,
  bills,
  categories,
});
