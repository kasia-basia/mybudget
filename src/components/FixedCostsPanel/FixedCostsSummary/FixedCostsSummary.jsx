import React from "react";
import PropTypes from "prop-types";
import styles from "./FixedCostsSummary.module.scss";
import PercentageBar from "components/FixedCostsPanel/PercentageBar/PercentageBar";

const FixedCostsSummary = ({ paid, total }) => {
  const percentage = (paid / total) * 100;
  return (
    <div className={styles.wrapper}>
      <div className={styles.amountWrapper}>
        <div className={styles.amount}>{paid}</div>
        <div className={styles.amountCaption}>paid</div>
      </div>
      <PercentageBar value={percentage} />
      <div className={styles.amountWrapper}>
        <div className={styles.amount}>{total}</div>
        <div className={styles.amountCaption}>total</div>
      </div>
    </div>
  );
};

FixedCostsSummary.propTypes = {
  paid: PropTypes.number,
  total: PropTypes.number,
};

export default FixedCostsSummary;