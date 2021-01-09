/** @format */

import React from "react";
import { Link } from "react-router-dom";

const SubDetails = () => {
  return (
    <div className="d-flex flex-wrap mt-1">
      <div className="col-6 px-0">
        <p className="mb-0 x-small text-dark-50">
          <i className="fas fa-stopwatch text-success mr-1"></i>
          30 Mins
        </p>
      </div>
      <div className="col-6 px-0 mt-sm-0">
        <p className="mb-0 x-small text-dark-50">
          <i className="fas fa-book text-success mr-1"></i>
          35 Questions
        </p>
      </div>
    </div>
  );
};

const Details = () => {
  return (
    <div className="px-2 px-sm-2 px-xl-3 py-2 py-sm-1 py-lg-2">
      <p className="small mb-0 font-weight-bold">
        INTRODUCTION TO EDUCATION{" "}
        <span className="text-success">(EDU 101)</span>
      </p>
      <SubDetails />
      <div className="d-justify-end mt-1 mt-xl-2">
        <Link to="" className="small d-block text-success font-weight-medium">
          Take Exam <i className="fas fa-angle-right"></i>
        </Link>
      </div>
    </div>
  );
};

const CourseCard = () => {
  return (
    <div className="col-6 col-sm-4 col-xl-3 px-1 mb-3">
      <div className="course-card bg-white rounded shadow">
        <img
          src="https://res.cloudinary.com/codeleaf/image/upload/v1606999232/store1.jpg"
          alt=""
          className="img-fluid rounded-top"
        />
        <Details />
      </div>
    </div>
  );
};

export default CourseCard;
