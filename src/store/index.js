import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import freeze from "redux-freeze";
import thunk from "redux-thunk";
import entities from "store/entities";
import genreList from "store/modules/genreList/reducers";

const rootReducer = combineReducers({
  entities,
  genreList
});

const makeStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(freeze, thunk))
  );
};

export default makeStore;
