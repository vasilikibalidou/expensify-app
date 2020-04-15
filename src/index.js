import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import "./styles/styles.scss";
import "react-dates/initialize";
import "./firebase/firebase";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <BrowserRouter><p>Loading...</p></BrowserRouter>,
  document.getElementById("root")
);

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(
    <BrowserRouter>{jsx}</BrowserRouter>,
    document.getElementById("root")
  );
})


