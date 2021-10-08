import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { clientMiddleware } from "./clientMiddleware";
import { axiosClient } from "../api/axios.config";
import rootReducer from "./combineReducers";

function configureStore(initialState) {
  let middlewares = [clientMiddleware(axiosClient)];

  if (process.env.NODE_ENV === "development") {
    middlewares = [...middlewares];
  }
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, initialState, composedEnhancers);

  return store;
}

export const store = configureStore({});
