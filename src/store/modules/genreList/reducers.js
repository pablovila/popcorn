import { combineReducers } from "redux";
import * as genresTypes from "store/entities/genres/types";

const items = (state = [], action) => {
  switch (action.type) {
    case genresTypes.FETCH_GENRES_SUCCESS:
      return [...state, ...action.response.result];
    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case genresTypes.FETCH_GENRES_START:
      return true;
    case genresTypes.FETCH_GENRES_SUCCESS:
    case genresTypes.FETCH_GENRES_FAIL:
      return false;
    default:
      return state;
  }
};

const genreList = combineReducers({
  items,
  isLoading
});

export default genreList;
