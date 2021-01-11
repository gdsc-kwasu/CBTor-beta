/** @format */

import React from "react";
import { Link } from "react-router-dom";
import PAGES_URL from "../../../router/router";
import CourseCard from "../../../components/CourseCard";

const MockTests = () => {
  return (
    <>
      <Link to={PAGES_URL.EXAM} className="d-block text-success px-1">
        <i className="fas fa-long-arrow-alt-left mr-1"></i>
        Back to All Exams
      </Link>
      <p className="mb-0 font-weight-medium mt-2 mt-lg-3 px-1">Mock Exams</p>
      <div className="d-flex flex-wrap mt-2">
        {Array.from({ length: 16 }).map((i, idx) => (
          <CourseCard key={idx} />
        ))}
      </div>
    </>
  );
};

export default MockTests;
