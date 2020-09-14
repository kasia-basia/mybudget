import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Panel from "components/Panel/Panel";
import FixedCostsSummary from "components/FixedCostsPanel/FixedCostsSummary/FixedCostsSummary";
import FixedCostsTable from "components/FixedCostsPanel/FixedCostsTable/FixedCostsTable";
import { connect } from "react-redux";
import { fetchCosts, setStatus } from "actions/monthOverview";
import {
  getSortedFixedCosts,
  getFixedCostsTotal,
  getFixedCostsPaid,
} from "selectors/monthOverview";

const FixedCostsPanel = ({ fetchData, data, paid, total, setBillStatus }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Panel heading={"Fixed costs"}>
      <FixedCostsSummary paid={paid} total={total} />
      <FixedCostsTable data={data} setBillStatus={setBillStatus} />
    </Panel>
  );
};

FixedCostsPanel.defaultProps = {
  data: [],
};

FixedCostsPanel.propTypes = {
  fetchData: PropTypes.func.isRequired,
  sortedData: PropTypes.array,
};

const mapStateToProps = (state) => ({
  data: getSortedFixedCosts(state),
  paid: getFixedCostsPaid(state),
  total: getFixedCostsTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchCosts()),
  setBillStatus: (id) => dispatch(setStatus(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FixedCostsPanel);
