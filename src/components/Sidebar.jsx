/** @format */

import React from "react";
import SidebarLink from "./SidebarLink";
import PAGES_URL from "../router/router";

const Sidebar = ({ className, closer }) => {
  return (
    <section className={`sidebar px-0 bg-primary ${className}`}>
      <div className="py-4 d-center border-bottom-white">
        <div className="d-align-center">
          <img
            src="https://res.cloudinary.com/codeleaf/image/upload/v1610148928/logo.svg"
            alt="cbtor-logo"
          />
          <h5 className="mb-0 ml-1 text-white">CBTor</h5>
        </div>
      </div>
      <i
        className="fas fa-times position-absolute closer text-white d-md-none"
        onClick={closer}
      ></i>
      <div className="py-3">
        <SidebarLink
          exact
          to={PAGES_URL.DASHBOARD}
          icon="https://res.cloudinary.com/codeleaf/image/upload/v1610143210/icons8-book.svg"
        >
          Tests
        </SidebarLink>
        <SidebarLink
          exact
          to=""
          icon="https://res.cloudinary.com/codeleaf/image/upload/v1610143210/icons8-book.svg"
        >
          Wallet
        </SidebarLink>
        <SidebarLink
          exact
          to=""
          icon="https://res.cloudinary.com/codeleaf/image/upload/v1610143210/icons8-book.svg"
        >
          Performance
        </SidebarLink>
        <SidebarLink
          exact
          to=""
          icon="https://res.cloudinary.com/codeleaf/image/upload/v1610143210/icons8-book.svg"
        >
          Feedback
        </SidebarLink>
      </div>
    </section>
  );
};

export default Sidebar;
