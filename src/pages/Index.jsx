/** @format */

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  Components,
  ForgotPwd,
  ResetSuccess,
} from "./pages";
import PAGES_URL from "../router/router";

class Index extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={PAGES_URL.HOME} component={Home} />
          <Route exact path={PAGES_URL.LOGIN} component={Login} />
          <Route exact path={PAGES_URL.REGISTER} component={Register} />
          <Route exact path={PAGES_URL.COMPONENTS} component={Components} />
          <Route exact path={PAGES_URL.FORGOT_PASSWORD} component={ForgotPwd} />
          <Route
            exact
            path={PAGES_URL.RESET_SUCCESS}
            component={ResetSuccess}
          />
        </Switch>
      </Router>
    );
  }
}

export default Index;
