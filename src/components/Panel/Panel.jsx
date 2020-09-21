import React from "react";
import PropTypes from "prop-types";
import styles from "./Panel.module.scss";
import Loader from "components/Loader/Loader";
import { Empty } from "antd";

const Panel = ({ heading, children, isLoading, hasNoData }) => {
  const content = () => {
    if (isLoading) return <Loader />;
    if (hasNoData) return <Empty />;
    return children;
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>{heading}</h1>
      <div className={styles.panel}>{content()}</div>
    </div>
  );
};

Panel.propTypes = {
  heading: PropTypes.string,
  hasNoData: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default Panel;
