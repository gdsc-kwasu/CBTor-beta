/** @format */

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Login } from "./pages";
import PAGES_URL from "../router/router";

class Index extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={PAGES_URL.HOME} component={Home} />
          <Route exact path={PAGES_URL.LOGIN} component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Index;
