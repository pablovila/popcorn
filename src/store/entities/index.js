import { combineReducers } from "redux";
import genres from "./genres/reducers";
import movies from "./movies/reducers";

const entities = combineReducers({
  genres,
  movies
});

export default entities;
