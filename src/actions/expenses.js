import * as c from "constants/expenses";
import firebase from "firebaseConfig";

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
