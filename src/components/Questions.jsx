/** @format */

import React from "react";

const Option = ({ option }) => {
  return (
    <p className="d-align-start mb-2 mb-lg-3 pointer">
      <span className="option mr-2 mr-lg-4 d-center rounded-circle font-weight-medium">
        {option}
      </span>
      Lorem ipsum dolor sit amet, consectetur
    </p>
  );
};

const Questions = () => {
  const options = ["A", "B", "C", "D"];
  return (
    <div className="d-flex">
      <span className="pl-1 pl-md-0 mr-2 mr-md-3 mr-xl-4">1.</span>
      <div>
        <p className="mb-2 mb-lg-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          eligendi eos temporibus vero?
        </p>
        {Array.from({ length: 4 }).map((i, idx) => (
          <Option key={idx} option={options[idx]} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
