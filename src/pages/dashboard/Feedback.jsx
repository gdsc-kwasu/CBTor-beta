/** @format */

import React from "react";
import Button from "../../components/Buttons";

const Feedback = () => {
  const [feedback, setFeedback] = React.useState("");

  return (
    <section>
      <div className="px-3 py-3 col-sm-12 feedback-area">
        <p className="mb-3 text-dark font-weight-bold">Feedback</p>
        <textarea
          rows="12"
          className="mb-3 form-control col-sm-10"
          defaultValue={feedback}
          placeholder="This is my feedback..."
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <div className="button-container col-sm-10 d-justify-end">
          <Button className="btn-primary btn-md">Send Feedback</Button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
