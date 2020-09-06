import React from "react";
import "assets/styles/index.scss";
import styles from "components/App/App.module.scss";
import Sidebar from "components/Sidebar/Sidebar";
import ExpensesPanel from "components/ExpensesPanel/ExpensesPanel";
import Header from "components/Header/Header";
import FixedCostsPanel from "components/FixedCostsPanel/FixedCostsPanel";

function App() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <Header />
          <FixedCostsPanel />
        </div>
        <div className={styles.contentRight}>
          <ExpensesPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
