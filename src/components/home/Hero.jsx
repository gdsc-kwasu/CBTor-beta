/** @format */

import React from "react";
import { Link } from "react-router-dom";
import PAGES_URL from "../../router/router"
import Button from "../Buttons";
import HomeNav from "./HomeNav";

const Hero = () => {
  return (
    <div className="hero-bg">
      <div className="home-container py-3 px-3 px-md-4 text-white">
        <HomeNav />
        <div className="d-flex flex-wrap py-4 py-lg-3 pb-lg-5">
          <div
            className="col-12 col-md-6 d-justify-center flex-column px-md-0 wow animate__fadeInLeft"
            data-wow-duration="1s"
          >
            <h1 className="font-weight-regular hero-header text-center text-md-left">
              Get the best online examination experience
            </h1>
            <h6 className="font-weight-light text-center text-md-left">
              Enjoy seemliness real-life online examination experience at your
              comfort.
            </h6>
            <div className="d-flex mt-3 mt-lg-4 d-justify-center d-md-justify-start">
              <Link to={PAGES_URL.LOGIN} className="col-5">
                <Button className="btn-primary btn-submit w-100">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
          <div
            className="col-12 col-md-6 mt-4 mt-md-0 px-md-0 d-align-center wow animate__fadeInRight"
            data-wow-duration="1s"
          >
            <img
              src="https://res.cloudinary.com/codeleaf/image/upload/v1611518730/cbtor/laptop.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
