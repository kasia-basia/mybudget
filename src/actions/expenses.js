import * as c from "constants/expenses";
import firebase from "firebaseConfig";

export const fetchExpenses = (monthId = "november2020") => (dispatch) => {
  dispatch({
    type: c.FETCH_EXPENSES,
  });
  const db = firebase.firestore();
  const docRef = db.collection("expenses").doc(monthId);

  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        dispatch({
          type: c.FETCH_EXPENSES_SUCCESS,
          payload: doc.data(),
        });
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      dispatch({
        type: c.FETCH_EXPENSES_ERROR,
        payload: error,
      });
    });
};
