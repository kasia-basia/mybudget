import React from "react";
import styles from "./styles.module.scss";
import Sidebar from "components/Sidebar/Sidebar";
import ExpensesPanel from "components/ExpensesPanel/ExpensesPanel";
import "assets/styles/index.scss";

function App() {
  return (
    <div className={styles.wrapper}>
      <Sidebar/>
      <div className={styles.content}>
          <ExpensesPanel/>
      </div>
    </div>
  );
}

export default App;
