/** @format */

import React from "react";
import loadable from "@loadable/component";

/**
 * loadable component is used to lazy load (code split) each component
 * App components are loaded from this file
 */
const Home = loadable(() => import("./Home"), { fallback: <>Loading</> });

const Components = loadable(() => import("../components/Components"), {
  fallback: <>Loading</>,
});

// Authentication Components
const Login = loadable(() => import("./auth/Login"), {
  fallback: <>Loading</>,
});

const Register = loadable(() => import("./auth/Register"), {
  fallback: <>Loading</>,
});

const ForgotPwd = loadable(() => import("./auth/ForgotPwd"), {
  fallback: <>loading</>,
});

const ResetSuccess = loadable(() => import("./auth/ResetPwd"), {
  fallback: <>loading</>,
});

// Dashboard Components
const Dashboard = loadable(() => import("./dashboard/Dashboard"), {
  fallback: <>Loading</>,
});

// Note: export components in the order they are fetched
export {
  Home,
  Components,
  // Authentication Components
  Login,
  Register,
  ForgotPwd,
  ResetSuccess,
  // Dashboard Components
  Dashboard,
};
