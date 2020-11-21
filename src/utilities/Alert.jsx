/** @format */

import React from "react";
import { transitions, positions, Provider as AlertProvider } from "react-alert";

const AlertTemplate = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

const Alert = ({ children }) => {
  const options = {
    position: positions.TOP_RIGHT,
    transition: transitions.FADE,
    timeout: 3000,
    offset: "200px",
  };
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      {children}
    </AlertProvider>
  );
};

export default Alert;
