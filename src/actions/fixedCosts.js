import * as c from "constants/fixedCosts";
import firebase from "firebaseConfig";

export const fetchCosts = () => (dispatch) => {
  dispatch({
    type: c.FETCH_FIXED_COSTS,
  });
  const db = firebase.firestore();
  const docRef = db.collection("fixedCosts");

  docRef
    .get()
    .then((data) => {
      const obj = data.docs.map((doc) => doc.data());
      dispatch({
        type: c.FETCH_FIXED_COSTS_SUCCESS,
        payload: obj,
      });
    })
    .catch((error) => {
      dispatch({
        type: c.FETCH_FIXED_COSTS_ERROR,
        payload: error,
      });
    });
};
