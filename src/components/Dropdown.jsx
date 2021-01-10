/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ show, setShow }) => {
  return (
    <div className="position-relative mx-3 mx-md-2">
      <i
        className="fas fa-angle-down caret-down"
        onClick={() => setShow(!show)}
      ></i>
      {show && (
        <div className="position-absolute dropdown shadow bg-white py-1 mt-1 rounded">
          <div className="px-2 px-xl-3 border-bottom-light pb-1">
            <p className="mb-0 small font-weight-medium">Omodunni Alake</p>
            <p className="mb-0 x-small text-dark-50">omodunni.alake@gmai...</p>
          </div>
          <div className="border-bottom-light">
            <Link
              to=""
              className="mb-0 px-2 px-xl-3 x-small text-dark-50 font-weight-medium py-1 d-block"
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
              className="mb-0 px-2 px-xl-3 x-small text-dark-50 font-weight-medium py-1 d-block"
            >
              <img
                src="https://res.cloudinary.com/codeleaf/image/upload/v1610238047/help.svg"
                alt=""
                className="mr-1"
              />{" "}
              Help
            </Link>
          </div>
          <button className="btn-default py-1 d-align-center btn-block x-small text-dark-50 font-weight-bold px-2 px-3">
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
