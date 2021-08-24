import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import "./i18n";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import reducers from "./store";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { options } from "./utilities/AlertOptions";

const store = createStore(reducers);

// TODO: add the redux devtool.

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <Provider store={store}>
        <App />
      </Provider>
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
