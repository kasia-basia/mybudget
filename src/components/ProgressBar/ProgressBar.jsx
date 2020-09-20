import React from "react";
import PropTypes from "prop-types";
import styles from "components/ProgressBar/ProgressBar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ProgressBar = ({ value }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label} style={{ left: `${value}%` }}>
        {Math.round(value)}%
      </span>
      <div
        className={cx({ fill: true, completed: value === 100 })}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
};

export default ProgressBar;
