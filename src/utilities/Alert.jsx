/** @format */

import React from "react";
import { transitions, positions, Provider as AlertProvider } from "react-alert";

const AlertTemplate = ({ message, options }) => {
  return (
    <div className="mr-xxl-4 pt-3 pt-md-4">
      <p
        className={`rounded px-3 px-xl-4 py-1 small mt-5 mr-3 mr-md-4 mr-xxl-5 ${
          options.type === "success"
            ? "alert-success"
            : options.type === "error"
            ? "alert-error"
            : ""
        }`}
      >
        {options.type === "success" ? (
          <i className="fas fa-check-double mr-1"></i>
        ) : options.type === "error" ? (
          <i className="fas fa-exclamation-triangle mr-1"></i>
        ) : (
          ""
        )}
        {message}
      </p>
    </div>
  );
};

const Alert = ({ children }) => {
  const options = {
    position: positions.TOP_RIGHT,
    transition: transitions.FADE,
    timeout: 3000,
    // offset: "300px",
  };
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      {children}
    </AlertProvider>
  );
};

export default Alert;
