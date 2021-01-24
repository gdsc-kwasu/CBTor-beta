/** @format */

import React from "react";

const Task = ({ text }) => {
  return (
    <p className="text-dark-50">
      <i className="fas fa-clipboard-check h5 text-success mr-1"></i>
      {text}
    </p>
  );
};

const FeaturesTwo = () => {
  return (
    <div className="d-flex flex-wrap px-lg-5 pb-5">
      <div
        className="col-12 col-md-6 wow animate__rotateInDownLeft"
        data-wow-duration="1s"
      >
        <img
          src="https://res.cloudinary.com/codeleaf/image/upload/v1611521248/cbtor/feature.png"
          alt=""
          className="img-fluid"
        />
      </div>
      <div
        className="col-12 col-md-6 d-center wow animate__lightSpeedInRight"
        data-wow-duration="1s"
      >
        <div className="col-9 col-md-10 col-lg-9">
          <h6 className="text-success">FEATURES</h6>
          <h4 className="font-weight-medium">Get started</h4>
          <Task text="Create an account as a new user" />
          <Task text="Login as an existing user" />
          <Task text="Fast support to retrieve password" />
          <Task text="Periodic Newsletter" />
        </div>
      </div>
      {/** Features Section Two */}
      <div
        className="col-12 col-md-6 d-center order-2 order-md-1 wow animate__lightSpeedInLeft"
        data-wow-duration="1s"
      >
        <div className="col-9 col-md-10 col-lg-9 px-0 pl-md-3 pl-lg-2">
          <h6 className="text-success">FEATURES</h6>
          <h4 className="font-weight-medium">Get started</h4>
          <Task text="User friendly interface" />
          <Task text="Predefined and user-customized exams" />
          <Task text="Correction of each exam" />
          <Task text="Statistics of all exmas taken" />
        </div>
      </div>
      <div
        className="col-12 col-md-6 order-1 order-md-2 wow animate__rotateInDownRight"
        data-wow-duration="1s"
      >
        <img
          src="https://res.cloudinary.com/codeleaf/image/upload/v1611522503/cbtor/feature2.png"
          alt=""
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default FeaturesTwo;
