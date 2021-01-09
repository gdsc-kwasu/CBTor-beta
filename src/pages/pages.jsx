/** @format */

import React from "react";
import loadable from "@loadable/component";
import Loader from "../components/Loader";

/**
 * loadable component is used to lazy load (code split) each component
 * App components are loaded from this file
 */
const Home = loadable(() => import("./Home"), { fallback: <Loader /> });

const Components = loadable(() => import("../components/Components"), {
  fallback: <Loader />,
});

// Authentication Components
const Login = loadable(() => import("./auth/Login"), {
  fallback: <Loader />,
});

const Register = loadable(() => import("./auth/Register"), {
  fallback: <Loader />,
});

const ForgotPwd = loadable(() => import("./auth/ForgotPwd"), {
  fallback: <Loader />,
});

const ResetSuccess = loadable(() => import("./auth/ResetPwd"), {
  fallback: <Loader />,
});

// Dashboard Components
const Dashboard = loadable(() => import("./dashboard/Dashboard"), {
  fallback: <Loader />,
});

const Wallet = loadable(() => import("./dashboard/Wallet"), {
  fallback: <Loader />,
});

const Performance = loadable(() => import("./dashboard/Performance"), {
  fallback: <Loader />,
});

const Feedback = loadable(() => import("./dashboard/Feedback"), {
  fallback: <Loader />,
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
  Wallet,
  Performance,
  Feedback,
};
