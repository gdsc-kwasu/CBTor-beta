/** @format */

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Home,
  // Auth Components, fetch components in the order they are exported
  Login,
  SignUp,
  ForgotPassword,
  ResetLink,
  ResetPassword,
  //
  // Dashboard Components
  Dashboard,
  PaidTests,
  MockTests,
  ExamStart,
  Wallet,
  Performance,
  Feedback,
  Profile,
  // Examination Components
  Exam,
  ExamResult,
} from "./pages";
import PAGES_URL from "../router/router";
import DashboardLayout from "../components/DashboardLayout";

class Index extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={PAGES_URL.HOME} component={Home} />
          {/**
           * Authentication routing is done here
           * Once APIs are ready, the Route Components will be changed to authenticated Route components
           * Route component will be named AuthActiveRoute
           */}
          <Route exact path={PAGES_URL.LOGIN} component={Login} />
          <Route exact path={PAGES_URL.SIGNUP} component={SignUp} />
          <Route exact path={PAGES_URL.FORGOT} component={ForgotPassword} />
          <Route exact path={PAGES_URL.LINK_SENT} component={ResetLink} />
          <Route exact path={PAGES_URL.RESET} component={ResetPassword} />
          {/**
           * Examination Components
           */}
          <Route
            exact
            path={`${PAGES_URL.START_EXAM}/:examId`}
            component={Exam}
          />
          <Route exact path={PAGES_URL.EXAM_RESULT} component={ExamResult} />
          {/**
           * Dashboard
           */}
          <DashboardLayout>
            <Route exact path={PAGES_URL.EXAM} component={Dashboard} />
            <Route exact path={PAGES_URL.PAID_TESTS} component={PaidTests} />
            <Route exact path={PAGES_URL.MOCK_TESTS} component={MockTests} />
            <Route exact path={PAGES_URL.START_EXAM} component={ExamStart} />
            <Route exact path={PAGES_URL.WALLET} component={Wallet} />
            <Route exact path={PAGES_URL.PERFORMANCE} component={Performance} />
            <Route exact path={PAGES_URL.FEEDBACK} component={Feedback} />
            <Route exact path={PAGES_URL.PROFILE} component={Profile} />
          </DashboardLayout>
        </Switch>
      </Router>
    );
  }
}

export default Index;
