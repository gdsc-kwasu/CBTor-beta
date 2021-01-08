/** @format */

import React, { useState } from "react";
import Input from "./Inputs";

const Navbar = ({ toggler }) => {
  const [show, setShow] = useState(false);
  return (
    <nav className="bg-white navbar shadow px-3">
      <div className="app-container h-100 d-align-center">
        <i
          className="fas fa-list-alt opener font-weight-regular text-primary mr-2 d-md-none"
          onClick={toggler}
        ></i>
        <div className="col-4 col-sm-5 px-0 position-relative d-none d-md-block">
          <div className="position-absolute h-100 px-2 d-center">
            <i className="fas fa-search text-dark-50"></i>
          </div>
          <Input
            className="w-100 pl-4 pl-sm-5 search-input"
            placeholder="Search"
          />
        </div>
        <p className="font-weight-medium mb-0 ml-auto">Omodunni Alake</p>

        <div className="position-relative mx-2">
          <i
            className="fas fa-angle-down caret-down"
            onClick={() => setShow(!show)}
          ></i>

          {show && (
            <div className="position-absolute dropdown shadow bg-white p-3 mt-1 rounded">
              aaaaa
            </div>
          )}
        </div>
        <img
          src="https://res.cloudinary.com/codeleaf/image/upload/v1606189091/instructor3.svg"
          className="avatar"
          alt="user-avatar"
        />
      </div>
    </nav>
  );
};

export default Navbar;
