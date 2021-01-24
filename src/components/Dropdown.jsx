/** @format */

import React from "react";
import { Link } from "react-router-dom";
import PAGES_URL from "../router/router";

const Dropdown = ({ show, setShow, setModal }) => {
  return (
    <div className="position-relative mx-3 mx-md-2">
      <i
        className="fas fa-angle-down caret-down"
        onClick={() => setShow(!show)}
      ></i>
      {show && (
        <div className="position-absolute dropdown shadow bg-white pt-1 mt-1 rounded">
          <div className="px-2 px-xl-3 border-bottom-light pb-1">
            <p className="mb-0 small font-weight-medium">Omodunni Alake</p>
            <p className="mb-0 x-small text-dark-50">omodunni.alake@gmai...</p>
          </div>
          <div className="border-bottom-light">
            <Link
              to={PAGES_URL.PROFILE}
              className="mb-0 px-2 px-xl-3 x-small text-dark-50 font-weight-medium py-1 d-block link-hover"
              onClick={() => setShow(!show)}
            >
              <img
                src="https://res.cloudinary.com/codeleaf/image/upload/v1610238039/profile.svg"
                alt=""
                className="mr-1"
              />{" "}
              CBTor Profile
            </Link>
            <Link
              to=""
              className="mb-0 px-2 px-xl-3 x-small text-dark-50 font-weight-medium py-1 d-block link-hover"
              onClick={() => setShow(!show)}
            >
              <img
                src="https://res.cloudinary.com/codeleaf/image/upload/v1610238047/help.svg"
                alt=""
                className="mr-1"
              />{" "}
              Help
            </Link>
          </div>
          <button
            className="btn-default py-1 d-align-center btn-block x-small text-dark-50 font-weight-bold px-2 px-3 link-hover"
            onClick={() => {
              setModal();
              setShow(!show);
            }}
          >
            <img
              src="https://res.cloudinary.com/codeleaf/image/upload/v1610238042/out.svg"
              alt=""
              className="mr-1"
            />{" "}
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
