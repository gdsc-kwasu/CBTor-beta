/** @format */

import React from "react";
import Button from "../../components/Buttons";

const Feedback = () => {
  const [feedback, setFeedback] = React.useState("");

  return (
    <form className="px-2 py-3 col-12 col-xl-10 feedback-area">
      <p className="mb-3 text-dark font-weight-bold">Feedback</p>
      <textarea
        rows="12"
        className="mb-3 form-control w-100"
        defaultValue={feedback}
        placeholder="Enter Feedback..."
        onChange={(e) => setFeedback(e.target.value)}
      ></textarea>
      <div className="d-justify-end">
      <Button className="btn-primary btn-submit col-6 col-lg-4 col-xl-3">
        Send Feedback
      </Button>
      </div>
    </form>
  );
};

export default Feedback;
