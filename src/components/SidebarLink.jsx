/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

const SidebarLink = ({ children, icon, ...props }) => {
  return (
    <NavLink
      className="text-white nav-link py-2 px-3 px-lg-4 d-align-center d-block font-weight-medium"
      activeClassName="nav-link__active"
      {...props}
    >
      <img src={icon} alt="" className="icon-img mr-1" />
      {children}
    </NavLink>
  );
};

export default SidebarLink;
