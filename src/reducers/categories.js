import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_ERROR,
  FETCH_CATEGORIES_SUCCESS,
} from "constants/categories";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {};
    case FETCH_CATEGORIES_SUCCESS:
      return action.payload;
    case FETCH_CATEGORIES_ERROR:
      return {};
    default: {
      return state;
    }
  }
};
