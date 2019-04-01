import { combineReducers } from "redux";

const byId = (state = {}, action) => {
  if (
    action.response &&
    action.response.entities &&
    action.response.entities.movies
  ) {
    return {
      ...state,
      ...action.response.entities.movies
    };
  }

  return state;
};

const movies = combineReducers({
  byId
});

export default movies;
