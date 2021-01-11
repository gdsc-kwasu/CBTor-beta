/** @format */

import React, { useState } from "react";
import InputRange from "react-input-range";
import Button from "./Buttons";
import PAGES_URL from "../router/router";

const CustomCard = ({ history }) => {
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
      <div className="col-10 col-sm-9 col-md-11 col-xxl-9 mt-1 mb-md-4">
        <Button
          className="p btn-primary font-weight-medium mt-3 mt-md-4 py-2 w-100"
          onClick={() => history.push(`${PAGES_URL.START_EXAM}/1`)}
        >
          Start Now
        </Button>
      </div>
    </section>
  );
};

export default CustomCard;
