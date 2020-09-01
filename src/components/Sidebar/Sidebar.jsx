import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styles from "./styles.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
};

Sidebar.propTypes = {};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Sidebar);
