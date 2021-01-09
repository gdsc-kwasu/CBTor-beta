/** @format */

import React from "react";
import SidebarLink from "./SidebarLink";
import PAGES_URL from "../router/router";

const LogoSection = () => {
  return (
    <div className="py-4 d-center border-bottom-white">
      <div className="d-align-center">
        <img
          src="https://res.cloudinary.com/codeleaf/image/upload/v1610148928/logo.svg"
          alt="cbtor-logo"
        />
        <h5 className="mb-0 ml-1 text-white">CBTor</h5>
      </div>
    </div>
  );
};

const Sidebar = ({ className, closer }) => {
  return (
    <section className={`sidebar px-0 bg-primary vh-max-100 ${className}`}>
      <LogoSection />
      <i
        className="fas fa-times position-absolute closer text-white d-lg-none"
        onClick={closer}
      ></i>
      <div className="py-3">
        <SidebarLink
          exact
          to={PAGES_URL.DASHBOARD}
          icon="https://res.cloudinary.com/codeleaf/image/upload/v1610143210/icons8-book.svg"
          onClick={closer}
        >
          Tests
        </SidebarLink>
        <SidebarLink
          exact
          to={PAGES_URL.WALLET}
          icon="https://res.cloudinary.com/codeleaf/image/upload/v1610143210/icons8-book.svg"
          onClick={closer}
        >
          Wallet
        </SidebarLink>
        <SidebarLink
          exact
          to={PAGES_URL.PERFORMANCE}
          icon="https://res.cloudinary.com/codeleaf/image/upload/v1610143210/icons8-book.svg"
          onClick={closer}
        >
          Performance
        </SidebarLink>
        <SidebarLink
          exact
          to={PAGES_URL.FEEDBACK}
          icon="https://res.cloudinary.com/codeleaf/image/upload/v1610143210/icons8-book.svg"
          onClick={closer}
        >
          Feedback
        </SidebarLink>
      </div>
    </section>
  );
};

export default Sidebar;
