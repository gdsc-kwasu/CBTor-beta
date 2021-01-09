/** @format */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { withAlert } from "react-alert";
import CourseCard from "../../components/CourseCard";

const Dashboard = ({ alert }) => {
  useEffect(() => {
    alert.success("Welccome Omodunni!!!");
  });

  return (
    <>
      <h6 className="font-weigt-bold mb-0 px-1">
        All Tests <small className="text-dark-50">| 256 Available Tests</small>
      </h6>
      <div className="d-justify-between mt-2 mt-lg-3 px-1">
        <p className="mb-0 font-weight-medium">Mock Tests</p>
        <Link to="" className="d-block text-success text-underline">
          See All
        </Link>
      </div>
      <div className="d-flex flex-wrap">
        {Array.from({ length: 4 }).map((i, idx) => (
          <CourseCard key={idx} />
        ))}
      </div>
      <div className="d-justify-between mt-2 mt-lg-3 px-1">
        <p className="mb-0 font-weight-medium">Paid Tests</p>
        <Link to="" className="d-block text-primary text-underline">
          See All
        </Link>
      </div>
      <div className="d-flex flex-wrap">
        {Array.from({ length: 8 }).map((i, idx) => (
          <CourseCard key={idx} />
        ))}
      </div>
    </>
  );
};

export default withAlert()(Dashboard);
