import React from "react";
import { Route, Switch } from "react-router-dom";
import ExpenseDashboardPage from "./components/ExpenseDashboardPage";
import AddExpensePage from "./components/AddExpensePage";
import EditExpensePage from "./components/EditExpensePage";
import NotFoundPage from "./components/NotFoundPage";
import LoginPage from "./components/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const App = () => {
  return (
    <div>
      <Switch>
        <PublicRoute exact path="/" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
