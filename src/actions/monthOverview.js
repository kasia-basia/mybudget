import * as c from "constants/monthOverwiew";
import firebase from "firebaseConfig";
import { message } from "antd";
import { getMonthBoundary } from "utils/dateHelpers";

export const fetchExpenses = (startDate, endDate) => (dispatch) => {
  dispatch({
    type: c.FETCH_EXPENSES,
  });
  const db = firebase.firestore();
  const docRef = db
    .collection("expenses")
    .where("timestamp", ">", startDate.toDate())
    .where("timestamp", "<", endDate.toDate());

  docRef
    .get()
    .then((querySnapshot) => {
      const result = {};
      querySnapshot.forEach(function (doc) {
        result[doc.id] = {
          ...doc.data(),
          timestamp: doc.data().timestamp.toDate(),
        };
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
        result[doc.id] = {
          ...doc.data(),
          dueDate: doc.data().dueDate.toDate(),
        };
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

export const editFixedCost = (id, newData = {}) => (dispatch) => {
  dispatch({
    type: c.EDIT_FIXED_COST,
  });
  const db = firebase.firestore();
  const docRef = db.collection("fixedCosts");
  console.log(newData);
  docRef
    .doc(id)
    .update(newData)
    .then((data) => {
      dispatch({
        type: c.EDIT_FIXED_COST_SUCCESS,
        payload: { id, newData },
      });
      message.success("Saved", 2);
    })
    .catch((error) => {
      dispatch({
        type: c.EDIT_FIXED_COST_ERROR,
        payload: error,
      });
    });
};

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
      message.warn("Something went wrong. Please try again.", 2);
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
      message.warn("Something went wrong. Please try again.", 2);
    });
};

export const editExpense = (id, field, newValue) => (dispatch) => {
  dispatch({
    type: c.EDIT_EXPENSE,
  });

  const db = firebase.firestore();
  const docRef = db.collection("expenses");

  docRef
    .doc(id)
    .update({
      [field]: newValue,
    })
    .then(() => {
      dispatch({
        type: c.EDIT_EXPENSE_SUCCESS,
        payload: { id, newValue: [field, newValue] },
      });
      message.success("Saved", 2);
    })
    .catch((error) => {
      dispatch({
        type: c.EDIT_EXPENSE_ERROR,
        payload: error,
      });
      message.warn("Something went wrong. Please try again.", 2);
    });
};

export const setMonth = (date) => {
  return {
    type: c.SET_MONTH,
    payload: getMonthBoundary(date),
  };
};
