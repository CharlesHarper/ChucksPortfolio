import React, { Component } from "react";
import { render } from "react-dom";
import Typed from "react-typed";

class Typescript extends Component {
  render() {
    return (
      <div>
        <h3 className="font-weight-bold container" id="typedScripetCSS">
          <Typed
            strings={[
              "I am a Full Stack Web Developer!",
              "Why Me??",
              "Check out my work.",
              "Will work with you."
            ]}
            typeSpeed={50}
            backSpeed={100}
            loop
          />
        </h3>
      </div>
    );
  }
}
export default Typescript;
