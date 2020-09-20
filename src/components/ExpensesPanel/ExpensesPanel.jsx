import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ExpensesTable from "components/ExpensesPanel/ExpensesTable/ExpensesTable";
import Panel from "components/Panel/Panel";
import AddButton from "components/ExpensesPanel/AddButton/AddButton";
import { fetchExpenses } from "actions/monthOverview";
import { fetchCategories } from "actions/categories";
import { getExpensesByDay, getLoadingState } from "selectors/monthOverview";

const ExpensesPanel = ({
  onFetchData,
  onFetchCategories,
  sortedData,
  isLoading,
}) => {
  useEffect(() => {
    onFetchData();
  }, [onFetchData]);

  useEffect(() => {
    onFetchCategories();
  }, [onFetchCategories]);

  return (
    <Panel heading={"Daily expenses"} isLoading={isLoading}>
      <ExpensesTable data={sortedData} />
      <AddButton />
    </Panel>
  );
};

ExpensesPanel.defaultProps = {
  data: [],
  isLoading: false,
};

ExpensesPanel.propTypes = {
  fetchData: PropTypes.func.isRequired,
  sortedData: PropTypes.array,
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  sortedData: getExpensesByDay(state),
  isLoading: getLoadingState(state, "expenses"),
});

const mapDispatchToProps = (dispatch) => ({
  onFetchData: () => dispatch(fetchExpenses()),
  onFetchCategories: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesPanel);
