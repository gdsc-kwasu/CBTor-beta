/** @format */

import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import "../assets/styles/components/input.scss";

const Input = ({ className, ...props }) => {
  return (
    <div className="form-group">
      <input type="text" className={`form-control ${className}`} {...props} />
    </div>
  );
};

const InputPassword = ({ ...props }) => {
  const [toggler, setToggler] = useState(false);
  return (
    <div className="form-group position-relative">
      <input
        type={toggler ? "text" : "password"}
        className="form-control form-auth"
        {...props}
      />
      <FeatherIcon
        icon={toggler ? "eye-off" : "eye"}
        className="position-absolute toggler text-dark-50"
        onClick={() => setToggler(!toggler)}
      />
    </div>
  );
};

export default Input;
export { InputPassword };
