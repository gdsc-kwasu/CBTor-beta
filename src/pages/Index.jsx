/** @format */

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  // Home,
  Components,
  // Auth Components, fetch components in the order they are exported
  LoginNew,
  SignUp,
  ForgotPassword,
  ResetLink,
  ResetPassword,
  //
  Login,
  Register,
  ForgotPwd,
  ResetSuccess,
  // Dashboard Components
  Dashboard,
  PaidTests,
  MockTests,
  ExamStart,
  Wallet,
  Performance,
  Feedback,
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
          <Route exact path={PAGES_URL.HOME} component={LoginNew} />
          <Route exact path={PAGES_URL.COMPONENTS} component={Components} />
          {/**
           * Authentication routing is done here
           * Once APIs are ready, the Route Components will be changed to authenticated Route components
           * Route component will be named AuthActiveRoute
           */}
          <Route exact path={PAGES_URL.SIGNUP} component={SignUp} />
          <Route exact path={PAGES_URL.FORGOT} component={ForgotPassword} />
          <Route exact path={PAGES_URL.LINK_SENT} component={ResetLink} />
          <Route
            exact
            path={PAGES_URL.RESET_PASSWORD}
            component={ResetPassword}
          />
          <Route exact path={PAGES_URL.LOGIN} component={Login} />
          <Route exact path={PAGES_URL.REGISTER} component={Register} />
          <Route exact path={PAGES_URL.FORGOT_PASSWORD} component={ForgotPwd} />
          <Route
            exact
            path={PAGES_URL.RESET_SUCCESS}
            component={ResetSuccess}
          />
          {/**
           * Examination Components
           */}
          <Route
            exact
            path={`${PAGES_URL.EXAM}/start/:examId`}
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
          </DashboardLayout>
        </Switch>
      </Router>
    );
  }
}

export default Index;
