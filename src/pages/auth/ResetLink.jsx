/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { withAlert } from "react-alert";
import PAGES_URL from "../../router/router";
import "../../assets/styles/components/auth.scss";

const ResetLink = () => {
  return (
    <main className="container position-relative overflow-scroll d-md-center">
      <div className="row no-gutters vh-md-max">
        <div className="col-12 col-md-6 col-xl-7 vh-md-max px-4 px-sm-5 pr-lg-0 pr-xl-5 mt-5 mt-md-0 pt-5 pt-md-0 d-center">
          <div className="position-absolute containerless app-logo d-flex w-100">
            <img
              src="https://res.cloudinary.com/codeleaf/image/upload/v1610278781/cbtor/Logo.svg"
              alt="logo"
              className="app-logo__img"
            />
          </div>
          <div className="col-9 col-md-8 col-xl-6 mt-3 mt-md-0">
            <img
              src="https://res.cloudinary.com/codeleaf/image/upload/v1610284000/cbtor/mail.svg"
              alt="student"
              className="img-fluid"
            />
          </div>
        </div>
        <section className="col-12 col-md-6 col-xl-5 pl-md-0 vh-md-max overflow-scroll">
          <div className="w-100 pr-xl-5 d-flex flex-column d-center py-5">
            <h4 className="font-weight-bolder mb-1 mb-md-2 w-auth text-center text-md-left">
              Reset Link Sent
            </h4>
            <h6 className="text-dark-50 font-weight-regular border-bottom-success mb-2 pb-2 pb-xl-3 w-auth text-center text-md-left">
              Password reset link has been sent to you email. click the link to
              setup new password
            </h6>
            <p className="small mt-3 mb-0 text-dark-50 w-auth text-center text-md-left">
              Back to{" "}
              <Link
                to={PAGES_URL.HOME}
                className="small text-success font-weight-bold"
              >
                Login
              </Link>{" "}
              now
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default withAlert()(ResetLink);
