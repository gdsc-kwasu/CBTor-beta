/** @format */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input, { InputPassword } from "./Inputs";
import Button from "./Buttons";

class Components extends Component {
  render() {
    return (
      <main className="container">
        <div className="row no-gutters">
          {/**
           * This sections shows all text elements
           */}
          <section className="col-12 col-md-6 col-lg-4">
            <h2 className="text-center">Fonts</h2>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <p>paragraph</p>
            <p className="small">small</p>
            <small>small</small>
            <Link to="" className="d-block text-success">
              Link
            </Link>
            <Link to="" className="d-block text-success text-underline">
              Link underline
            </Link>
          </section>
          {/**
           * This section shows the input components
           */}
          <section className="col-12 col-md-6 col-lg-4 d-flex flex-column">
            <h2 className="text-center">Inputs</h2>

            <input placeholder="default Input" className="form-control mb-3" />

            <Input placeholder="Input" className="form-auth mb-3" />

            <div>
              <InputPassword placeholder="Enter your password" />
            </div>

            <div className="d-flex">
              <Button className="mt-3 mr-3">Default Button</Button>
              <Button className="mt-3 btn-success mr-3">Default Button</Button>
              <Button className="mt-3 btn-primary mr-3">Default Button</Button>
            </div>

            <Button className="btn-success btn-submit mt-3">Button</Button>

            <Button className="btn-primary btn-submit mt-3">Button</Button>
          </section>
        </div>
      </main>
    );
  }
}

export default Components;
