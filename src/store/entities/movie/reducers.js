import { combineReducers } from "redux";

const byId = (state = {}, action) => {
  if (
    action.response &&
    action.response.entities &&
    action.response.entities.movie
  ) {
    return {
      ...state,
      ...action.response.entities.movie
    };
  }

  return state;
};

const movie = combineReducers({
  byId
});

export default movie;
