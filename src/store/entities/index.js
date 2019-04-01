import { combineReducers } from "redux";
import movies from "./movies/reducers";

const entities = combineReducers({
  movies
});

export default entities;
