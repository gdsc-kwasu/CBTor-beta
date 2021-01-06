/** @format */

import React from "react";
import "../../assets/styles/components/auths.scss";
import { withAlert } from "react-alert";
import Input from "../../components/Inputs";
import * as EmailValidator from "email-validator";
import Button from "../../components/Buttons";
import { Link } from "react-router-dom";
import cbtor from "../../assets/img/cbtor.png";

const ForgotPwd = ({ alert }) => {
  const [passwordReset, setPasswordReset] = React.useState({
    password: "",
  });

  // handles the state of the student's data
  // as they type in their details
  const handleChange = (input) => (e) => {
    setPasswordReset({
      ...passwordReset,
      [input]: e.target.value,
    });
  };

  const validateStudentInput = () => {
    if (!passwordReset.email) {
      alert.error("email cannot be blank");
      return;
    }
    if (!EmailValidator.validate(passwordReset.email)) {
      alert.error("please enter a valid email address");
    }
  };

  return (
    <section className="vh-100 container py-4 reset-password">
      <div className="d-justify-between">
        <img src={cbtor} alt="Logo of CBTor" className="cbtor-logo px-2" />
        <p className="account px-2">
          Don't have an account,{" "}
          <Link to="/register" className="text-success">
            Sign Up
          </Link>
        </p>
      </div>
      <div className="py-5 flex-column reset-root">
        <div className="text-center title-txt">
          <p className="">Did you forget your password?</p>
          <p className="mb-4 info">
            Enter your email address you’re using for your account below and we
            will send you a password reset link
          </p>
        </div>
        <div className="formRoot d-justify-center">
          <form>
            <div className="input-group">
              <label htmlFor="email address" className="text">
                Email address*
              </label>
              <Input
                name="email"
                id="pwd"
                className="form-auth"
                placeholder="Enter password"
                value={passwordReset.email}
                onChange={handleChange("email")}
              />
            </div>
            <Button
              className="btn-primary btn-submit mt-2 shadow"
              onClick={() => validateStudentInput()}
            >
              <Link to="/reset-success" className="text-white">
                Send Reset Link
              </Link>
            </Button>
            <div className="or d-justify-between py-1 mt-1"></div>
            <p className="txt py-1 text-center">
              Back to{" "}
              <Link to="/login" className="txt text-success">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default withAlert()(ForgotPwd);
