import * as c from "constants/monthOverwiew";
import firebase from "firebaseConfig";
import { message } from "antd";

export const fetchExpenses = (
  monthBeginning = "1604188800",
  monthEnd = "1606867199"
) => (dispatch) => {
  dispatch({
    type: c.FETCH_EXPENSES,
  });
  const db = firebase.firestore();
  const docRef = db
    .collection("expenses")
    .where("timestamp", ">", monthBeginning)
    .where("timestamp", "<", monthEnd);

  docRef
    .get()
    .then((querySnapshot) => {
      const result = {};
      querySnapshot.forEach(function (doc) {
        result[doc.id] = doc.data();
      });
      dispatch({
        type: c.FETCH_EXPENSES_SUCCESS,
        payload: result,
      });
    })
    .catch(function (error) {
      dispatch({
        type: c.FETCH_EXPENSES_ERROR,
        payload: error,
      });
    });
};

export const fetchCosts = () => (dispatch) => {
  dispatch({
    type: c.FETCH_FIXED_COSTS,
  });
  const db = firebase.firestore();
  const docRef = db.collection("fixedCosts");

  docRef
    .get()
    .then((data) => {
      const result = {};
      data.docs.forEach((doc) => {
        const data = doc.data();
        const id = doc.id;
        result[id] = data;
      });
      dispatch({
        type: c.FETCH_FIXED_COSTS_SUCCESS,
        payload: result,
      });
    })
    .catch((error) => {
      dispatch({
        type: c.FETCH_FIXED_COSTS_ERROR,
        payload: error,
      });
    });
};

export const setStatus = (id) => ({
  type: c.SET_BILL_STATUS,
  id,
});

export const addExpense = (expense) => (dispatch) => {
  dispatch({
    type: c.ADD_EXPENSE,
  });

  const db = firebase.firestore();
  const docRef = db.collection("expenses");

  docRef
    .add(expense)
    .then((data) => {
      // TODO only add to state when date is in the current month
      dispatch({
        type: c.ADD_EXPENSE_SUCCESS,
        payload: { ...expense, id: data.id },
      });
      message.success("Item added", 2);
    })
    .catch((error) => {
      dispatch({
        type: c.ADD_EXPENSE_ERROR,
        payload: error,
      });
    });
};

export const deleteExpense = (id) => (dispatch) => {
  dispatch({
    type: c.DELETE_EXPENSE,
  });

  const db = firebase.firestore();
  const docRef = db.collection("expenses");

  docRef
    .doc(id)
    .delete()
    .then(() => {
      dispatch({
        type: c.DELETE_EXPENSE_SUCCESS,
        payload: { id },
      });
      message.success("Item deleted", 2);
    })
    .catch((error) => {
      dispatch({
        type: c.DELETE_EXPENSE_ERROR,
        payload: error,
      });
    });
};
