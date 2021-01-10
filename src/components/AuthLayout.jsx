/** @format */

import React from "react";

const Divider = () => {
  return (
    <div className="d-center p mt-3 w-auth">
      <svg
        height="1"
        width={`calc(100px + (120) * ((100vw - 375px) / (1440 - 375)))`}
      >
        <line
          x="0"
          y="0"
          x2={`calc(100px + (120) * ((100vw - 375px) / (1440 - 375)))`}
          y2="0"
          style={{ stroke: "rgba(0, 0, 0, .5)", strokeWidth: 1 }}
        />
      </svg>
      <p className="mb-0 text-dark-50 divider text-center">or</p>
      <svg
        height="1"
        width={`calc(100px + (120) * ((100vw - 375px) / (1440 - 375)))`}
      >
        <line
          x="0"
          y="0"
          x2={`calc(100px + (120) * ((100vw - 375px) / (1440 - 375)))`}
          y2="0"
          style={{ stroke: "rgba(0, 0, 0, .5)", strokeWidth: 1 }}
        />
      </svg>
    </div>
  );
};

const AuthLayout = ({ banner, header, children, content }) => {
  return (
    <main className="container position-relative overflow-scroll d-md-center">
      <div className="row no-gutters vh-md-max">
        <div className="col-12 col-md-6 col-xl-7 vh-md-max px-4 px-sm-5 pr-lg-0 pr-xl-5 mt-5 mt-md-0 pt-5 pt-md-0 d-center">
          <div className="position-absolute app-logo d-flex w-100">
            <img
              src="https://res.cloudinary.com/codeleaf/image/upload/v1610278781/cbtor/Logo.svg"
              alt="logo"
              className="app-logo__img"
            />
          </div>
          <img src={banner} alt="student" className="img-fluid" />
        </div>
        <section className="col-12 col-md-6 col-xl-5 pl-md-0 vh-md-max overflow-scroll">
          <div className="w-100 pr-xl-5 d-flex flex-column d-center py-5">
            <h4 className="font-weight-bolder mb-1 mb-md-2 w-auth text-center text-md-left">
              {header}
            </h4>
            <h6 className="text-dark-50 font-weight-regular border-bottom-success mb-2 pb-2 pb-xl-3 w-auth text-center text-md-left">
              {content ||
                "Giving You The Real-Life Computer Based Test Experience"}
            </h6>
            {children}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AuthLayout;
export { Divider };
