import React from "react";
import photo from "./images/photo.png";
import "./styles/About.scss";

export default function About() {
  return (
    <div className="About">
      <div className="About__photo">
        <img
          className="photo"
          src={photo}
          style={{ border: "solid 1px black" }}
        ></img>
      </div>

      <div className="About__info">
        <span style={{ fontSize: "30px" }}>Hi. I'm Andrew.</span>
        <br></br>
        <p>
          I'm a full stack developer that's experienced with a few different
          languages and tools. Namely React.JS, Ruby on Rails, and HTML/CSS.
        </p>
        <p>
          Prior to becoming a developer, I spent 10 years working in the human
          resources field across different industries and functions. I've got
          both a B.Com and an MBA from York University, and a Diploma from
          Lighthouse Labs.
        </p>
        <p>Feel free to make yourself at home and look around! Check out my portfolio, take a look at my CV, or send me an email.</p>
      </div>
    </div>
  );
}
