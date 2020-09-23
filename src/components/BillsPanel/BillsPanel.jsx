import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Panel from "components/Panel/Panel";
import BillsSummary from "components/BillsPanel/BillsSummary/BillsSummary";
import BillsTable from "components/BillsPanel/BillsTable/BillsTable";
import { connect } from "react-redux";
import { fetchCosts, editBill } from "actions/monthOverview";
import {
  getSortedBills,
  getBillsTotal,
  getBillsPaid,
  getLoadingState,
  getIsEmpty,
} from "selectors/monthOverview";

const BillsPanel = ({
  fetchData,
  data,
  paid,
  total,
  editBill,
  isLoading,
  hasNoData,
}) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Panel heading={"Bills"} isLoading={isLoading} hasNoData={hasNoData}>
      <BillsSummary paid={paid} total={total} />
      <BillsTable data={data} editBill={editBill} />
    </Panel>
  );
};

BillsPanel.defaultProps = {
  data: [],
  isLoading: false,
};

BillsPanel.propTypes = {
  fetchData: PropTypes.func.isRequired,
  sortedData: PropTypes.array,
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  data: getSortedBills(state),
  paid: getBillsPaid(state),
  total: getBillsTotal(state),
  isLoading: getLoadingState(state, "bills"),
  hasNoData: getIsEmpty(state, "bills"),
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchCosts()),
  editBill: (id, newData) => dispatch(editBill(id, newData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BillsPanel);
