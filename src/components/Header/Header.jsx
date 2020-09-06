import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.scss";

const Header = () => {
  return <div className={styles.wrapper}>
      <h1 className={styles.heading}>
          November
      </h1>
  </div>;
};

Header.propTypes = {};

export default Header;
