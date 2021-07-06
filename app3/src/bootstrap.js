import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

const bootstrap = () => {
  console.log("init app3")
  ReactDOM.render(<App/>, document.getElementById('app'));
};

export default bootstrap;
