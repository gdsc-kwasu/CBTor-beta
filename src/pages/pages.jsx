/** @format */

import React from "react";
import loadable from "@loadable/component";

// loadable component is used to lazy load (code split) each component
const Home = loadable(() => import("./Home"), { fallback: <>Loading</> });
const Login = loadable(() => import("./auth/Login"), {
  fallback: <>Loading</>,
});

export { Home, Login };
