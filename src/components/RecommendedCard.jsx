/** @format */

import React from "react";
import Button from "./Buttons";
import PAGES_URL from "../router/router";

const RecommendedCard = ({ history }) => {
  return (
    <section className="col-12 col-md-6 d-center flex-column px-3 px-sm-5 px-md-4 px-xl-5 mb-xl-4">
      <h6 className="font-weight-medium text-center mb-1">Recommended</h6>
      <p className="small text-center mb-0 text-dark-50 px-1 px-md-0">
        Real-life examination standards. This will simulate the actual
        examination experience.
      </p>
      <div className="d-justify-between w-100 px-3 px-sm-4 px-md-3 mt-3 mt-md-4">
        <div>
          <p className="mb-0 small text-dark-50">
            <i className="fas fa-stopwatch fa-lg text-success mr-1"></i>
            30 Mins
          </p>
        </div>
        <div>
          <p className="mb-0 small text-dark-50">
            <i className="fas fa-book fa-lg text-success mr-1"></i>
            35 Questions
          </p>
        </div>
      </div>
      <div className="col-10 col-sm-9 col-md-11 col-xxl-9 mt-1 mb-md-4">
        <Button
          className="p btn-primary font-weight-medium mt-3 mt-md-4 py-2 w-100"
          type="button"
          onClick={() => history.push(`${PAGES_URL.START_EXAM}/1`)}
        >
          Start Now
        </Button>
      </div>
    </section>
  );
};

export default RecommendedCard;
