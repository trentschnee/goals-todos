import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reducer from "./reducers";
import middleware from "./middleware";
import { Provider } from "react-redux";
import { createStore } from "redux";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
