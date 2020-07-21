import React, { useState } from "react";
import "./styles/Header.scss";
import "./styles/Body.scss";
import "./styles/Portfolio.scss"

export default function Body() {

const [portfolio, setPortfolio] = useState("")

console.log(portfolio)

  return (
    <div className="Body">

    {portfolio === "tweeter" && <div className="Header__tweeter" onClick={e => setPortfolio("")}><span>Tweeter</span></div>}
    {portfolio === "" &&  <div className="Header">
      <span style={{fontSize: "60px"}}>Portfolio</span>
    </div>}
    <div className="Portfolio">
      <div className="Portfolio__tweeter" onClick={e => setPortfolio("tweeter")}></div>
      <div className="Portfolio__tweeter" onClick={e => setPortfolio("mapbook")}></div>
      <div className="Portfolio__tweeter"></div>
      <div className="Portfolio__tweeter"></div>
    </div>
    </div>
  );
}
