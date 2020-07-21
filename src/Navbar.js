import React from "react";
import "./styles/Navbar.scss";

export default function Navbar() {
  return (
    <div className="Navbar">
      <span className="name">Andrew Trac</span>
      <div className="links">
        <span>About Me</span>
        <span>Portfolio</span>
        <span>CV</span>
        <span>Contact</span>
      </div>
    </div>
  );
}
