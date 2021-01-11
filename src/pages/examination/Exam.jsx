/** @format */

import React from "react";
import ExamGround from "../../components/ExamGround";
import ExamSidebar from "../../components/ExamSidebar";

const Exam = () => {
  return (
    <div className="container-fluid overflow-scroll dashboard bg-light">
      <div className="row no-gutters flex-column flex-lg-row">
        <ExamGround />
        <ExamSidebar />
      </div>
    </div>
  );
};

export default Exam;
