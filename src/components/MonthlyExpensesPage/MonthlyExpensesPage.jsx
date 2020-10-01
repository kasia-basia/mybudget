import React from "react";
import PropTypes from "prop-types";
import styles from "./MonthlyExpensesPage.module.scss";
import Header from "components/Header/Header";
import BillsPanel from "components/BillsPanel/BillsPanel";
import ExpensesPanel from "components/ExpensesPanel/ExpensesPanel";

const MonthlyExpensesPage = () => {
  return (
    <>
      <div className={styles.contentLeft}>
        <Header />
        <BillsPanel />
      </div>
      <div className={styles.contentRight}>
        <ExpensesPanel />
      </div>
    </>
  );
};

MonthlyExpensesPage.propTypes = {};

export default MonthlyExpensesPage;
