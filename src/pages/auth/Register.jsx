/** @format */

import React from "react";
import "../../assets/styles/components/auths.scss";
import { withAlert } from "react-alert";
import Input, { InputPassword } from "../../components/Inputs";
import Button from "../../components/Buttons";
import { Link } from "react-router-dom";
import * as EmailValidator from "email-validator";
import cbtor from "../../assets/img/cbtor.png";
import student from "../../assets/img/male-stud.png";
import google from "../../assets/img/icons_google.png";

const Register = ({ alert }) => {
  const [registerAuth, setRegisterAuth] = React.useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (input) => (e) => {
    setRegisterAuth({
      ...registerAuth,
      [input]: e.target.value,
    });
  };

  const validateStudentInput = () => {
    if (!registerAuth.fullname) {
      alert.error("name cannot be blank");
    }
    if (!registerAuth.fullname) {
      alert.error("email cannot be blank");
    }
    if (!registerAuth.fullname) {
      alert.error("What were you thinking? Please input your password.");
    }
    if (!EmailValidator.validate(registerAuth.fullname)) {
      alert.error("please provide a valid email address");
    }
  };

  return (
    <section className="vh-100 container py-2">
      <img src={cbtor} alt="Logo of CBTor" className="px-3" />
      <div className="root d-justify-between px-2">
        <img
          src={student}
          className="py-5 student"
          alt="A female student working with her computer"
        />
        <div className="formRoot px-5 form-register">
          <div className="form-head">
            <h4>Create An Account</h4>
            <p className="mb-2">
              Giving You The Real-Life Computer Based Test Experience
            </p>
          </div>
          <div className="mb-2 bottom-rule" />
          <form>
            <div className="input-group mt-3">
              <label htmlFor="fullname" className="text">
                Your fullname*
              </label>
              <Input
                type="text"
                name="fullname"
                id="fullname"
                className="form-auth mb-3"
                placeholder="Enter your fullname (firstname, then lastname)"
                value={registerAuth.email}
                onChange={handleChange("fullname")}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email address" className="text">
                Email address*
              </label>
              <Input
                type="email"
                name="email"
                id="email"
                className="form-auth mb-3"
                placeholder="Enter your email address"
                value={registerAuth.email}
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
                value={registerAuth.password}
                onChange={handleChange("password")}
              />
            </div>
            <input type="checkbox" className="check" /> I agree to terms &
            conditions
            <Button
              className="btn-primary btn-submit mt-2 shadow"
              onClick={() => validateStudentInput()}
            >
              Sign Up
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
              Already have an account?{" "}
              <Link to="/login" className="txt text-success">
                Login{" "}
              </Link>
              now
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default withAlert()(Register);
