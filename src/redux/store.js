/** @format */

import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers/rootReducer";
import { loadState } from "./localStorage"

const LoggerMiddleware = createLogger();
const persistedState = loadState();
const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(LoggerMiddleware, ThunkMiddleware)
);

export default store;
