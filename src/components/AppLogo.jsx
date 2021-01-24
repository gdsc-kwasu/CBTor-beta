/** @format */

import React from "react";
import { Link } from "react-router-dom";
import PAGES_URL from "../router/router";

const AppLogo = () => {
  return (
    <Link to={PAGES_URL.HOME} className="d-align-center">
      <img
        src="https://res.cloudinary.com/codeleaf/image/upload/v1610148928/logo.svg"
        alt="cbtor-logo"
      />
      <h5 className="mb-0 ml-1 text-white">CBTor</h5>
    </Link>
  );
};

export default AppLogo;
