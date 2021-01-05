/** @format */

import React from "react";
import "../assets/styles/components/buttons";

const Button = ({ className, children }) => {
  return <button className={`btn ${className}`}>{children}</button>;
};

export default Button;
