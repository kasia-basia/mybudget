import React from "react";
import propTypes from "prop-types";
import styles from "./ExpensesRow.module.scss";
import { Tag } from "antd";

const ExpenseRow = ({ rowData }) => {
  const { name, amount, category } = rowData;

  return (
    <div className={styles.rowWrapper}>
      <div className={styles.name}> {name}</div>
      <div className={styles.amount}> {amount}</div>
      <div className={styles.category}>
        <Tag color="blue">{category}</Tag>
      </div>
    </div>
  );
};

ExpenseRow.propTypes = {
  rowData: propTypes.shape({
    name: propTypes.string,
    amount: propTypes.number,
    category: propTypes.string,
  }),
};

export default ExpenseRow;
