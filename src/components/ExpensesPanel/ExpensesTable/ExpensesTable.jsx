import React from "react";
import { format } from "date-fns";
import PropTypes from "prop-types";
import styles from "./ExpensesTable.module.scss";
import CategoryBadge from "components/CategoryBadge/CategoryBadge";
import useWindowSize from "utils/useWindowSize";

const ExpenseRow = ({ rowData }) => {
  const { name, amount, category } = rowData;
  return (
    <div className={styles.rowWrapper}>
      <div className={styles.name}> {name}</div>
      <div className={styles.amount}> {amount}</div>
      <div className={styles.category}>
        <CategoryBadge category={category} />
      </div>
    </div>
  );
};

const DateRow = ({ date }) => {
  const formattedDate = format(new Date(date), "EEEE, d.M");
  return (
    <div className={styles.date} key={date}>
      {formattedDate}
    </div>
  );
};

DateRow.propTypes = { date: PropTypes.string };

const ExpensesTable = ({ data }) => {
  const { windowHeight } = useWindowSize();

  return (
    <div
      style={{ height: `${windowHeight - 150}px` }}
      className={styles.tableWrapper}
    >
      {Object.entries(data).map(([date, expenses]) => (
        <>
          <DateRow date={date} />
          {expenses.map((el) => (
            <ExpenseRow key={el.id} rowData={el} />
          ))}
        </>
      ))}
    </div>
  );
};

ExpensesTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape)
};

export default ExpensesTable;
