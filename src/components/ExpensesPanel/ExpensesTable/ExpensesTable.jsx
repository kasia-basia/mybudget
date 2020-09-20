import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import useWindowSize from "utils/useWindowSize";
import ExpenseRow from "components/ExpensesPanel/ExpensesTable/ExpensesRow/ExpensesRow";
import styles from "./ExpensesTable.module.scss";

const ExpensesTable = ({ data }) => {
  const { windowHeight } = useWindowSize();

  return (
    <div
      style={{ height: `${windowHeight - 150}px` }}
      className={styles.tableWrapper}
    >
      {Object.entries(data).map(([timestamp, expenses]) => (
        <div className={styles.rowWrapper}>
          <div className={styles.date}>
            {dayjs.unix(timestamp).format("ddd / D.M")}
          </div>
          <div className={styles.dailyExpenses}>
            {expenses.map((el) => (
              <ExpenseRow key={el.id} rowData={el} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

ExpensesTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape),
};

export default ExpensesTable;
