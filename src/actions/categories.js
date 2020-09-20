import firebase from "firebaseConfig";
import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
  FETCH_CATEGORIES,
} from "constants/categories";

export const fetchCategories = () => (dispatch) => {
  dispatch({
    type: FETCH_CATEGORIES,
  });
  const db = firebase.firestore();
  const docRef = db.collection("categories");

  docRef
    .get()
    .then((querySnapshot) => {
      const result = {};
      querySnapshot.forEach((doc) => {
        result[doc.id] = doc.data();
      });
      dispatch({
        type: FETCH_CATEGORIES_SUCCESS,
        payload: result,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_CATEGORIES_ERROR,
        payload: error,
      });
    });
};
