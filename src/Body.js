import React from "react";
import "./styles/Header.scss";
import "./styles/Body.scss";
import "./styles/Portfolio.scss"

export default function Body() {
  return (
    <div className="Body">
    <div className="Header">
      <span style={{fontSize: "60px"}}>Portfolio</span>
    </div>
    <div className="Portfolio">
      <div className="Portfolio__tweeter"></div>
      <div className="Portfolio__tweeter"></div>
      <div className="Portfolio__tweeter"></div>
      <div className="Portfolio__tweeter"></div>
    </div>
    </div>
  );
}
