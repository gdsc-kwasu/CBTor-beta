/** @format */

import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import * as EmailValidator from "email-validator";
import { withAlert } from "react-alert";
import Input, { InputPassword } from "../../components/Inputs";
import Button from "../../components/Buttons";
import AuthLayout, { Divider } from "../../components/AuthLayout";
import PAGES_URL from "../../router/router";
import validator from "../../utilities/validator";

const LoginNew = ({ alert, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const test = validator(EmailValidator, email, password, alert);
    if (test) {
      history.push(PAGES_URL.EXAM);
    }
  };

  return (
    <AuthLayout
      banner="https://res.cloudinary.com/codeleaf/image/upload/v1610247155/cbtor/student.svg"
      header="Login To Your Account"
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="p text-dark-50 d-block">
            Email address*
          </label>
          <Input
            // type="email"
            id="email"
            placeholder="Enter your email address"
            className="form-auth"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="p text-dark-50 d-block">
            Your password*
          </label>
          <InputPassword
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <Button className="btn-primary btn-submit" type="submit">
            Login
          </Button>
        </div>
        <Divider />
        <div className="mt-2">
          <Button className="btn-submit d-center" type="button">
            <img
              src="https://res.cloudinary.com/codeleaf/image/upload/v1610248417/cbtor/googlecbt.svg"
              alt="google"
              className="mr-4"
            />{" "}
            Login with Google
          </Button>
        </div>
        <p className="small mt-3 mb-0 text-dark-50 w-auth">
          <Link
            to={PAGES_URL.FORGOT}
            className="small text-success font-weight-bold"
          >
            Forgot password?
          </Link>{" "}
          or don&apos;t have an account?{" "}
          <Link
            to={PAGES_URL.SIGNUP}
            className="small text-success font-weight-bold"
          >
            Sign Up
          </Link>{" "}
          now
        </p>
      </form>
    </AuthLayout>
  );
};

export default withAlert()(withRouter(LoginNew));
