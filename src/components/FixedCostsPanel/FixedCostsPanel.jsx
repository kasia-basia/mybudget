import React from "react";
import PropTypes from "prop-types";
import Panel from "components/Panel/Panel";
import ExpensesTable from "components/ExpensesPanel/ExpensesTable/ExpensesTable";
import FixedCostsSummary from "components/FixedCostsPanel/FixedCostsSummary/FixedCostsSummary";
import styles from "./FixedCostsPanel.module.scss";
import FixedCostsTable from "components/FixedCostsPanel/FixedCostsTable/FixedCostsTable";
import sampleData from "./data";

const FixedCostsPanel = () => {
  return (
    <Panel heading={"Fixed costs"}>
      <FixedCostsSummary paid={109.5} total={545.0} />
        <FixedCostsTable data={sampleData}/>
    </Panel>
  );
};

FixedCostsPanel.propTypes = {};

export default FixedCostsPanel;
