import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs"
import useWindowSize from "utils/useWindowSize";
import ExpenseRow from "components/ExpensesPanel/ExpensesTable/ExpensesRow/ExpensesRow";
import styles from "./ExpensesTable.module.scss";

const DateRow = ({ date }) => {
  const formattedDate = dayjs.unix(date).format('dddd, D.M');
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
      {Object.entries(data).map(([timestamp, expenses]) => (
        <>
          <DateRow date={timestamp} />
          {expenses.map((el) => (
            <ExpenseRow key={el.id} rowData={el} />
          ))}
        </>
      ))}
    </div>
  );
};

ExpensesTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape),
};

export default ExpensesTable;
