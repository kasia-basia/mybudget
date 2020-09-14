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
