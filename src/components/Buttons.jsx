/** @format */

import React from "react";
import "../assets/styles/components/buttons";
import PropTypes from "prop-types";

const Button = ({ className, children }) => {
  return <button className={`btn ${className}`}>{children}</button>;
};

export default Button;

// propTypes validation for the button component.
// runs a check on the component to make sure that the
// component's child node isn't empty.
Button.propTypes = {
  children: PropTypes.node.isRequired,
};
