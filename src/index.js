import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import configureStore from "./store/configureStore";
import "./styles/styles.scss";
import "react-dates/initialize";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <BrowserRouter>{jsx}</BrowserRouter>,
  document.getElementById("root")
);
