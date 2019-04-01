import { combineReducers } from "redux";
import * as moviesTypes from "@/store/entities/movies/types";

const items = (state = [], action) => {
  switch (action.type) {
    case moviesTypes.FETCH_POPULAR_MOVIES_SUCCESS:
      return [...state, ...action.response.result];
    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case moviesTypes.FETCH_POPULAR_MOVIES_START:
      return true;
    case moviesTypes.FETCH_POPULAR_MOVIES_SUCCESS:
    case moviesTypes.FETCH_POPULAR_MOVIES_FAIL:
      return false;
    default:
      return state;
  }
};

const feed = combineReducers({
  items,
  isLoading
});

export default feed;
