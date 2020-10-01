import React from "react";
import PropTypes from "prop-types";
import styles from "./MonthSummaryPage.module.scss";
import Header from "components/Header/Header";

const MonthSummaryPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <div>
          Month summary
        </div>
      </div>
    </>
  );
};

MonthSummaryPage.propTypes = {};

export default MonthSummaryPage;
