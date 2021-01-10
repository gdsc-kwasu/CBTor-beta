/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withAlert } from "react-alert";
import Input from "../../components/Inputs";
import Button from "../../components/Buttons";
import AuthLayout from "../../components/AuthLayout";
import PAGES_URL from "../../router/router";
import "../../assets/styles/components/auth.scss";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <AuthLayout
      banner="https://res.cloudinary.com/codeleaf/image/upload/v1610282852/cbtor/reset.svg"
      header="Forgot Password?"
      content="Enter your email address you’re using for your account below and we will send you a password reset link"
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
        <div className="mt-2">
          <Button className="btn-primary btn-submit" type="submit">
            Send Reset Link
          </Button>
        </div>
        <p className="small mt-3 mb-0 text-dark-50 w-auth">
          Back to{" "}
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

export default withAlert()(ForgotPassword);
