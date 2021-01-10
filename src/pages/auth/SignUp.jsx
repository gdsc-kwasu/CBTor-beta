/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as EmailValidator from "email-validator";
import { withAlert } from "react-alert";
import Input, { InputPassword } from "../../components/Inputs";
import Button from "../../components/Buttons";
import AuthLayout, { Divider } from "../../components/AuthLayout";
import validator from "../../utilities/validator";
import PAGES_URL from "../../router/router";
import "../../assets/styles/components/auth.scss";

const SignUp = ({ alert }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const test = validator(EmailValidator, email, password, alert, name || " ");
    if (test) {
      // eslint-disable-next-line no-alert
      window.alert("yes");
    }
  };

  return (
    <AuthLayout
      banner="https://res.cloudinary.com/codeleaf/image/upload/v1610278694/cbtor/malestudent.svg"
      header="Create An Account"
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="p text-dark-50 d-block">
            Your fullname*
          </label>
          <Input
            id="name"
            placeholder="Enter your Fullname"
            className="form-auth"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <label className="box-container mt-2 p text-dark-50 font-weight-medium">
          I agree to terms & conditions
          <input
            type="checkbox"
            onChange={() => setChecked(!checked)}
            className="checkbox"
          />
          <span className="checkmark"></span>
        </label>
        <div className="mt-2">
          <Button className="btn-primary btn-submit" type="submit">
            Sign Up
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
            Sign Up with Google
          </Button>
        </div>
        <p className="small mt-3 mb-0 text-dark-50 w-auth">
          Already have an account?{" "}
          <Link
            to={PAGES_URL.HOME}
            className="small text-success font-weight-bold"
          >
            Login
          </Link>{" "}
          now
        </p>
      </form>
    </AuthLayout>
  );
};

export default withAlert()(SignUp);
