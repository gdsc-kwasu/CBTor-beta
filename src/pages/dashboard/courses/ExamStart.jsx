/** @format */

import React from "react";
import "react-input-range/lib/css/index.css";
import { withRouter } from "react-router-dom";
import RecommendedCard from "../../../components/RecommendedCard";
import CustomCard from "../../../components/CustomCard";

const ExamStart = ({ history }) => {
  return (
    <main>
      <div
        className="p d-block text-success px-1 pointer"
        onClick={() => window.history.back()}
      >
        <i className="fas fa-long-arrow-alt-left mr-1"></i>
        Back to Exams
      </div>
      <div className="mt-3 col-12 px-1">
        <div className="bg-white rounded shadow py-5 py-md-5 px-3 px-sm-5 px-md-3 px-xl-5">
          <div className="col-12 mb-4 mt-md-2 mt-xl-3">
            <h5 className="mb-0 text-center text-success font-weight-medium">
              Introduction to Education
            </h5>
            <h6 className="font-weight-medium text-center mb-0">EDU 101</h6>
          </div>
          <div className="d-center flex-wrap">
            <RecommendedCard history={history} />
            <CustomCard history={history} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default withRouter(ExamStart);
