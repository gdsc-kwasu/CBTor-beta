/** @format */

import React from "react";
import Button from "../../components/Buttons";

const Feedback = () => {
  return (
    <section>
      <p className="mb-3 text-dark font-weight-bold">Feedback</p>
      <div className="">
        <textarea
          rows="13"
          cols="75"
          className="mb-3 form-control col-12 col-md-9 col-xl-9"
          defaultValue="This is my feedback..."
        ></textarea>
      </div>
      <Button className="btn-primary">Send Feedback</Button>
    </section>
  );
};

export default Feedback;
