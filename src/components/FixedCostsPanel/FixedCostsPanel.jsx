import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Panel from "components/Panel/Panel";
import FixedCostsSummary from "components/FixedCostsPanel/FixedCostsSummary/FixedCostsSummary";
import FixedCostsTable from "components/FixedCostsPanel/FixedCostsTable/FixedCostsTable";
import { connect } from "react-redux";
import { fetchCosts } from "actions/fixedCosts";
import {
  getFixedCosts,
  getFixedCostsTotal,
  getFixedCostsPaid,
} from "selectors/fixedCosts";

const FixedCostsPanel = ({ fetchData, data, paid, total }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Panel heading={"Fixed costs"}>
      <FixedCostsSummary paid={paid} total={total} />
      <FixedCostsTable data={data} />
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
  data: getFixedCosts(state),
  paid: getFixedCostsPaid(state),
  total: getFixedCostsTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchCosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FixedCostsPanel);
