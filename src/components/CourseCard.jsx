/** @format */

import React from "react";
import { Link } from "react-router-dom";
import PAGES_URL from "../router/router";

const SubDetails = ({ color }) => {
  return (
    <div className="d-flex flex-wrap mt-1">
      <div className="col-6 px-0">
        <p className="mb-0 x-small text-dark-50">
          <i className={`fas fa-stopwatch mr-1 ${color}`}></i>
          30 Mins
        </p>
      </div>
      <div className="col-6 px-0 mt-sm-0">
        <p className="mb-0 x-small text-dark-50">
          <i className={`fas fa-book  mr-1 ${color}`}></i>
          35 Questions
        </p>
      </div>
    </div>
  );
};

const Details = ({ color }) => {
  return (
    <div className="px-2 px-sm-2 px-xl-3 py-2 py-sm-1 py-lg-2">
      <p className="small mb-0 font-weight-bold">
        INTRODUCTION TO EDUCATION <span className={color}>(EDU 101)</span>
      </p>
      <SubDetails color={color} />
      <div className="d-justify-end mt-1 mt-xl-2">
        <Link
          to={PAGES_URL.START_EXAM}
          className={`small d-block font-weight-medium ${color}`}
        >
          Take Exam <i className="fas fa-angle-right"></i>
        </Link>
      </div>
    </div>
  );
};

const CourseCard = ({ type }) => {
  const color = type || "text-success";
  return (
    <div className="col-6 col-sm-4 col-xl-3 px-1 mb-3">
      <div className="course-card bg-white rounded shadow">
        <img
          src="https://res.cloudinary.com/codeleaf/image/upload/v1606999232/store1.jpg"
          alt=""
          className="img-fluid rounded-top course-img"
        />
        <Details color={color} />
      </div>
    </div>
  );
};

export default CourseCard;
