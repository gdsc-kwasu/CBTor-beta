/** @format */

import React from "react";
import { withRouter } from "react-router-dom";
import Button from "./Buttons";
import PAGES_URL from "../router/router";

const Modal = ({ setModal, history }) => {
  return (
    <div className="w-100 h-100 position-absolute d-center modal">
      <div className="bg-white rounded-lg shadow modal-content py-3">
        <h6 className="font-weight-bold text-center border-bottom-success pb-3">
          Are you sure to Logout?
        </h6>
        <div className="d-center mt-3">
          <Button
            className="p font-weight-bold btn-danger text-white px-4 py-2 mx-2"
            onClick={() => setModal(false)}
          >
            No
          </Button>
          <Button
            className="p font-weight-bold btn-success text-white px-4 py-2 mx-2"
            onClick={() => {
              setModal(false);
              history.push(PAGES_URL.HOME);
            }}
          >
            Yes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Modal);
