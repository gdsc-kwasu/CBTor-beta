/** @format */

import React from "react";
import Questions from "./Questions";
import { CountContainer, ExamDescription } from "./ExamComponents";

const ExamGround = () => {
  return (
    <main className="col bg-light px-4 px-md-5 px-lg-4 px-xl-5">
      <section className="w-100 h-10 app-container px-xl-5 py-4 d-flex flex-column pb-5">
        <CountContainer />
        <ExamDescription />
        <div className="mt-2 mt-lg-3 bg-white rounded shadow px-3 py-4 p-sm-5">
          <Questions />
          <div className="mt-2 d-justify-center">
            <div className="col-8 col-md-6 col-lg-5 d-justify-between">
              <button className="btn btn-default">
                <i className="fas fa-backward text-success btn-navigate"></i>
              </button>
              <button className="btn btn-default">
                <i className="fas fa-forward text-success btn-navigate"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExamGround;
