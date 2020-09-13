import React from "react";
import PropTypes from "prop-types";
import styles from "./PercentageBar.module.scss";

const PercentageBar = ({value}) => {
  return <div className={styles.wrapper}>
      <div className={styles.fill} style={{width: `${value}%`}}/>
  </div>;
};

PercentageBar.propTypes = {
  value: PropTypes.number.isRequired,
};

export default PercentageBar;
