import React, { useState } from "react";
import Contact from "./Contact"
import "./styles/Navbar.scss";

export default function Navbar(props) {

  const { updatePage, max769 } = props
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    console.log('test')
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };




  return (
    <div className="Navbar">
      <span className="name">Andrew Trac</span>
      <div className="links">
        <span className="link" onClick={e => updatePage("About")}>About Me</span>
        <span className="link" onClick={e => updatePage("Portfolio")}>Portfolio</span>
        <span className="link" onClick={e => window.open("https://resume.creddle.io/resume/dqqhnev3xgi")}>CV</span>
        <span className="link" onClick={e => handleClickOpen()}>Contact</span>
        <Contact max769={max769} open={open} handleClose={handleClose}/>
      </div>
    </div>
  );
}
