import React from "react";
import PropTypes from "prop-types";
import {
  TableRow,
  TableRowHeader,
} from "components/FixedCostsPanel/FixedCostsTable/TableRow/TableRow";
import styles from "./FixedCostsTable.module.scss";

const FixedCostsTable = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <TableRowHeader />
      {data.map((el, i) => (
        <TableRow rowData={el} key={i} />
      ))}
    </div>
  );
};

FixedCostsTable.propTypes = {};

export default FixedCostsTable;
