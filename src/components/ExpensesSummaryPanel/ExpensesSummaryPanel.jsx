import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Panel from "components/Panel/Panel";
import { getTotalExpenses } from "selectors/monthOverview";
import styles from "./ExpensesSummaryPanel.module.scss";

const ExpensesSummaryPanel = ({ totalExpenses, monthlyAllowance = 2000 }) => {
  console.log(totalExpenses);
  return <Panel heading={"Summary"}>{totalExpenses}</Panel>;
};

ExpensesSummaryPanel.propTypes = {
  totalExpenses: PropTypes.number,
  monthlyAllowance: PropTypes.number,
};

const mapStateToProps = (state) => ({
  totalExpenses: getTotalExpenses(state),
});

export default connect(mapStateToProps)(ExpensesSummaryPanel);
