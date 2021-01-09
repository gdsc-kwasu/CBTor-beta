/** @format */

import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/core";

const Loader = () => {
  const override = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: #3cb89c;
    margin-top: 20px;
    margin-bottom: 20px;
    height: 75vh;
  `;
  return <BeatLoader css={override} size={12} color={"#3cb89c"} />;
};

export default Loader;
