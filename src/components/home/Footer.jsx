/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Input from "../Inputs";
import Button from "../Buttons";

const Footer = () => {
  return (
    <div className="bg-dark py-5">
      <div className="home-container text-white d-flex flex-wrap px-3 px-lg-5">
        <div className="col-6 col-md-3 d-flex flex-column">
          <h6>Communities</h6>
          <Link to="" className="text-white">
            Twitter
          </Link>
          <Link to="" className="text-white">
            Instagram
          </Link>
          <Link to="" className="text-white">
            Facebook
          </Link>
          <Link to="" className="text-white">
            Slack
          </Link>
        </div>
        <div className="col-6 col-md-3 d-flex flex-column">
          <h6>Navigation</h6>
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="features"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white pointer"
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="sponsors"
            spy={true}
            smooth={true}
            duration={500}
            className="text-white pointer"
          >
            Sponsors
          </ScrollLink>
        </div>
        <div className="col-12 col-md-6 col-xl-5 mt-3 mt-md-0">
          <h6>Subscribe Today</h6>
          <p className="font-weight-light">
            Submit your email to get updated about all our latest features
          </p>
          <form className="footer-form d-flex mt-3">
            <div className="col-7 px-0">
              <Input
                className="bg-dark form-auth w-100 text-light"
                placeholder="Enter your email address"
              />
            </div>
            <div className="col">
              <Button className="btn-primary btn-submit w-100 p">
                Get Started
              </Button>
            </div>
          </form>
        </div>
        <div className="col-12 text-center mt-3">
          <p className="mb-0 small">
            &copy;Copyright 2021.{" "}
            <span className="font-weight-bold">DSC KWASU</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
