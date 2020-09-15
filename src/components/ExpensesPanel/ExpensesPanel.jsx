import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ExpensesTable from "components/ExpensesPanel/ExpensesTable/ExpensesTable";
import Panel from "components/Panel/Panel";
import { fetchExpenses } from "actions/monthOverview";
import {
  getExpenses,
  getExpensesByDay,
  getLoadingState,
} from "selectors/monthOverview";

const ExpensesPanel = ({ fetchData, sortedData, isLoading }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Panel heading={"Daily expenses"} isLoading={isLoading}>
      <ExpensesTable data={sortedData} />
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
  fetchData: (id) => dispatch(fetchExpenses(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesPanel);
