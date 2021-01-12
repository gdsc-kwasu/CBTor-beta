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
    color: "#000",
    icon: highScore,
  },
  {
    title: "Average Percentage",
    score: "73%",
    color: "#000",
    icon: percentage,
  },
];

const Performance = () => {
  return (
    <section id="perfromance-root" className="pb-1">
      <div className="performance-details d-flex flex-column col-sm-12">
        <div className="d-flex" id="performance-cards">
          {performance.map((test, index) => {
            return (
              <div
                className="col-md-3 shadow py-1 bg-white card rounded mx-1"
                key={index}
              >
                <img src={test.icon} className="icon" />
                <h3 className="mt-2 text-success" style={{ color: test.color }}>
                  {test.score}
                </h3>
                <p className="small text-success" style={{ color: test.color }}>
                  {test.title}
                </p>
              </div>
            );
          })}
        </div>
        <table
          className="col-sm-12 mt-3 shadow bg-white"
          id="performance-table"
        >
          <thead className="text-dark-50">
            <tr>
              <th>#</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Average (%)</th>
              <th>Average Time</th>
              <th>No of Attempt(s)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>EDU 101</td>
              <td>Introduction to Education</td>
              <td>76%</td>
              <td>24 mins</td>
              <td>5</td>
              <td className="text-success underline">View Attempts</td>
            </tr>
            <tr>
              <td>1</td>
              <td>EDU 101</td>
              <td>Introduction to Education</td>
              <td>76%</td>
              <td>24 mins</td>
              <td>5</td>
              <td className="text-success underline">View Attempts</td>
            </tr>
            <tr>
              <td>1</td>
              <td>EDU 101</td>
              <td>Introduction to Education</td>
              <td>76%</td>
              <td>24 mins</td>
              <td>5</td>
              <td className="text-success underline">View Attempts</td>
            </tr>
            <tr>
              <td>1</td>
              <td>EDU 101</td>
              <td>Introduction to Education</td>
              <td>76%</td>
              <td>24 mins</td>
              <td>5</td>
              <td className="text-success underline">View Attempts</td>
            </tr>
            <tr>
              <td>1</td>
              <td>EDU 101</td>
              <td>Introduction to Education</td>
              <td>76%</td>
              <td>24 mins</td>
              <td>5</td>
              <td className="text-success underline">View Attempts</td>
            </tr>
            <tr>
              <td>1</td>
              <td>EDU 101</td>
              <td>Introduction to Education</td>
              <td>76%</td>
              <td>24 mins</td>
              <td>5</td>
              <td className="text-success underline">View Attempts</td>
            </tr>
            <tr>
              <td>1</td>
              <td>EDU 101</td>
              <td>Introduction to Education</td>
              <td>76%</td>
              <td>24 mins</td>
              <td>5</td>
              <td className="text-success underline">View Attempts</td>
            </tr>
            <tr>
              <td>1</td>
              <td>EDU 101</td>
              <td>Introduction to Education</td>
              <td>76%</td>
              <td>24 mins</td>
              <td>5</td>
              <td className="text-success underline">View Attempts</td>
            </tr>
            <tr>
              <td>1</td>
              <td>EDU 101</td>
              <td>Introduction to Education</td>
              <td>76%</td>
              <td>24 mins</td>
              <td>5</td>
              <td className="text-success underline">View Attempts</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Performance;
