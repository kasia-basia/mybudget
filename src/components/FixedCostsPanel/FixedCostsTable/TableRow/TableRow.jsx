import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "components/FixedCostsPanel/FixedCostsTable/TableRow/TableRow.module.scss";

export const TableRowHeader = () => (
  <div className={classNames(styles.wrapper, styles.headerWrapper)}>
    <div className={styles.name}> Name </div>
    <div className={styles.amount}> Amount </div>
    <div className={styles.due}> Due </div>
    <div className={styles.paid}> Status </div>
  </div>
);

export const TableRow = ({ rowData }) => {
  const { name, amount, dueDate, paid } = rowData;
  const [status, setStatus] = useState(false);

  const cx = classNames.bind(styles);

  return (
    <div className={cx({ wrapper: true, status: status })}>
      <div className={styles.name}> {name} </div>
      <div className={styles.amount}> {amount} PLN</div>
      <div className={styles.due}> {dueDate} </div>
      <div className={styles.paid}>
        <input
          type="checkbox"
          value={status}
          onClick={() => setStatus((prevStatus) => !prevStatus)}
        />
      </div>
    </div>
  );
};
