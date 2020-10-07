import React from "react";
import mapbook from "../images/mapbook.gif";

export default function Mapbook(props) {
  const { onClick, headerInfo, headerDemo, max769, headerPosition} = props;

  return (
    <div className={headerPosition} onClick={onClick}>
      <img src={mapbook} className={headerDemo}></img>
      <div className={headerInfo}>
        <h3>Mapbook</h3>

        {max769
          ? `Social media application where users can create, edit, and 'like' custom maps.`
          : `MapBook is a social media application where users can create, edit,
          'like', and share custom maps of their favorite places around the
          world. It leverages the Google Maps API to enable map interaction, and
          is built with PostgreSQL on the back-end and HTML, CSS/SASS, JS,
          jQuery and Ajax on the front-end. Developed as part of a three person team.`}

        <p>
          <a href="https://github.com/andrewtrac/mapbook">Github</a>
          <br></br>
          <a href="https://mapbook.herokuapp.com/">Website</a>
        </p>
      </div>
    </div>
  );
}
