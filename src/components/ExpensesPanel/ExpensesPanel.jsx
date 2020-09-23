import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ExpensesTable from "components/ExpensesPanel/ExpensesTable/ExpensesTable";
import Panel from "components/Panel/Panel";
import AddButton from "components/ExpensesPanel/AddButton/AddButton";
import { fetchExpenses } from "actions/monthOverview";
import { fetchCategories } from "actions/categories";
import {
  getExpensesByDay,
  getLoadingState,
  getIsEmpty,
  getCurrentMonth,
} from "selectors/monthOverview";

const ExpensesPanel = ({
  onFetchData,
  onFetchCategories,
  sortedData,
  isLoading,
  hasNoData,
  currentMonth,
}) => {

  useEffect(() => {
    onFetchData(currentMonth.start, currentMonth.end);
  }, [onFetchData, currentMonth.start, currentMonth.end]);

  useEffect(() => {
    onFetchCategories();
  }, [onFetchCategories]);

  return (
    <>
      <Panel
        heading={"Daily expenses"}
        isLoading={isLoading}
        hasNoData={hasNoData}
      >
        <ExpensesTable data={sortedData} />
      </Panel>
      <AddButton />
    </>
  );
};

ExpensesPanel.defaultProps = {
  data: [],
  isLoading: false,
  hasNoData: false,
};

ExpensesPanel.propTypes = {
  onFetchData: PropTypes.func.isRequired,
  onFetchCategories: PropTypes.func.isRequired,
  sortedData: PropTypes.array,
  isLoading: PropTypes.bool,
  hasNoData: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  sortedData: getExpensesByDay(state),
  currentMonth: getCurrentMonth(state),
  isLoading: getLoadingState(state, "expenses"),
  hasNoData: getIsEmpty(state, "expenses"),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchData: (startDate, endDate) =>
    dispatch(fetchExpenses(startDate, endDate)),
  onFetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesPanel);
