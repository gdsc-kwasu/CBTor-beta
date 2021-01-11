/** @format */

import React from "react";
import Button from "./Buttons";
import { OptionCategory } from "./ExamComponents";

const ExamSidebar = () => {
  return (
    <aside className="a-section bg-white p-4 px-md-5 px-lg-3 px-xl-4 px-xxl-5 vh-lg-min">
      <div className="px-md-2 px-lg-1">
        <div className="d-align-center">
          <img
            src="https://res.cloudinary.com/codeleaf/image/upload/v1606189091/instructor3.svg"
            className="exam-avatar"
            alt="user-avatar"
          />
          <div className="ml-3">
            <h6 className="font-weight-bold mb-0 mb-lg-1">Omodunni Alake</h6>
            <p className="mb-0">
              <span className="small mr-1 text-dark-50 font-weight-medium">
                Attempted:
              </span>
              <span className="font-weight-bold">10/30</span>
            </p>
            <p className="mb-0">
              <span className="small mr-1 text-dark-50 font-weight-medium">
                Remaining:
              </span>
              <span className="font-weight-bold">20</span>
            </p>
          </div>
        </div>
        <OptionCategory />
        <div className="d-flex flex-wrap mt-3">
          {Array.from({ length: 30 }).map((i, idx) => (
            <div key={idx} className="col-2 col-lg-option pr-1 pl-0 mb-1">
              <div className="option-card d-center bg-success text-white pointer">
                <p className="small mb-0 font-weight-bold">{idx + 1}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pr-1">
          <Button className="w-100 btn-primary p font-weight-bold mt-1 py-3">
            Submit Test
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default ExamSidebar;
