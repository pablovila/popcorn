import { combineReducers } from "redux";

const byId = (state = {}, action) => {
  if (
    action.response &&
    action.response.entities &&
    action.response.entities.genres
  ) {
    return {
      ...state,
      ...action.response.entities.genres
    };
  }

  return state;
};

const genres = combineReducers({
  byId
});

export default genres;
