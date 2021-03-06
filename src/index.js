import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "react-router";
import createHistory from "history/createBrowserHistory";
import App from "./App";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import "./styles/styles.scss";
import "react-dates/initialize";
import { firebase } from "./firebase/firebase";
import LoadingPage from "./components/LoadingPage";

const history = createHistory();

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <Router history={history}>{jsx}</Router>,
      document.getElementById("root")
    );
    hasRendered = true;
  }
}

ReactDOM.render(
  <Router history={history}><LoadingPage /></Router>,
  document.getElementById("root")
);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    })
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
