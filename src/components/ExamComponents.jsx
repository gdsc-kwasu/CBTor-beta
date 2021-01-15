/** @format */

import React from "react";
import Countdown from "react-countdown-now";

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    return <>Voila</>;
  }
  return (
    <span className="font-weight-bold">
      {hours.toString().padStart(2, 0)}:{minutes.toString().padStart(2, 0)}:
      {seconds.toString().padStart(2, 0)}
    </span>
  );
};

const CountContainer = () => {
  return (
    <nav className="d-justify-between mb-4">
      <button className="btn small px-2 font-weight-bold text-danger bg-white">
        <i className="fas fa-times mr-1"></i>Terminate Exam
      </button>
      <div className="countdown bg-white py-1 px-2 rounded shadow text-center">
        <i className="fas fa-stopwatch text-danger mr-1"></i>
        <Countdown date={Date.now() + 10000} renderer={renderer} />
      </div>
    </nav>
  );
};

const ExamDescription = ({ align }) => {
  return (
    <div>
      <h6 className={`font-weight-bold text-success mb-0 ${align}`}>
        Introduction to Education
      </h6>
      <p className={`font-weight-medium mb-2 ${align}`}>EDU 101</p>
    </div>
  );
};

const OptionCategory = () => {
  return (
    <>
      <p className="font-weight-medium mt-2">Index of Questions</p>
      <div className="d-flex mt-2 col-md-8 col-lg-12 px-0">
        <div className="col-4 px-0 d-align-center">
          <div className="box mr-2 bg-success"></div>
          <p className="mb-0 x-small font-weight-medium">Answered</p>
        </div>
        <div className="col-4 px-0 d-align-center">
          <div className="box mr-2 bg-primary"></div>
          <p className="mb-0 x-small font-weight-medium">Current</p>
        </div>
        <div className="col-4 px-0 d-align-center">
          <div className="box mr-2 bg-dark-50"></div>
          <p className="mb-0 x-small font-weight-medium">Unanswered</p>
        </div>
      </div>
    </>
  );
};

export { CountContainer, ExamDescription, OptionCategory };
