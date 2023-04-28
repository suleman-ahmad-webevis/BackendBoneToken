import React from "react";
import ReactLoading from "react-loading";
import { Article } from "./generic";

const Loader = () => (
  <Article>
    <ReactLoading type="spin" color="#b7b7b7" />
  </Article>
);

export default Loader;
