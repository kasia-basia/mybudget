import React from "react";
import PropTypes from "prop-types";
import styles from "./FixedCostsPanel.module.scss";
import Panel from "components/Panel/Panel";
import ExpensesTable from "components/ExpensesPanel/ExpensesTable/ExpensesTable";

const FixedCostsPanel = () => {
  return (
    <Panel heading={"Fixed costs"}>
      Hello
    </Panel>
  );
};

FixedCostsPanel.propTypes = {};

export default FixedCostsPanel;
