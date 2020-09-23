import React from "react";
import PropTypes from "prop-types";
import {
  TableRow,
  TableRowHeader,
} from "components/BillsPanel/TableRow/TableRow";
import styles from "components/BillsPanel/BillsTable/BillsTable.module.scss";
import { isEmpty } from "utils/utils";
import { Empty } from "antd";

const BillsTable = ({ data, editBill }) => {
  return (
    <div className={styles.wrapper}>
      <TableRowHeader />
      {isEmpty(data) ? (
        <Empty />
      ) : (
        data.map((el) => (
          <TableRow rowData={el} key={el.id} editBill={editBill} />
        ))
      )}
    </div>
  );
};

BillsTable.propTypes = {
  setBillStatus: PropTypes.func,
};

export default BillsTable;
