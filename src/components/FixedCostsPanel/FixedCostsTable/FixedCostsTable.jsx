import React from "react";
import PropTypes from "prop-types";
import {
  TableRow,
  TableRowHeader,
} from "components/FixedCostsPanel/FixedCostsTable/TableRow/TableRow";
import styles from "./FixedCostsTable.module.scss";

const FixedCostsTable = ({ data, setBillStatus }) => {
  return (
    <div className={styles.wrapper}>
      <TableRowHeader />
      {data.map((el) => (
        <TableRow rowData={el} key={el.id} setBillStatus={setBillStatus} />
      ))}
    </div>
  );
};

FixedCostsTable.propTypes = {
  setBillStatus: PropTypes.func,
};

export default FixedCostsTable;
