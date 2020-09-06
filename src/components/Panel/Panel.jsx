import React from "react";
import PropTypes from "prop-types";
import styles from "./Panel.module.scss";

const Panel = ({ heading, children }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>{heading}</h1>
      <div className={styles.panel}>{children}</div>
    </div>
  );
};

Panel.propTypes = {
    heading: PropTypes.string,
};

export default Panel;
