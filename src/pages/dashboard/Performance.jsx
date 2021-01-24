/** @format */

import React from "react";
import testIcon from "../../assets/img/test.svg";
import highScore from "../../assets/img/score.svg";
import percentage from "../../assets/img/percent.svg";

const performance = [
  { title: "Attempeted Tests", score: 54, icon: testIcon },
  {
    title: "Highest Score",
    score: 86,
    color: "#3a3939",
    icon: highScore,
  },
  {
    title: "Average Percentage",
    score: "73%",
    color: "#3a3939",
    icon: percentage,
  },
];

const Performance = () => {
  return (
    <section id="perfromance-root" className="pb-1">
      <div className="d-flex flex-wrap">
        {performance.map((test, index) => {
          return (
            <div
              className="col-12 col-md-4 col-xl-3 px-1 mt-2 mt-md-0"
              key={index}
            >
              <div className="shadow py-2 bg-white card rounded d-align-center px-3">
                <div>
                  <h1
                    className="text-success mb-0"
                    style={{ color: test.color }}
                  >
                    {test.score}
                  </h1>
                  <p
                    className="small text-success font-weight-medium"
                    style={{ color: test.color }}
                  >
                    {test.title}
                  </p>
                </div>
                <img
                  src={test.icon}
                  className="ml-auto col-2 px-1 col-md-3 col-lg-2 px-lg-0"
                  alt=""
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="table-container px-1 mt-4 mt-lg-0">
        <table className="mt-lg-4 shadow bg-white table rounded">
          <thead className="text-dark">
            <tr>
              <th>#</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Average (%)</th>
              <th>Average Time</th>
              <th>No of Attempt(s)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((i, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>EDU 101</td>
                <td>Introduction to Education</td>
                <td>76%</td>
                <td>24 mins</td>
                <td>5</td>
                <td className="text-success text-underline">View Attempts</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Performance;
