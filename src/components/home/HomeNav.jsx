/** @format */

import React, { useState, useEffect } from "react";
import { Link as ReactLink } from "react-router-dom";
import { Link, Events } from "react-scroll";
import AppLogo from "../AppLogo";
import Button from "../Buttons";
import PAGES_URL from "../../router/router";

const HomeNav = () => {
  const [sidebar, setSidebar] = useState(null);
  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });
  }, []);
  return (
    <nav
      className="d-justify-between d-align-center py-2 wow animate__fadeIn"
      data-wow-duration="2s"
    >
      <AppLogo />
      <i
        className="fas fa-bars opener bg-white text-primary p-1 px-2 rounded mr-2 d-md-none"
        onClick={() => setSidebar(true)}
      ></i>
      {sidebar && (
        <div
          className="home-modal vw-100 vh-100 d-md-none"
          onClick={() => setSidebar(null)}
        ></div>
      )}
      <div
        className={`d-flex d-md-align-center flex-column flex-md-row d-non d-md-flex hero-nav px-4 px-md-0 pt-5 pt-md-0 ${
          sidebar && "hero-open"
        }`}
      >
        <i
          className="fas fa-times opener hero-closer bg-white text-primary p-1 px-2 rounded mr-2 d-md-none"
          onClick={() => setSidebar(null)}
        ></i>
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="text-white font-weight-medium ml-md-5 mb-4 mb-md-0 pointer"
          onClick={() => setSidebar(null)}
        >
          Home
        </Link>
        <Link
          to="features"
          spy={true}
          smooth={true}
          duration={500}
          className="text-white font-weight-medium ml-md-5 mb-4 mb-md-0 pointer"
          onClick={() => setSidebar(null)}
        >
          Features
        </Link>
        <Link
          to="sponsors"
          spy={true}
          smooth={true}
          duration={500}
          className="text-white font-weight-medium ml-md-5 mb-4 mb-md-0 pointer"
          onClick={() => setSidebar(null)}
        >
          Sponsors
        </Link>
        <ReactLink to={PAGES_URL.LOGIN}>
          <Button className="btn-white px-5 px-md-4 p py-2 text-primary font-weight-bold ml-md-5 mb-4 mb-md-0">
            Get Started
          </Button>
        </ReactLink>
      </div>
    </nav>
  );
};

export default HomeNav;
