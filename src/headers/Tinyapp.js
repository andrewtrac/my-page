import React from "react";
import tinyapp from "../images/tinyapp.gif";

export default function Tinyapp(props) {
  const { onClick, headerInfo, headerDemo, max769, headerPosition } = props;

  return (
    <div className={headerPosition} onClick={onClick}>
      <img src={tinyapp} className={headerDemo}></img>
      <div className={headerInfo}>
        <h3>Tinyapp</h3>
        {max769
          ? `Full stack web application used to shorten URLs, with user authentication and some analytics.`
          : `   TinyApp was my first app I developed. Its a full stack web application
            built with Node and Express that allows users to shorten long URLs (à
            la bit.ly). The project was completed through Node.js, HTML/CSS, and
            Express, with a few additional dependencies as well.`}

        <p>
          <a href="https://github.com/andrewtrac/tinyapp">Github</a>
        </p>
      </div>
    </div>
  );
}
