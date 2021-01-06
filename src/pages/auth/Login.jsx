/** @format */

import React from "react";
import cbtor from "../../assets/img/cbtor.png";
import student from "../../assets/img/student.png";
import "../../assets/styles/components/auths.scss";
import { withAlert } from "react-alert";
import Input, { InputPassword } from "../../components/Inputs";
import Button from "../../components/Buttons";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import * as EmailValidator from "email-validator";

const Login = ({ alert }) => {
  const [userLoginAuth, setUserLoginAuth] = React.useState({
    email: "",
    passowrd: "",
  });

  // handles the state of the student's data
  // as they type in their details
  const handleChange = (input) => (e) => {
    setUserLoginAuth({
      ...userLoginAuth,
      [input]: e.target.value,
    });
    console.log(input);
  };

  const validateStudentInput = () => {
    if (!userLoginAuth.email) {
      alert.warning("email cannot be blank");
      return;
    }
    if (!userLoginAuth.password) {
      alert.warning("What were you thinking? Please input your password.");
      return;
    }
    if (!EmailValidator.validate(userLoginAuth.email)) {
      alert.warning("please provide a valid email address");
      return;
    }
  };

  const signIn = () => {
    validateStudentInput();
  };

  return (
    <section className="vw-100 vh-100 container py-2 px-5">
      <img src={cbtor} alt="Logo of CBTor" className="px-5" />
      <div className="root d-justify-between px-5">
        <img
          src={student}
          className="py-5 student"
          alt="A female student working with her computer"
        />
        <div className="formRoot">
          <h4>Login To Your Account</h4>
          <p className="mb-2">
            Giving You The Real-Life Computer Based Test Experience
          </p>
          <hr className="mb-2" />
          <form className="" method="post">
            <div className="input-group">
              <label htmlFor="email address" className="text">
                Email address*
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                className="form-auth mb-2"
                placeholder="Enter your email address"
                value={userLoginAuth.email}
                onChange={handleChange("email")}
              />
            </div>
            <div className="input-group">
              <label htmlFor="passowrd" className="text">
                Your password*
              </label>
              <InputPassword
                name="password"
                id="pwd"
                placeholder="Enter password"
                value={userLoginAuth.password}
                onChange={handleChange("password")}
              />
            </div>
            <Button
              className="btn-primary btn-submit mt-2 shadow"
              onClick={validateStudentInput}
            >
              Login
            </Button>
            <div className="or d-justify-between py-1 mt-1">
              <div className="hr mt-1" /> Or <div className="hr mt-1" />
            </div>
            <Button className="btn-submit shadow">
              <FeatherIcon icon="google" />
              Login with Google
            </Button>
            <p className="forgot py-1">
              <Link to="/forgot" className="forgot text-success">
                Forgot password?
              </Link>{" "}
              or don't have an account?{" "}
              <Link to="/register" className="forgot text-success">
                Sign Up
              </Link>{" "}
              now
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default withAlert()(Login);
