import React from "react";
import tinyapp from "../images/tinyapp.gif";

export default function Tinyapp(props) {
  const { onClick } = props;

  return (
    <div className="Header__tweeter" onClick={onClick}>
      <img src={tinyapp} className="Header__demo"></img>
      <div className="Header__info">
        <h3>Tinyapp</h3>
        <p>
          TinyApp was my first app I developed. Its a full stack web application
          built with Node and Express that allows users to shorten long URLs (à
          la bit.ly). The project was completed through Node.js, HTML/CSS, and
          Express, with a few additional dependencies as well.
        </p>
        <p>
          <a href="https://github.com/andrewtrac/tinyapp">Github</a>
        </p>
      </div>
    </div>
  );
}
