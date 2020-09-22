import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Panel from "components/Panel/Panel";
import FixedCostsSummary from "components/FixedCostsPanel/FixedCostsSummary/FixedCostsSummary";
import FixedCostsTable from "components/FixedCostsPanel/FixedCostsTable/FixedCostsTable";
import { connect } from "react-redux";
import { fetchCosts, editFixedCost } from "actions/monthOverview";
import {
  getSortedFixedCosts,
  getFixedCostsTotal,
  getFixedCostsPaid,
  getLoadingState,
  getIsEmpty,
} from "selectors/monthOverview";

const FixedCostsPanel = ({
  fetchData,
  data,
  paid,
  total,
  editFixedCost,
  isLoading,
  hasNoData,
}) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Panel heading={"Fixed costs"} isLoading={isLoading} hasNoData={hasNoData}>
      <FixedCostsSummary paid={paid} total={total} />
      <FixedCostsTable data={data} editFixedCost={editFixedCost} />
    </Panel>
  );
};

FixedCostsPanel.defaultProps = {
  data: [],
  isLoading: false,
};

FixedCostsPanel.propTypes = {
  fetchData: PropTypes.func.isRequired,
  sortedData: PropTypes.array,
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  data: getSortedFixedCosts(state),
  paid: getFixedCostsPaid(state),
  total: getFixedCostsTotal(state),
  isLoading: getLoadingState(state, "fixedCosts"),
  hasNoData: getIsEmpty(state, "fixedCosts"),
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchCosts()),
  editFixedCost: (id, newData) => dispatch(editFixedCost(id, newData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FixedCostsPanel);
