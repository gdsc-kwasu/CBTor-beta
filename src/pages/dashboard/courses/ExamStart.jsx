/** @format */

import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import Button from "../../../components/Buttons";

const RecommendedCard = () => {
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
      <div className="col-10 col-sm-9 col-md-11 col-xl-9 mt-1 mb-md-4">
        <Button className="p btn-primary font-weight-medium mt-3 mt-md-4 py-2 w-100">
          Start Now
        </Button>
      </div>
    </section>
  );
};

const CustomCard = () => {
  const [value, setValue] = useState(10);
  const [, setTime] = useState((30 * value) / 35);
  // console.log(Math.ceil(time));
  return (
    <section className="col-12 col-md-6 d-center flex-column px-3 px-sm-5 px-md-4 px-xl-5 mb-4 mb-sm-0 mb-xl-4 mt-5 mt-md-0">
      <h6 className="font-weight-medium text-center mb-1">Custom</h6>
      <p className="small text-center mb-0 text-dark-50 px-1 px-md-0">
        Customize how your examination will be. The amount of questions chosen
        with determine the duration.
      </p>
      <div className="d-justify-between w-100 px-3 px-sm-4 px-md-3 mt-3 mt-md-4 text-success">
        <InputRange
          maxValue={50}
          minValue={0}
          value={value}
          onChange={(val) => {
            setValue(val);
            setTime((30 * val) / 35);
          }}
        />
      </div>
      <div className="col-10 col-sm-9 col-md-11 col-xl-9 mt-1 mb-md-4">
        <Button className="p btn-primary font-weight-medium mt-3 mt-md-4 py-2 w-100">
          Start Now
        </Button>
      </div>
    </section>
  );
};

const ExamStart = () => {
  return (
    <main>
      <div
        className="p d-block text-success px-1 pointer"
        onClick={() => window.history.back()}
      >
        <i className="fas fa-long-arrow-alt-left mr-1"></i>
        Back to Tests
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
            <RecommendedCard />
            <CustomCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExamStart;
