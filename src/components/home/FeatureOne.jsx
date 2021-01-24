/** @format */

import React from "react";

const FeatureOne = () => {
  return (
    <div className="py-5">
      <h5 className="font-weight-bold text-center text-primary">
        FEA
        <span className="border-bottom-success font-weight-bold feature-underline">
          TU
        </span>
        RES
      </h5>
      <div className="col-10 mx-auto">
        <h1 className="hero-header text-center font-weight-light">
          Giving you the best online examination experience
        </h1>
      </div>
      <div className="d-flex flex-wrap mt-5 px-2">
        <div
          className="col-6 col-lg-4 d-align-center flex-column px-md-5 px-lg-3 px-xl-5 wow animate__flipInY"
          data-wow-duration="1s"
        >
          <div className="feature-img d-center">
            <img
              src="https://res.cloudinary.com/codeleaf/image/upload/v1611517405/cbtor/exam.svg"
              alt=""
              className="img-fluid"
            />
          </div>
          <h6 className="text-center mt-3">Real Exam Experience</h6>
          <p className="font-weight-light text-center">
            Write simulated exams with real questions and real-life experience
          </p>
        </div>
        <div
          className="col-6 col-lg-4 d-align-center flex-column px-0 px-md-5 px-lg-3 px-xl-5 wow animate__flipInX"
          data-wow-duration="1s"
        >
          <div className="feature-img d-center">
            <img
              src="https://res.cloudinary.com/codeleaf/image/upload/v1611517405/cbtor/course.svg"
              alt=""
              className="img-fluid"
            />
          </div>
          <h6 className="text-center mt-3">Wide Range of Courses</h6>
          <p className="font-weight-light text-center">
            Access to wide range of courses at your convenience
          </p>
        </div>
        <div
          className="col-6 col-lg-4 mx-auto d-align-center flex-column px-md-5 px-lg-3 px-xl-5 wow animate__flipInY"
          data-wow-duration="1s"
        >
          <div className="feature-img d-center">
            <img
              src="https://res.cloudinary.com/codeleaf/image/upload/v1611517405/cbtor/access.svg"
              alt=""
              className="img-fluid"
            />
          </div>
          <h6 className="text-center mt-lg-3">Unlimited Access</h6>
          <p className="font-weight-light text-center">
            Get unlimited access to questions and solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
