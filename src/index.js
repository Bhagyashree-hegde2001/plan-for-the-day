import ParticlesBg from "particles-bg";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ParticlesBg color="maroon" num={10} type="fountain" bg={true} />
  </React.StrictMode>,
  document.getElementById("root")
);
