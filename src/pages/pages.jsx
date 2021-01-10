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

// New Starts here
const LoginNew = loadable(() => import("./auth/LoginNew"), {
  fallback: <Loader />,
});

const SignUp = loadable(() => import("./auth/SignUp"), {
  fallback: <Loader />,
});

const ForgotPassword = loadable(() => import("./auth/ForgotPassword"), {
  fallback: <Loader />,
});

const ResetPassword = loadable(() => import("./auth/ResetPassword"), {
  fallback: <Loader />,
});

// New ends here

// Dashboard Components
const Dashboard = loadable(() => import("./dashboard/courses/Dashboard"), {
  fallback: <Loader />,
});

const PaidTests = loadable(() => import("./dashboard/courses/PaidTests"), {
  fallback: <Loader />,
});

const MockTests = loadable(() => import("./dashboard/courses/MockTests"), {
  fallback: <Loader />,
});

const ExamStart = loadable(() => import("./dashboard/courses/ExamStart"), {
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
  LoginNew,
  SignUp,
  ForgotPassword,
  // Dashboard Components
  Dashboard,
  PaidTests,
  MockTests,
  ExamStart,
  Wallet,
  Performance,
  Feedback,
};
