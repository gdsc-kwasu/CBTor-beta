/** @format */

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  Components,
  // Auth Components, fetch components in the order they are exported
  Login,
  Register,
  ForgotPwd,
  ResetSuccess,
  // Dashboard Components
  Dashboard,
  Wallet,
  Performance,
  Feedback,
} from "./pages";
import PAGES_URL from "../router/router";
import DashboardLayout from "../components/DashboardLayout";

class Index extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={PAGES_URL.HOME} component={Home} />
          <Route exact path={PAGES_URL.COMPONENTS} component={Components} />
          {/**
           * Authentication routing is done here
           * Once APIs are ready, the Route Components will be changed to authenticated Route components
           * Route component will be named AuthActiveRoute
           */}
          <Route exact path={PAGES_URL.LOGIN} component={Login} />
          <Route exact path={PAGES_URL.REGISTER} component={Register} />
          <Route exact path={PAGES_URL.FORGOT_PASSWORD} component={ForgotPwd} />
          <Route
            exact
            path={PAGES_URL.RESET_SUCCESS}
            component={ResetSuccess}
          />
          {/**
           * Dashboard
           */}
          <DashboardLayout>
            <Route exact path={PAGES_URL.DASHBOARD} component={Dashboard} />
            <Route exact path={PAGES_URL.WALLET} component={Wallet} />
            <Route exact path={PAGES_URL.PERFORMANCE} component={Performance} />
            <Route exact path={PAGES_URL.FEEDBACK} component={Feedback} />
          </DashboardLayout>
        </Switch>
      </Router>
    );
  }
}

export default Index;
