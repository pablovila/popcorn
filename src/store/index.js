import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import freeze from "redux-freeze";
import thunk from "redux-thunk";
import entities from "@/store/entities";
import feed from "@/store/modules/feed/reducers";

const rootReducer = combineReducers({
  entities,
  feed
});

const makeStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(freeze, thunk))
  );
};

export default makeStore;
