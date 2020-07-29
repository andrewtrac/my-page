import React from "react";
import "./styles/Navbar.scss";

export default function Navbar(props) {

  const { updatePage } = props

  return (
    <div className="Navbar">
      <span className="name">Andrew Trac</span>
      <div className="links">
        <span className="link" onClick={e => updatePage("About")}>About Me</span>
        <span className="link" onClick={e => updatePage("Portfolio")}>Portfolio</span>
        <span className="link" onClick={e => window.open("https://resume.creddle.io/resume/dqqhnev3xgi")}>CV</span>
        <span>Contact</span>
      </div>
    </div>
  );
}
