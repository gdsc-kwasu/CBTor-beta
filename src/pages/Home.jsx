/** @format */

import React, { Component } from "react";
import { Element, animateScroll as scroll } from "react-scroll";
import "../assets/styles/components/home.scss";
import Hero from "../components/home/Hero";
import FeatureOne from "../components/home/FeatureOne";
import FeaturesTwo from "../components/home/FeaturesTwo";
import Button from "../components/Buttons";
import Footer from "../components/home/Footer";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div
          className="top d-center pointer"
          onClick={() => scroll.scrollToTop({ duration: 500 })}
        >
          <i className="fas fa-angle-up text-white"></i>
        </div>
        <Element name="home">
          <Hero />
        </Element>
        <div className="home-container">
          <Element name="features">
            <FeatureOne />
          </Element>
          <FeaturesTwo />
          <Element name="sponsors" className="py-5">
            <h5 className="font-weight-bold text-center text-primary">
              OUR S
              <span className="border-bottom-success font-weight-bold feature-underline">
                PON
              </span>
              SORS
            </h5>
            <div className="d-flex flex-wrap py-4">
              <div className="col-6 col-md-4 d-center">
                <img
                  src="https://res.cloudinary.com/codeleaf/image/upload/v1611517406/cbtor/dsc.svg"
                  alt=""
                />
              </div>
              <div className="col-6 col-md-4 d-center">
                <img
                  src="https://res.cloudinary.com/codeleaf/image/upload/v1611517406/cbtor/dsc.svg"
                  alt=""
                />
              </div>
              <div className="col-6 col-md-4 d-center mx-auto mt-5 mt-md-0">
                <img
                  src="https://res.cloudinary.com/codeleaf/image/upload/v1611517406/cbtor/dsc.svg"
                  alt=""
                />
              </div>
            </div>
          </Element>
        </div>
        <div className="bg-primary py-4 px-4">
          <div className="home-container text-white d-center flex-column flex-lg-row py-2">
            <h3 className="mb-0 font-weight-medium text-center">
              Getting started is simple. Be up and running in minutes.
            </h3>
            <Button className="btn-white  p py-3 mt-2 text-primary font-weight-bold col-6 col-md-4 col-lg-2 mx-auto mx-xl-none ml-xl-4">
              Get Started
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
