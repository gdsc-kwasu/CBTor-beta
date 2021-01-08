/** @format */

import React from "react";
import "../../assets/styles/components/auths.scss";
import { Link } from "react-router-dom";
import cbtor from "../../assets/img/cbtor.png";
import mail from "../../assets/img/mail-success.png";

const Mail = () => {
  return (
    <section className="vh-100 container py-4">
      <div className="d-justify-between">
        <img src={cbtor} alt="Logo of CBTor" className="cbtor-logo px-2" />
        <p className="account px-2">
          Don't have an account,{" "}
          <Link to="/register" className="text-success">
            Sign Up
          </Link>
        </p>
      </div>
      <div className="reset-root py-5 flex-column">
        <div className="d-justify-center">
          <img src={mail} alt="a mail icon" className="mail" />
        </div>
        <div className="text-center title-txt py-5">
          <p className="reset-title">Reset Link Sent</p>
          <p className="mb-4 info">
            Password rest link has been sent to your mail. Click the link to
            setup the new password
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mail;
