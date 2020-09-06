import React from "react";
import PropTypes from "prop-types";
import ExpensesTable from "components/ExpensesPanel/ExpensesTable/ExpensesTable";
import AddButton from "components/ExpensesPanel/AddButton/AddButton";
import mockData from "./data";
import styles from "./ExpensesPanel.module.scss";
import Panel from "components/Panel/Panel";

const ExpensesPanel = () => {
  return (
    <Panel heading={'Daily expenses'}>
      <ExpensesTable data={mockData} />
    </Panel>
  );
};

ExpensesPanel.propTypes = {};

export default ExpensesPanel;
