import React from "react";
import { Switch } from "antd";
import classNames from "classnames/bind";
import dayjs from "dayjs";
import styles from "./TableRow.module.scss";

export const TableRowHeader = () => (
  <div className={classNames(styles.wrapper, styles.headerWrapper)}>
    <div className={styles.name}> Name </div>
    <div className={styles.amount}> Amount </div>
    <div className={styles.due}> Due </div>
    <div className={styles.paid}> Status </div>
  </div>
);

export const TableRow = ({ rowData, setBillStatus }) => {
  const { name, amount, dueDate, paid, id } = rowData;
  const formattedDate = dayjs.unix(dueDate).format("D.M");
  const cx = classNames.bind(styles);

  return (
    <div className={cx({ wrapper: true, status: paid })}>
      <div className={styles.name}> {name} </div>
      <div className={styles.amount}> {amount} PLN</div>
      <div className={styles.due}> {formattedDate} </div>
      <div className={styles.paid}>
        <Switch
          checked={paid}
          size="small"
          onClick={() => {
            setBillStatus(id);
          }}
        />
      </div>
    </div>
  );
};