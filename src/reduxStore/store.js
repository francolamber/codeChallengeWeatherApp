import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const asyncFunctionMiddleware = (storeAPI) => (next) => (action) => {
  if (typeof action === "function") {
    return action(storeAPI.dispatch, storeAPI.getState);
  }

  return next(action);
};

const composedEnhancer = composeWithDevTools(
    applyMiddleware(asyncFunctionMiddleware)
  )

const store = createStore(rootReducer, composedEnhancer);

export default store;
