import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/Login";
import Packages from "./containers/Packages";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/packages">
        <Packages />
      </Route>
    </Switch>
  );
};

export default Routes;
