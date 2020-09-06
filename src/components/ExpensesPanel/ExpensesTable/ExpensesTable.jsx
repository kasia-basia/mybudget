import React from "react";
import PropTypes from "prop-types";
import styles from "./ExpensesTable.module.scss";

const TableRow = ({ rowData }) => {
  const { name, amount } = rowData;
  return (
    <div className={styles.rowWrapper}>
      <div className={styles.name}> {name}</div>
      <div className={styles.amount}> {amount}</div>
    </div>
  );
};

const ExpensesTable = ({ data }) => {
  return (
    <div className={styles.tableWrapper}>
      {data.map((el) => (
        <TableRow key={el.id} rowData={el} />
      ))}
    </div>
  );
};

ExpensesTable.propTypes = {};

export default ExpensesTable;
