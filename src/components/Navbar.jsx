/** @format */

import React, { useState } from "react";
import Input from "./Inputs";
import Dropdown from "./Dropdown";

const SearchBar = () => {
  return (
    <form className="col-8 col-sm-5 px-0 position-relative d-non d-sm-block">
      <div className="position-absolute h-100 px-2 px-xl-3 d-center">
        <i className="fas fa-search text-dark-50"></i>
      </div>
      <Input className="w-100 pl-4 pl-sm-5 search-input" placeholder="Search" />
    </form>
  );
};

const Navbar = ({ toggler, setModal }) => {
  const [show, setShow] = useState(false);
  return (
    <nav className="bg-white navbar shadow px-3">
      <div className="app-container h-100 d-align-center">
        <i
          className="fas fa-bars opener bg-primary text-white p-1 rounded mr-2 d-lg-none"
          onClick={toggler}
        ></i>
        <div className="col d-align-center d-justify-end d-md-justify-between">
          <SearchBar />
          <div className="d-align-center">
            <p className="font-weight-medium mb-0 d-none d-md-block">
              Omodunni Alake
            </p>
            <Dropdown show={show} setShow={setShow} setModal={setModal} />
            <img
              src="https://res.cloudinary.com/codeleaf/image/upload/v1606189091/instructor3.svg"
              className="avatar"
              alt="user-avatar"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
