import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "./styles/styles.scss";
import "react-dates/initialize";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Water bill", amount: 500, createdAt: 3000 })
);
store.dispatch(
  addExpense({ description: "Gas bill", amount: 600, createdAt: 2000 })
);
store.dispatch(
  addExpense({ description: "Rent", amount: 1000, createdAt: 1000 })
);
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <BrowserRouter>{jsx}</BrowserRouter>,
  document.getElementById("root")
);
