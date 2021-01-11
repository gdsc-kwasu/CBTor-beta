/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { ExamDescription } from "./ExamComponents";
import PAGES_URL from "../router/router";

const Question = ({ options, val }) => {
  return (
    <div className="mt-1 mt-lg-0 bg-white rounded shadow px-3 py-3 px-lg-4 px-xxl-5 mb-2">
      <div className="d-flex">
        <span className="small pl-1 pl-md-0 mr-1 mr-sm-2 mr-md-3 mr-xxl-4">
          {val}.
        </span>
        <div>
          <p className="small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eligendi eos temporibus vero?
          </p>
          {Array.from({ length: 4 }).map((i, idx) => (
            <p key={idx} className="small d-align-center mb-0 mt-2 pointer">
              <span className="option option__small mr-2 mr-lg-3 d-center rounded-circle font-weight-medium">
                {options[idx]}
              </span>
              Lorem ipsum dolor sit amet, consectetur
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Result = ({ setShow }) => {
  const options = ["A", "B", "C", "D"];
  return (
    <main className="col bg-light px-3 px-sm-5 px-lg-4 px-xxl-5 vh-lg-max overflow-scroll__lg dashboard">
      <i
        className="fas fa-bars bg-primary text-white p-1 rounded position-absolute closer text-primary d-lg-none"
        onClick={() => setShow(true)}
      ></i>
      <section className="w-100 app-container px-xl-5 py-3 d-flex flex-column pb-5">
        <Link
          to={PAGES_URL.EXAM}
          className="text-success px-1 mt-1 mb-1 mb-md-0 col-6"
        >
          <i className="fas fa-long-arrow-alt-left mr-1"></i>
          Back to All Exams
        </Link>
        <h6 className="font-weight-bolder mb-1 text-center">
          Your Exam Result
        </h6>
        <ExamDescription align="text-center" />
        <h5 className="font-weight-bolder mb-2 text-center d-lg-none d-center">
          <h6 className="mb-0 text-dark-50 mr-1 font-weight-medium">Score: </h6>
          62/100
        </h5>
        {Array.from({ length: 10 }).map((i, idx) => (
          <Question key={idx} options={options} val={idx + 1} />
        ))}
      </section>
    </main>
  );
};

export default Result;
