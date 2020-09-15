import React from "react";
import PropTypes from "prop-types";
import styles from "./Panel.module.scss";
import Loader from "components/Loader/Loader";

const Panel = ({ heading, children, isLoading }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>{heading}</h1>
      <div className={styles.panel}>{isLoading ? <Loader /> : children}</div>
    </div>
  );
};

Panel.propTypes = {
  heading: PropTypes.string,
};

export default Panel;
