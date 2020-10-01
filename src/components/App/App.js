import React from "react";
import "assets/styles/index.scss";
import styles from "components/App/App.module.scss";
import Sidebar from "components/Sidebar/Sidebar";
import MonthlyExpensesPage from "components/MonthlyExpensesPage/MonthlyExpensesPage";
import MonthSummaryPage from "components/MonthSummaryPage/MonthSummaryPage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { getMonthUrl } from "utils/dateHelpers";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Sidebar />
        <div className={styles.content}>
          <Switch>
            <Route exact path="/">
              <Redirect to={getMonthUrl()} />
            </Route>
            <Route path="/:month">
              <MonthlyExpensesPage />
            </Route>
            <Route path="/summary">
              <MonthSummaryPage />
            </Route>
            <Route path="*">
              <div>Not found</div>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
