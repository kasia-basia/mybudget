import React from "react";
import propTypes from "prop-types";
import styles from "./ExpensesRow.module.scss";
import { Tag } from "antd";
import { getColorFromCategory } from "utils/utils";

const ExpenseRow = ({ rowData, categories }) => {
  const { name, amount, category } = rowData;

  return (
    <div className={styles.rowWrapper}>
      <div className={styles.name}> {name}</div>
      <div className={styles.amount}> {amount}</div>
      <div className={styles.category}>
        <Tag color={getColorFromCategory(categories, category)}>{category}</Tag>
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
