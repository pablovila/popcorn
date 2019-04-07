import { combineReducers } from "redux";
import * as moviesTypes from "store/entities/movies/types";

const items = (state = [], action) => {
  switch (action.type) {
    case moviesTypes.FETCH_MOVIES_BY_GENRE_START:
      return [];
    case moviesTypes.FETCH_MOVIES_BY_GENRE_SUCCESS:
      return [...state, ...action.response.result];
    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case moviesTypes.FETCH_MOVIES_BY_GENRE_START:
      return true;
    case moviesTypes.FETCH_MOVIES_BY_GENRE_SUCCESS:
    case moviesTypes.FETCH_MOVIES_BY_GENRE_FAIL:
      return false;
    default:
      return state;
  }
};

const movies = combineReducers({
  items,
  isLoading
});

export default movies;
