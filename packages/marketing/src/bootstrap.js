import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Mount funtion to start the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

//if in dev
if (process.env.NODE_ENV === "development") {
  const EL = document.getElementById("marketing-micro-app");
  if (EL) {
    mount(EL);
  }
}

//export mount for MFE
export { mount };
