/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./assets/styles/app.scss";
import store from "./redux/store";
import { saveState } from "./redux/localStorage"
import Index from "./pages/Index";
import Alert from "./utilities/Alert";

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <Alert>
      <Index />
    </Alert>
  </Provider>,
  document.querySelector("#root")
);
