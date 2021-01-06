/** @format */

import React from "react";
import "../../assets/styles/components/auths.scss";
import { withAlert } from "react-alert";
import Input, { InputPassword } from "../../components/Inputs";
import Button from "../../components/Buttons";
import { Link } from "react-router-dom";
import * as EmailValidator from "email-validator";
import cbtor from "../../assets/img/cbtor.png";
import student from "../../assets/img/student.png";
import google from "../../assets/img/icons_google.png";

const Login = ({ alert }) => {
  const [userLoginAuth, setUserLoginAuth] = React.useState({
    email: "",
    password: "",
  });

  // handles the state of the student's data
  // as they type in their details
  const handleChange = (input) => (e) => {
    setUserLoginAuth({
      ...userLoginAuth,
      [input]: e.target.value,
    });
  };

  const validateStudentInput = () => {
    if (!userLoginAuth.email) {
      alert.error("email cannot be blank");
      return;
    }
    if (!userLoginAuth.password) {
      alert.error("What were you thinking? Please input your password.");
      return;
    }
    if (!EmailValidator.validate(userLoginAuth.email)) {
      alert.error("please provide a valid email address");
      return;
    }
  };

  return (
    <section className="vh-100 container py-4 authBase">
      <img src={cbtor} alt="Logo of CBTor" className="px-2" />
      <div className="root d-justify-between px-2">
        <img
          src={student}
          className="py-5 student"
          alt="A male student working with his computer"
        />
        <div className="formRoot form-login">
          <div className="form-head">
            <h4>Login To Your Account</h4>
            <p className="mb-2 intro-txt">
              Giving You The Real-Life Computer Based Test Experience
            </p>
          </div>
          <div className="mb-2 bottom-rule" />
          <form>
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
              onClick={() => validateStudentInput()}
            >
              Login
            </Button>
            <div className="or d-justify-between py-1 mt-1">
              <div className="hr mt-1" /> Or <div className="hr mt-1" />
            </div>
            <Button className="btn-submit shadow">
              <img
                src={google}
                alt="google logo"
                className="position-absolute withGoogle"
              />
              Login with Google
            </Button>
            <p className="txt py-2">
              <Link to="/forgotpassword" className="txt text-success">
                Forgot password?{" "}
              </Link>
              or don't have an account?{" "}
              <Link to="/register" className="txt text-success">
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
