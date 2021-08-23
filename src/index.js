import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import "./i18n";

import App from "./App";
import reducers from "./store";

import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(reducers);

// TODO: add the redux devtool.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
