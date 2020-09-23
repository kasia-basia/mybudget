import React from "react";
import PropTypes from "prop-types";
import styles from "components/BillsPanel/BillsSummary/BillsSummary.module.scss";
import ProgressBar from "components/ProgressBar/ProgressBar";

const BillsSummary = ({ paid, total }) => {
  const percentage = (paid / total) * 100 || 0;
  return (
    <div className={styles.wrapper}>
      <div className={styles.amountWrapper}>
        <div className={styles.amount}>{paid}</div>
        <div className={styles.amountCaption}>paid</div>
      </div>
      <ProgressBar value={percentage} />
      <div className={styles.amountWrapper}>
        <div className={styles.amount}>{total}</div>
        <div className={styles.amountCaption}>total</div>
      </div>
    </div>
  );
};

BillsSummary.propTypes = {
  paid: PropTypes.number,
  total: PropTypes.number,
};

export default BillsSummary;
