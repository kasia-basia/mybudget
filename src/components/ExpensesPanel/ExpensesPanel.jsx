import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ExpensesTable from "components/ExpensesPanel/ExpensesTable/ExpensesTable";
import Panel from "components/Panel/Panel";
import { fetchExpenses } from "actions/monthOverview";
import { getExpenses, getExpensesByDay } from "selectors/monthOverview";

const ExpensesPanel = ({ fetchData, sortedData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Panel heading={"Daily expenses"}>
      <ExpensesTable data={sortedData} />
    </Panel>
  );
};

ExpensesPanel.defaultProps = {
  data: [],
};

ExpensesPanel.propTypes = {
  fetchData: PropTypes.func.isRequired,
  sortedData: PropTypes.array,
};

const mapStateToProps = (state) => ({
  sortedData: getExpensesByDay(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (id) => dispatch(fetchExpenses(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesPanel);
