import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import freeze from "redux-freeze";
import thunk from "redux-thunk";
import entities from "store/entities";
import genres from "store/modules/genres/reducers";
import movies from "store/modules/movies/reducers";

const rootReducer = combineReducers({
  entities,
  genres,
  movies
});

const makeStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(freeze, thunk))
  );
};

export default makeStore;
