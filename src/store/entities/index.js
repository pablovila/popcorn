import { combineReducers } from "redux";
import genres from "./genres/reducers";
import movies from "./movies/reducers";
import movie from "./movie/reducers";

const entities = combineReducers({
  genres,
  movies,
  movie
});

export default entities;
