import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import useWindowSize from "utils/useWindowSize";
import AddButton from "components/ExpensesPanel/AddButton/AddButton";
import ExpenseRow from "components/ExpensesPanel/ExpensesTable/ExpensesRow/ExpensesRow";
import styles from "./ExpensesTable.module.scss";

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
      <AddButton />
    </div>
  );
};

ExpensesTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape),
};

export default ExpensesTable;