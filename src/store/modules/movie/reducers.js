import { combineReducers } from "redux";
import * as movieTypes from "store/entities/movie/types";

const item = (state = null, action) => {
  switch (action.type) {
    case movieTypes.FETCH_MOVIE_START:
      return null;
    case movieTypes.FETCH_MOVIE_SUCCESS:
      return action.response.result;
    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case movieTypes.FETCH_MOVIE_START:
      return true;
    case movieTypes.FETCH_MOVIE_SUCCESS:
    case movieTypes.FETCH_MOVIE_FAIL:
      return false;
    default:
      return state;
  }
};

const movie = combineReducers({
  item,
  isLoading
});

export default movie;
