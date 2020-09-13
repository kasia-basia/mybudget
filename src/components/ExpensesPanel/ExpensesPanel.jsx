import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ExpensesTable from "components/ExpensesPanel/ExpensesTable/ExpensesTable";
import AddButton from "components/ExpensesPanel/AddButton/AddButton";
import mockData from "./data";
import styles from "./ExpensesPanel.module.scss";
import Panel from "components/Panel/Panel";
import firebase from "firebaseConfig";

const ExpensesPanel = () => {
  const [expenses, setExpenses] = React.useState([]);

  const fetchData = async () => {
    const db = firebase.firestore();
    const docRef = db.collection("expenses").doc("november2020");

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setExpenses(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  console.log(expenses);

  return (
    <Panel heading={"Daily expenses"}>
      <ExpensesTable data={expenses} />
    </Panel>
  );
};

ExpensesPanel.propTypes = {};

const mapDispatchToProps = (state) => {};

export default connect(null, mapDispatchToProps)(ExpensesPanel);
