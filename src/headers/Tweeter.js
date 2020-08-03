import React from "react";
import tweeter from "../images/tweeter.gif";

export default function Tweeter(props) {
  const { onClick } = props;

  return (
    <div className="Header__tweeter" onClick={onClick}>
      <img src={tweeter} className="Header__demo"></img>
      <div className="Header__info">
        <h3>Tweeter</h3>
        <p>
          Tweeter is a simple, single-page Twitter clone. The project has a
          primary focus on front end development as a dynamic single page
          application with the use of jQuery, HTML, and CSS. It was developed to
          be 'mobile first', and was coded with principles of responsive design
          in mind to accommodate larger resolutions (768px and 1024px).
        </p>
        <p><a href="https://github.com/andrewtrac/tweeter">Github</a></p>
      </div>
    </div>
  );
}
