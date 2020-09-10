import React from "react";
import propTypes from "prop-types";
import CategoryBadge from "components/CategoryBadge/CategoryBadge";
import { ReactComponent as Edit } from "assets/icons/edit.svg";
import { ReactComponent as Delete } from "assets/icons/delete.svg";
import styles from "./ExpensesRow.module.scss";

const ExpenseRow = ({ rowData }) => {
  const { name, amount, category } = rowData;

  return (
    <div className={styles.rowWrapper}>
      <div className={styles.name}> {name}</div>
      <div className={styles.amount}> {amount}</div>
      <div className={styles.category}>
        <CategoryBadge category={category} />
      </div>
      <div className={styles.icons}>
          <Edit />
          <Delete />
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
