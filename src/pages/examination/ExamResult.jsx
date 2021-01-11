/** @format */

import React, { useState } from "react";
import Result from "../../components/Result";

const ExamResult = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="container-fluid overflow-scroll dashboard bg-light">
      <div className="row no-gutters flex-column flex-lg-row">
        <Result setShow={setShow} />
        {show && (
          <div className="bg-aside vh-100 vw-100 d-lg-none position-absolute"></div>
        )}
        <aside
          className={`a-section bg-white p-4 px-md-5 px-lg-3 px-xl-4 px-xxl-5 vh-100 ${
            show ? "open" : "result--section"
          }`}
        >
          <div className="px-md-2 px-lg-1">
            <i
              className="fas fa-times position-absolute closer text-primary d-lg-none"
              onClick={() => setShow(false)}
            ></i>
            <p className="font-weight-bold">Exam Score</p>
            <div className="bg-primary-light d-align-center py-4 px-3 rounded">
              <h5 className="font-weight-bolder mb-0 text-primary">62/100</h5>
              <p className="ml-auto x-small mb-0 col-7 text-center">
                30% better than previous attempt
              </p>
            </div>
            <p className="font-weight-bold mt-4">Test Activity</p>
            <div className="bg-dark-50-light d-align-center py-4 px-3 rounded mb-2">
              <p className="x-small mb-0 text-center">Attempted</p>
              <h5 className="font-weight-bolder mb-0 ml-auto">26</h5>
            </div>
            <div className="bg-success-light text-success d-align-center py-4 px-3 rounded mb-2">
              <p className="x-small mb-0 text-center">Correct</p>
              <h5 className="font-weight-bolder mb-0 ml-auto">26</h5>
            </div>
            <div className="bg-danger-light text-danger d-align-center py-4 px-3 rounded mb-2">
              <p className="x-small mb-0 text-center">Incorrect</p>
              <h5 className="font-weight-bolder mb-0 ml-auto">26</h5>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ExamResult;
