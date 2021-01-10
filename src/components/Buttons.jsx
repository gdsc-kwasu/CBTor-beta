/** @format */

import React from "react";
import PropTypes from "prop-types";
import "../assets/styles/components/buttons";

const Button = ({ className, children, ...props }) => {
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

/**
 * propTypes validation for the button component. runs a check on the
 * component to make sure that the component's child node isn't empty.
 */
Button.propTypes = {
  children: PropTypes.node.isRequired,
};
