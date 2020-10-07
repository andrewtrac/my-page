import React from "react";
import photo from "./images/photo.png";
import "./styles/About.scss";

let classNames = require("classnames");


export default function About(props) {

  const { max769 } = props


  let aboutClass = classNames({
    About: !max769,
    AboutSmall: max769,
  });

  let aboutPhotoPosition = classNames({
    About__photo: !max769,
    AboutSmall__photo: max769,
  });

  let aboutPhoto = classNames({
    photo: !max769,
    photo__small: max769,
  });

  let aboutInfo = classNames({
    About__info: !max769,
    AboutSmall__info: max769,
  });




  return (
    <div className={aboutClass}>
        <img
          className={aboutPhoto}
          src={photo}
          style={{ border: "solid 1px black" }}
        ></img>

      <div className={aboutInfo}>
        <span style={ max769 ? { fontSize: "30px", textAlign: "center", width: "100%" } : { fontSize: "30px"}}>Hi. I'm Andrew.</span>
        <br></br>
        <p>
          I'm a full stack developer. I've worked with a few languages and libraries, namely React.JS, Ruby on Rails, Node.JS, and HTML/CSS. I also have experience working with PostgreSQL and setting up RESTful APIs.
        </p>
        <p>
          Prior to becoming a developer, I spent 10 years working in the human
          resources industries. I got
          both a B.Com and an MBA from York University, and a Diploma from
          Lighthouse Labs.
        </p>
        <p>Feel free to make yourself at home and look around! Check out my portfolio, take a look at my CV, or send me an email.</p>
      </div>
    </div>
  );
}
